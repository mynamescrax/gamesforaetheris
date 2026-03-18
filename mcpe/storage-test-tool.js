(function () {
    function hasFs() {
        return typeof window !== 'undefined' && window.FS && typeof window.FS.analyzePath === 'function';
    }

    function exists(path) {
        try {
            return hasFs() && !!window.FS.analyzePath(path).exists;
        } catch (e) {
            return false;
        }
    }

    function isDir(path) {
        try {
            if (!exists(path)) return false;
            var mode = window.FS.stat(path).mode;
            return window.FS.isDir(mode);
        } catch (e) {
            return false;
        }
    }

    function listDir(path) {
        if (!isDir(path)) return [];
        try {
            return window.FS.readdir(path).filter(function (name) {
                return name !== '.' && name !== '..';
            });
        } catch (e) {
            return [];
        }
    }

    function readText(path) {
        if (!exists(path)) return null;
        try {
            return window.FS.readFile(path, { encoding: 'utf8' });
        } catch (e) {
            return null;
        }
    }

    function ensureDir(path) {
        try {
            window.FS.mkdirTree(path);
            return true;
        } catch (e) {
            return exists(path);
        }
    }

    function joinPath(base, name) {
        return base.replace(/\/+$/, '') + '/' + name.replace(/^\/+/, '');
    }

    function copyFile(src, dst) {
        var data = window.FS.readFile(src);
        var lastSlash = dst.lastIndexOf('/');
        if (lastSlash > 0) ensureDir(dst.slice(0, lastSlash));
        window.FS.writeFile(dst, data);
    }

    function migrateEntry(src, dst) {
        if (!exists(src)) return;
        if (!exists(dst)) {
            try {
                ensureDir(dst.slice(0, dst.lastIndexOf('/')));
                window.FS.rename(src, dst);
                return;
            } catch (e) {
            }
        }

        if (isDir(src)) {
            ensureDir(dst);
            listDir(src).forEach(function (name) {
                migrateEntry(joinPath(src, name), joinPath(dst, name));
            });
            try {
                window.FS.rmdir(src);
            } catch (e) {
            }
            return;
        }

        if (!exists(dst)) {
            copyFile(src, dst);
        }
        try {
            window.FS.unlink(src);
        } catch (e) {
        }
    }

    function copyEntryRecursive(src, dst) {
        if (!exists(src)) return false;
        if (isDir(src)) {
            ensureDir(dst);
            listDir(src).forEach(function (name) {
                copyEntryRecursive(joinPath(src, name), joinPath(dst, name));
            });
            return true;
        }
        copyFile(src, dst);
        return true;
    }

    function getPaths() {
        return {
            oldRoot: '/home/webuser/minecraft',
            newRoot: '/home/webuser/game',
            oldOptions: '/home/webuser/minecraft/options.txt',
            newOptions: '/home/webuser/game/options.txt',
            oldWorlds: '/home/webuser/minecraft/games/com.mojang/minecraftWorlds',
            newWorlds: '/home/webuser/game/games/lol.karson/gameWorlds',
            oldCacheWorlds: '/home/webuser/minecraft/cache/games/com.mojang/minecraftWorlds',
            newCacheWorlds: '/home/webuser/game/cache/games/lol.karson/gameWorlds'
        };
    }

    function getReport() {
        var p = getPaths();
        return {
            fsReady: hasFs(),
            oldOptionsExists: exists(p.oldOptions),
            newOptionsExists: exists(p.newOptions),
            oldWorldsExists: exists(p.oldWorlds),
            newWorldsExists: exists(p.newWorlds),
            oldCacheWorldsExists: exists(p.oldCacheWorlds),
            newCacheWorldsExists: exists(p.newCacheWorlds),
            oldWorldIds: listDir(p.oldWorlds),
            newWorldIds: listDir(p.newWorlds),
            oldCacheWorldIds: listDir(p.oldCacheWorlds),
            newCacheWorldIds: listDir(p.newCacheWorlds)
        };
    }

    function syncToIndexedDb() {
        return new Promise(function (resolve, reject) {
            if (!hasFs() || typeof window.FS.syncfs !== 'function') {
                resolve('FS sync unavailable');
                return;
            }
            window.FS.syncfs(false, function (err) {
                if (err) reject(err);
                else resolve('Synced to IndexedDB');
            });
        });
    }

    function runMigration() {
        var p = getPaths();
        ensureDir(p.newRoot);
        migrateEntry(p.oldOptions, p.newOptions);
        migrateEntry(p.oldWorlds, p.newWorlds);
        migrateEntry(p.oldCacheWorlds, p.newCacheWorlds);
        migrateEntry('/home/webuser/minecraft/games/com.mojang', '/home/webuser/game/games/lol.karson');
        migrateEntry('/home/webuser/minecraft/cache/games/com.mojang', '/home/webuser/game/cache/games/lol.karson');
        return syncToIndexedDb().then(function () {
            return getReport();
        });
    }

    function copyWorldBetweenLocalPaths(worldId, fromBasePath, toBasePath) {
        return new Promise(function (resolve, reject) {
            if (!worldId) {
                reject(new Error('Missing world id'));
                return;
            }
            var src = joinPath(fromBasePath, worldId);
            var dst = joinPath(toBasePath, worldId);
            if (!exists(src)) {
                reject(new Error('World not found at ' + src));
                return;
            }
            try {
                copyEntryRecursive(src, dst);
            } catch (e) {
                reject(e);
                return;
            }
            syncToIndexedDb().then(function () {
                resolve(getReport());
            }).catch(reject);
        });
    }

    function renderPanel() {
        var existing = document.getElementById('mcpe-storage-tool-panel');
        if (existing) existing.remove();

        var panel = document.createElement('div');
        panel.id = 'mcpe-storage-tool-panel';
        panel.style.position = 'fixed';
        panel.style.top = '12px';
        panel.style.right = '12px';
        panel.style.zIndex = '40';
        panel.style.width = '360px';
        panel.style.maxHeight = '70vh';
        panel.style.overflow = 'auto';
        panel.style.padding = '12px';
        panel.style.border = '2px solid #111';
        panel.style.background = 'rgba(20, 20, 20, 0.95)';
        panel.style.color = '#fff';
        panel.style.font = '12px/1.4 monospace';

        var title = document.createElement('div');
        title.textContent = 'Storage Test Tool';
        title.style.fontWeight = 'bold';
        title.style.marginBottom = '8px';
        panel.appendChild(title);

        var output = document.createElement('pre');
        output.style.whiteSpace = 'pre-wrap';
        output.style.margin = '0 0 10px 0';
        panel.appendChild(output);

        function refresh() {
            output.textContent = JSON.stringify(getReport(), null, 2);
        }

        function addButton(label, onClick) {
            var button = document.createElement('button');
            button.type = 'button';
            button.textContent = label;
            button.style.marginRight = '8px';
            button.style.marginBottom = '8px';
            button.onclick = onClick;
            panel.appendChild(button);
        }

        addButton('Refresh', refresh);
        addButton('Run Migration', function () {
            output.textContent = 'Running migration...';
            runMigration().then(function (report) {
                output.textContent = JSON.stringify(report, null, 2);
            }).catch(function (err) {
                output.textContent = 'Migration failed:\n' + (err && err.message ? err.message : String(err));
            });
        });
        addButton('Copy Old->New', function () {
            var p = getPaths();
            var worldId = window.prompt('World id to copy from old storage to new storage:');
            if (!worldId) return;
            output.textContent = 'Copying world from old storage...';
            copyWorldBetweenLocalPaths(worldId, p.oldWorlds, p.newWorlds).then(function (report) {
                output.textContent = JSON.stringify(report, null, 2);
            }).catch(function (err) {
                output.textContent = 'Copy failed:\n' + (err && err.message ? err.message : String(err));
            });
        });
        addButton('Copy New->Old', function () {
            var p = getPaths();
            var worldId = window.prompt('World id to copy from new storage to old storage:');
            if (!worldId) return;
            output.textContent = 'Copying world from new storage...';
            copyWorldBetweenLocalPaths(worldId, p.newWorlds, p.oldWorlds).then(function (report) {
                output.textContent = JSON.stringify(report, null, 2);
            }).catch(function (err) {
                output.textContent = 'Copy failed:\n' + (err && err.message ? err.message : String(err));
            });
        });
        addButton('Sync', function () {
            syncToIndexedDb().then(function (msg) {
                refresh();
                console.log('[StorageTool]', msg);
            }).catch(function (err) {
                output.textContent = 'Sync failed:\n' + (err && err.message ? err.message : String(err));
            });
        });
        addButton('Close', function () {
            panel.remove();
        });

        refresh();
        document.body.appendChild(panel);
    }

    window.MCPEStorageTool = {
        onFsReady: function () {
            console.log('[StorageTool] FS ready');
        },
        getPaths: getPaths,
        getReport: getReport,
        printReport: function () {
            var report = getReport();
            console.log('[StorageTool] Report', report);
            return report;
        },
        readOptions: function () {
            var p = getPaths();
            return {
                oldOptions: readText(p.oldOptions),
                newOptions: readText(p.newOptions)
            };
        },
        listWorlds: function () {
            var p = getPaths();
            return {
                oldWorldIds: listDir(p.oldWorlds),
                newWorldIds: listDir(p.newWorlds),
                oldCacheWorldIds: listDir(p.oldCacheWorlds),
                newCacheWorldIds: listDir(p.newCacheWorlds)
            };
        },
        copyOldToNew: function (worldId) {
            return copyWorldBetweenLocalPaths(worldId, getPaths().oldWorlds, getPaths().newWorlds);
        },
        copyNewToOld: function (worldId) {
            return copyWorldBetweenLocalPaths(worldId, getPaths().newWorlds, getPaths().oldWorlds);
        },
        runMigration: runMigration,
        sync: syncToIndexedDb,
        openPanel: renderPanel
    };
})();
