const MCPEBridge = {
    getRenderDprCap: function () {
        return 2.0;
    },

    getEffectiveDevicePixelRatio: function () {
        const dpr = window.devicePixelRatio || 1;
        const cap = this.getRenderDprCap();
        return Math.max(1, Math.min(dpr, cap));
    },

    abyssLeaderboard: {
        status: 'idle',
        entries: [],
        player: null,
        error: '',
        warning: '',
        lastScore: 0,
        lastUsername: '',
        lastUuid: '',
        _requestId: 0,

        reset: function () {
            this.status = 'idle';
            this.entries = [];
            this.player = null;
            this.error = '';
            this.warning = '';
        },

        _normalizeEntry: function (entry, fallbackRank) {
            if (!entry || typeof entry !== 'object') {
                return null;
            }
            return {
                rank: Math.max(1, Number(entry.rank || fallbackRank || 0) | 0),
                username: String(entry.username || 'Guest').slice(0, 32),
                lastScore: Math.max(0, Number(entry.lastScore || 0) | 0),
                highScore: Math.max(0, Number(entry.highScore || 0) | 0)
            };
        },

        _normalizePlayer: function (player) {
            if (!player || typeof player !== 'object') {
                return null;
            }
            return {
                rank: Math.max(1, Number(player.rank || 0) | 0),
                username: String(player.username || 'Guest').slice(0, 32),
                lastScore: Math.max(0, Number(player.lastScore || 0) | 0),
                highScore: Math.max(0, Number(player.highScore || 0) | 0)
            };
        }
    },

    // Filesystem Persistence
    // populate=true: load FROM IndexedDB into memory (first call)
    // populate=false: save FROM memory TO IndexedDB (subsequent calls)
    syncFS: function (populate) {
        return new Promise((resolve, reject) => {
            if (!window.FS || !window.FS.syncfs) {
                console.warn("Storage sync not initialized yet");
                return resolve();
            }
            // Guard against overlapping sync operations
            if (window._fsSyncInFlight) {
                console.warn("Storage sync already in progress, skipping");
                return resolve();
            }
            window._fsSyncInFlight = true;
            window.FS.syncfs(populate, (err) => {
                window._fsSyncInFlight = false;
                if (err) {
                    console.error("Storage sync error:", err);
                    reject(err);
                } else {
                    console.log(`Storage sync complete: ${populate ? 'Loaded from IndexedDB' : 'Saved to IndexedDB'}`);
                    resolve();
                }
            });
        });
    },

    // Keyboard Bridge
    keyboard: {
        visible: false,
        element: null,
        mode: 'default',
        _lastKeyTapAt: {},

        _isMultilineMode: function () {
            return this.mode === 'sign' || this.mode === 'multiline';
        },

        _applyMode: function () {
            if (!this.element) return;
            const multiline = this._isMultilineMode();
            this.element.enterKeyHint = multiline ? 'next' : 'done';
            this.element.rows = multiline ? 2 : 1;
            this.element.dataset.mode = this.mode;
        },

        setMode: function (mode) {
            this.mode = mode || 'default';
            if (!this.element) {
                this.init();
            } else {
                this._applyMode();
            }
        },

        _emitChars: function (text) {
            if (!text || !window.Module || !window.Module._onNativeChar) return;
            for (let i = 0; i < text.length; i++) {
                window.Module._onNativeChar(text.charCodeAt(i));
            }
        },

        _emitKeyTap: function (keyCode) {
            if (!keyCode || !window.Module || !window.Module._onNativeKey) return;
            const now = Date.now();
            if (this._lastKeyTapAt[keyCode] && (now - this._lastKeyTapAt[keyCode]) < 80) {
                return;
            }
            this._lastKeyTapAt[keyCode] = now;
            window.Module._onNativeKey(keyCode, 1);
            window.Module._onNativeKey(keyCode, 0);
        },


        init: function () {
            this.element = document.createElement('textarea');
            this.element.autocomplete = 'off';
            this.element.autocapitalize = 'off';
            this.element.spellcheck = false;
            this.element.wrap = 'off';
            this.element.style.position = 'fixed';
            this.element.style.left = '0px';
            this.element.style.top = '0px';
            this.element.style.width = '1px';
            this.element.style.height = '1px';
            this.element.style.opacity = '0.01';
            this.element.style.fontSize = '16px';
            this.element.style.resize = 'none';
            this.element.style.overflow = 'hidden';
            this.element.style.zIndex = '9999';
            document.body.appendChild(this.element);
            this._applyMode();

            this.element.addEventListener('input', (e) => {
                const inputType = e.inputType || '';
                const char = e.data;
                const value = this.element.value;

                if (inputType === 'deleteContentBackward') {
                    this._emitKeyTap(8);
                } else if (inputType === 'insertLineBreak' || inputType === 'insertParagraph') {
                    this._emitKeyTap(13);
                } else if (char) {
                    this._emitChars(char);
                } else if (value && !char) {
                    this._emitChars(value);
                }
                this.element.value = '';
            });

            this.element.addEventListener('keydown', (e) => {
                let keyCode = 0;
                if (e.key === 'Backspace') keyCode = 8;
                else if (e.key === 'Enter') keyCode = 13;
                else if (e.key === 'Escape') keyCode = 27;
                if (keyCode > 0) {
                    this._emitKeyTap(keyCode);
                    if (keyCode === 13 && !this._isMultilineMode()) {
                        this.hide();
                    }
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }

                if (e.key === 'Backspace' || e.key === 'Enter' || e.key === 'Escape') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });

            this.element.addEventListener('blur', () => {
                // Mobile keyboards can be dismissed via the browser UI without
                // going through our explicit hideKeyboard path.
                this.visible = false;
                this._removeTapOverlay();
            });
        },
        show: function () {
            if (!this.element) this.init();
            this._applyMode();
            this.visible = true;

            // Try focusing immediately — works if we're inside a user gesture
            this.element.focus();

            // On mobile, .focus() outside a user gesture is silently ignored.
            // Show a small overlay that the user can tap to bring up the keyboard.
            if (this._isTouchDevice() && document.activeElement !== this.element) {
                this._showTapOverlay();
            }
        },
        hide: function () {
            if (this.element) this.element.blur();
            this.visible = false;
            this.mode = 'default';
            this._applyMode();
            this._removeTapOverlay();
        },
        _isTouchDevice: function () {
            try {
                if (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) return true;
                if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return true;
            } catch (e) { }
            return false;
        },
        _showTapOverlay: function () {
            this._removeTapOverlay();
            const overlay = document.createElement('div');
            overlay.id = '_mcpe_tap_overlay';
            overlay.textContent = 'Tap to type';
            overlay.style.cssText = 'position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);' +
                'background:rgba(0,0,0,0.7);color:#fff;padding:16px 32px;border-radius:12px;' +
                'font-size:18px;font-family:sans-serif;z-index:10000;cursor:pointer;' +
                'user-select:none;-webkit-user-select:none;pointer-events:auto;';
            overlay.addEventListener('touchstart', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.element) this.element.focus();
                this._removeTapOverlay();
            }, { passive: false });
            overlay.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.element) this.element.focus();
                this._removeTapOverlay();
            });
            document.body.appendChild(overlay);
            this._tapOverlay = overlay;
        },
        _removeTapOverlay: function () {
            if (this._tapOverlay) {
                try { this._tapOverlay.remove(); } catch (e) { }
                this._tapOverlay = null;
            }
        }
    },

    // Networking Bridge (Signaling & WebRTC)
    network: {
        peer: null,
        peerId: null,

        // Performance Tracking
        stats: {
            ppsOut: 0,
            bpsOut: 0,
            ppsIn: 0,
            bpsIn: 0,
            bridgeCalls: 0,
            relaySentDirect: 0,
            relaySentQueued: 0,
            relayDropFull: 0,
            relayDropStale: 0,
            relayDropOversized: 0,
            relayDropBackpressure: 0,
            relayQueuePeakBytes: 0,
            relayQueueAgeMsP95: 0,
            relaySessionQueuedBytes: 0,
            relaySessionQueuedPackets: 0,
            relaySessionOldestAgeMs: 0,
            relayEnqueueRejected: 0,
            relayOverflowDisconnects: 0,
            relaySocketSendErrors: 0,
            relayFallbackUsed: 0,
            lastLogged: Date.now()
        },

        _initStatsTicker: function () {
            if (this._statsInterval) return;
            this._statsInterval = setInterval(() => {
                const now = Date.now();
                const delta = (now - this.stats.lastLogged) / 1000;
                if (delta < 1) return;

                const isIdle = !this.shouldLobbyBeActive() && !this.hasActivePeerConnections() && !this._relayHasBacklog() && this.stats.ppsOut === 0 && this.stats.ppsIn === 0 && this.stats.bridgeCalls === 0;
                if (isIdle) {
                    this._stopStatsTicker();
                    return;
                }

                this.stats.ppsOut = 0;
                this.stats.bpsOut = 0;
                this.stats.ppsIn = 0;
                this.stats.bpsIn = 0;
                this.stats.bridgeCalls = 0;
                this.stats.relaySentDirect = 0;
                this.stats.relaySentQueued = 0;
                this.stats.relayDropFull = 0;
                this.stats.relayDropStale = 0;
                this.stats.relayDropOversized = 0;
                this.stats.relayDropBackpressure = 0;
                this.stats.relayQueuePeakBytes = 0;
                this.stats.relayQueueAgeMsP95 = 0;
                this.stats.relaySessionQueuedBytes = 0;
                this.stats.relaySessionQueuedPackets = 0;
                this.stats.relaySessionOldestAgeMs = 0;
                this.stats.relayEnqueueRejected = 0;
                this.stats.relayOverflowDisconnects = 0;
                this.stats.relaySocketSendErrors = 0;
                this.stats.relayFallbackUsed = 0;
                this.stats.lastLogged = now;
            }, 5000);
        },


        _formatPeerDiagSummary: function () {
            const peers = Object.keys(this._peerDiagnostics || {});
            if (!peers.length) return '';
            peers.sort((a, b) => {
                const da = this._peerDiagnostics[a] || {};
                const db = this._peerDiagnostics[b] || {};
                const sa = (da.relayFallbacks || 0) + (da.duplicateIncomingRejected || 0);
                const sb = (db.relayFallbacks || 0) + (db.duplicateIncomingRejected || 0);
                return sb - sa;
            });
            const top = peers.slice(0, 2).map((peerId) => {
                const d = this._peerDiagnostics[peerId] || {};
                return `${peerId.slice(0, 8)}(d:${d.directSends || 0},rf:${d.relayFallbacks || 0},dup:${d.duplicateIncomingRejected || 0},dial:${d.dialAttempts || 0}/${d.dialCooldownSkips || 0})`;
            });
            return top.join(' ');
        },
        _stopStatsTicker: function () {
            if (!this._statsInterval) return;
            clearInterval(this._statsInterval);
            this._statsInterval = null;
        },
        ws: null,
        connections: {}, // targetFakeIp -> { conn: DataConnection, remotePort: number }
        ipToPeer: {},     // '192.168.1.x' -> peer_id
        peerToIp: {},     // peer_id -> '192.168.1.x'
        dedicatedServersById: {}, // serverId -> metadata
        dedicatedIpToServerId: {}, // fakeIp -> serverId
        dedicatedServerIdToIp: {}, // serverId -> fakeIp
        peerDisconnectState: {}, // fakeIp -> { peerId, remotePort }
        lastRemotePort: {}, // fakeIp -> last known remote port (from lobby or WebRTC)
        pendingPeerDisconnects: {}, // peerId -> timeout id
        _peerDisconnectGraceMs: 4000,
        _peerSessionState: {}, // peerId -> { state, at, reason }
        _peerDiagnostics: {}, // peerId -> counters
        _recentDialByPeer: {}, // peerId -> timestamp ms
        _dialCooldownMs: 1500,
        _maxDataChannelBufferedAmount: 512 * 1024,
        _hostSocketCount: 0,
        _hasHostSocket: false,
        _cleanupAuthorized: false,
        _lastAdvertisedHost: false,
        _wsReconnectDelay: 1000,
        _wsReconnectTimer: null,
        _wsManualClose: false,
        _shutdownDebounceTimer: null,
        _peerLibraryPromise: null,
        _peerInitPromise: null,
        _lastRelayUnavailableLog: 0,
        _maxWsBufferedAmount: 256 * 1024,
        _maxRelayQueueBytes: 512 * 1024,
        _peerVerificationGraceMs: 700,
        _maxRelayQueueAgeMs: 1500,
        _relayFlushTimer: null,
        _relayQueueHigh: [],
        _relayQueueNormal: [],
        _relayQueueBytes: 0,
        _relaySessions: {},
        _relaySessionOrder: [],
        _relaySessionCursor: 0,
        _relaySessionQueuedBytes: 0,
        _relayCapabilities: {
            protocolVersion: 1,
            binaryDedicatedUpload: false,
            received: false
        },
        _relayPressureScore: 0,
        _adaptiveWsBufferedAmount: 256 * 1024,
        _adaptiveRelayQueueBytes: 512 * 1024,
        _adaptiveRelayQueueAgeMs: 1500,
        _multiplayerIntent: {
            locating: false,
            remoteSession: false,
            publicHost: false
        },
        _joinSyncUntilByIp: {},
        _joinSyncGraceMs: 100,
        _joinWarmupQueueByIp: {},
        _joinWarmupTimerByIp: {},
        _joinWarmupAppliedByIp: {},
        _joinWarmupMaxPackets: 128,
        _nextIpSuffix: 2,
        _availableIpSuffixes: [],
        _networkHealthBanner: null,
        _networkHealthBannerHideTimer: null,
        _relayQualityByPeer: {},

        _relayOnlyModeEnabled: function () {
            return window.__MCPE_ALLOW_DIRECT_PEERS !== true;
        },

        _generateRelayPeerId: function () {
            const parts = [];
            const pushHex = (value) => {
                parts.push((value >>> 0).toString(16));
            };

            if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
                const values = new Uint32Array(4);
                window.crypto.getRandomValues(values);
                for (let i = 0; i < values.length; i++) {
                    pushHex(values[i]);
                }
            } else {
                for (let i = 0; i < 4; i++) {
                    pushHex(Math.floor(Math.random() * 0xffffffff));
                }
            }

            pushHex(Date.now() & 0xffffffff);
            return `relay-${parts.join('-')}`;
        },

        _syncHostAdvertisement: function (reason) {
            const shouldAdvertise = this.shouldAdvertiseHost();
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
                return;
            }
            if (shouldAdvertise === this._lastAdvertisedHost) {
                return;
            }
            this._lastAdvertisedHost = shouldAdvertise;
            this.ws.send(JSON.stringify({ type: shouldAdvertise ? 'host' : 'unhost' }));
        },


        _applyRuntimeRelayConfig: function () {
            const cfg = window.__MCPE_RELAY_CONFIG;
            if (!cfg || typeof cfg !== 'object') return;
            const clampInt = (value, fallback, min, max) => {
                const n = Number(value);
                if (!Number.isFinite(n)) return fallback;
                return Math.max(min, Math.min(max, Math.floor(n)));
            };
            const profile = (this._hasHostSocket && cfg.host && typeof cfg.host === 'object') ? cfg.host : cfg;
            let maxWs = clampInt(profile.maxWsBufferedAmount, this._maxWsBufferedAmount, 64 * 1024, 2 * 1024 * 1024);
            let maxQueue = clampInt(profile.maxRelayQueueBytes, this._maxRelayQueueBytes, 128 * 1024, 4 * 1024 * 1024);
            // Scale buffers for multi-player hosts: more peers = more broadcast traffic
            if (this._hasHostSocket) {
                const peerCount = Object.keys(this.connections || {}).length;
                const scale = Math.min(2.0, 1 + peerCount * 0.25);
                maxWs = Math.min(2 * 1024 * 1024, Math.floor(maxWs * scale));
                maxQueue = Math.min(4 * 1024 * 1024, Math.floor(maxQueue * scale));
            }
            this._maxWsBufferedAmount = maxWs;
            this._maxRelayQueueBytes = maxQueue;
            this._maxRelayQueueAgeMs = clampInt(profile.maxRelayQueueAgeMs, this._maxRelayQueueAgeMs, 250, 10000);
            this._joinSyncGraceMs = clampInt(profile.joinSyncGraceMs, this._joinSyncGraceMs, 0, 3000);
            this._joinWarmupMaxPackets = clampInt(profile.joinWarmupMaxPackets, this._joinWarmupMaxPackets, 0, 1024);
            this._adaptiveWsBufferedAmount = this._maxWsBufferedAmount;
            this._adaptiveRelayQueueBytes = this._maxRelayQueueBytes;
            this._adaptiveRelayQueueAgeMs = this._maxRelayQueueAgeMs;
        },

        _ensurePeerDiagnostics: function (peerId) {
            if (!peerId) return null;
            if (!this._peerDiagnostics[peerId]) {
                this._peerDiagnostics[peerId] = {
                    directSends: 0,
                    relayFallbacks: 0,
                    duplicateIncomingRejected: 0,
                    incomingAccepted: 0,
                    dialAttempts: 0,
                    dialCooldownSkips: 0
                };
            }
            return this._peerDiagnostics[peerId];
        },

        _setRelayQuality: function (peerId, mode, reason) {
            if (!peerId) return;
            const prev = this._relayQualityByPeer[peerId] || null;
            if (prev && prev.mode === mode && prev.reason === reason) return;
            this._relayQualityByPeer[peerId] = { mode: mode, reason: reason || '', at: Date.now() };
            if (prev && prev.mode === mode) return;
        },

        _showNetworkHealthWarning: function (message) {
            if (!document || !document.body) return;
            if (!this._networkHealthBanner) {
                const banner = document.createElement('div');
                banner.style.position = 'fixed';
                banner.style.top = '8px';
                banner.style.left = '8px';
                banner.style.right = '8px';
                banner.style.padding = '10px 12px';
                banner.style.background = 'rgba(140,0,0,0.92)';
                banner.style.color = '#fff';
                banner.style.font = '600 13px/1.3 sans-serif';
                banner.style.border = '1px solid rgba(255,255,255,0.35)';
                banner.style.borderRadius = '8px';
                banner.style.zIndex = '999999';
                banner.style.pointerEvents = 'none';
                banner.style.display = 'none';
                document.body.appendChild(banner);
                this._networkHealthBanner = banner;
            }
            this._networkHealthBanner.textContent = message;
            this._networkHealthBanner.style.display = 'block';
            if (this._networkHealthBannerHideTimer) {
                clearTimeout(this._networkHealthBannerHideTimer);
            }
            this._networkHealthBannerHideTimer = setTimeout(() => {
                if (this._networkHealthBanner) {
                    this._networkHealthBanner.style.display = 'none';
                }
            }, 5000);
        },

        _setPeerSessionState: function (peerId, state, reason) {
            if (!peerId) return;
            this._peerSessionState[peerId] = { state: state, at: Date.now(), reason: reason || '' };
        },

        _ensureRelayPeerEntry: function (address, peerId, remotePort) {
            if (!address) return null;

            let entry = this.connections[address];
            const normalizedPort = Number(remotePort) || (entry ? (entry.remotePort || 19132) : 19132);
            if (!entry) {
                entry = {
                    conn: null,
                    remotePort: normalizedPort,
                    peerId: peerId || null,
                    verified: !this.needsPeerVerification()
                };
                this.connections[address] = entry;
            } else {
                entry.remotePort = normalizedPort;
                if (!entry.peerId && peerId) {
                    entry.peerId = peerId;
                }
                if (!this.needsPeerVerification()) {
                    entry.verified = true;
                }
            }

            this.peerDisconnectState[address] = {
                peerId: peerId || entry.peerId || null,
                remotePort: normalizedPort
            };
            return entry;
        },

        _receiveWithJoinGuard: function (address, targetPort, sourcePort, payload) {
            this.receivePacket(address, targetPort, sourcePort, payload);
        },

        _isConnectionUsable: function (entry) {
            if (!entry || !entry.conn) return false;
            if (entry.conn.open) return true;
            const dc = entry.conn.dataChannel;
            if (dc && dc.readyState === 'open') return true;
            return false;
        },

        _isDirectPreferredPurpose: function (purpose) {
            const text = String(purpose || '').toLowerCase();
            return text.indexOf('interaction') !== -1 ||
                text.indexOf('critical') !== -1 ||
                text.indexOf('control') !== -1 ||
                text.indexOf('combat') !== -1;
        },

        _tryDirectBroadcastFanout: function (targetPort, sourcePort, rawData, purpose) {
            if (this._relayOnlyModeEnabled()) {
                return false;
            }
            if (!this._hasHostSocket || !this._isDirectPreferredPurpose(purpose) || !rawData || rawData.length > 350) {
                return false;
            }

            const peerIds = Object.keys(this.peerToIp || {});
            if (!peerIds.length) {
                return false;
            }

            const readyEntries = [];
            for (let i = 0; i < peerIds.length; i++) {
                const peerId = peerIds[i];
                const ip = this.peerToIp[peerId];
                if (!ip) continue;

                const entry = this.connections[ip];
                const dc = entry && entry.conn ? entry.conn.dataChannel : null;
                const congested = dc && typeof dc.bufferedAmount === 'number' &&
                    dc.bufferedAmount > this._maxDataChannelBufferedAmount;
                if (!this._isConnectionUsable(entry) || congested) {
                    this.establishConnection(ip, peerId);
                    return false;
                }
                readyEntries.push(entry);
            }

            for (let i = 0; i < readyEntries.length; i++) {
                const entry = readyEntries[i];
                try {
                    const payload = new Uint8Array(4 + rawData.length);
                    const view = new DataView(payload.buffer);
                    view.setUint16(0, targetPort, true);
                    view.setUint16(2, sourcePort, true);
                    payload.set(rawData, 4);
                    entry.conn.send(payload);
                    if (entry.peerId) {
                        const diag = this._ensurePeerDiagnostics(entry.peerId);
                        if (diag) diag.directSends += 1;
                        this._setRelayQuality(entry.peerId, 'direct', 'broadcast-datachannel-send');
                    }
                } catch (err) {
                    if (entry.peerId) {
                        const diag = this._ensurePeerDiagnostics(entry.peerId);
                        if (diag) diag.relayFallbacks += 1;
                        this.establishConnection(this.peerToIp[entry.peerId], entry.peerId);
                    }
                }
            }

            return readyEntries.length > 0;
        },

        init: function () {
            this._applyRuntimeRelayConfig();

            const handlePageExit = () => {
                this._wsManualClose = true;
                this.shutdownTransport();
            };
            const handleVisibilityResume = () => {
                if (document.hidden) {
                    return;
                }
                if (this.shouldLobbyBeActive()) {
                    this.refreshTransportState();
                    this.refreshPeerVerification('page-visible');
                }
            };

            window.addEventListener('beforeunload', handlePageExit);
            window.addEventListener('unload', handlePageExit);
            document.addEventListener('visibilitychange', handleVisibilityResume);
            window.addEventListener('pageshow', handleVisibilityResume);
            window.addEventListener('focus', handleVisibilityResume);
        },

        setMultiplayerIntent: function (isLocating, isRemoteSession, isPublicHost) {
            const nextIntent = {
                locating: !!isLocating,
                remoteSession: !!isRemoteSession,
                publicHost: !!isPublicHost
            };
            const prevIntent = this._multiplayerIntent;
            if (prevIntent.locating === nextIntent.locating &&
                prevIntent.remoteSession === nextIntent.remoteSession &&
                prevIntent.publicHost === nextIntent.publicHost) {
                return;
            }

            this._multiplayerIntent = nextIntent;
            this._syncHostAdvertisement('intent-change');
            this.refreshTransportState();
        },

        hasActivePeerConnections: function () {
            return Object.keys(this.connections).length > 0;
        },

        hasTrackedPeerSessions: function () {
            return Object.keys(this.peerDisconnectState).length > 0;
        },

        shouldLobbyBeActive: function () {
            return this._multiplayerIntent.locating ||
                this._multiplayerIntent.remoteSession ||
                this._multiplayerIntent.publicHost ||
                this.hasActivePeerConnections() ||
                this.hasTrackedPeerSessions();
        },

        shouldAdvertiseHost: function () {
            return this._hasHostSocket && this._multiplayerIntent.publicHost;
        },

        needsPeerVerification: function () {
            return this._hasHostSocket &&
                (this._multiplayerIntent.publicHost || this.hasTrackedPeerSessions());
        },

        _setAuthoritativeInfo: function (fakeIp, username, uuid) {
            if (window.Module && Module.ccall) {
                Module.ccall('mcpe_setAuthoritativeInfo', 'v',
                    ['string', 'string', 'string'],
                    [fakeIp, username || '', uuid || '']);
            }
        },

        _clearAuthoritativeInfo: function (fakeIp) {
            if (!fakeIp || !window.Module || !Module.ccall) {
                return;
            }
            Module.ccall('mcpe_clearAuthoritativeInfo', 'v', ['string'], [fakeIp]);
        },

        _clearAllAuthoritativeInfo: function () {
            if (window.Module && Module.ccall) {
                Module.ccall('mcpe_clearAllAuthoritativeInfo', 'v', [], []);
            }
        },

        _requestPeerVerification: function (peerId) {
            if (!peerId || !this.needsPeerVerification()) {
                return;
            }
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
                return;
            }
            this.ws.send(JSON.stringify({ type: 'get_peer_info', peerId: peerId }));
        },

        refreshPeerVerification: function (reason) {
            if (!this.needsPeerVerification() || !this.ws || this.ws.readyState !== WebSocket.OPEN) {
                return;
            }
            for (const address of Object.keys(this.connections)) {
                const entry = this.connections[address];
                if (!entry || !entry.peerId) {
                    continue;
                }
                this._requestPeerVerification(entry.peerId);
            }
        },

        refreshClientProfile: function () {
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
                return;
            }
            this.ws.send(JSON.stringify({
                type: 'update_client_profile',
                clientUuid: window.MCPEBridge ? window.MCPEBridge.getClientUUID() : ''
            }));
        },

        refreshTransportState: function () {
            if (!this.shouldLobbyBeActive()) {
                // Debounce: don't destroy the transport immediately.  During the
                // hostMultiplayer -> generateLevel -> _levelGenerated sequence all
                // calls happen synchronously in one JS turn, so a setTimeout
                // callback can never fire until the C++ returns.  _levelGenerated
                // will flip isPublicHost=true and cancel this timer before it runs.
                if (!this._shutdownDebounceTimer) {
                    this._shutdownDebounceTimer = setTimeout(() => {
                        this._shutdownDebounceTimer = null;
                        if (!this.shouldLobbyBeActive()) {
                            this.shutdownTransport();
                        }
                    }, 2000);
                }
                return;
            }
            if (this._shutdownDebounceTimer) {
                clearTimeout(this._shutdownDebounceTimer);
                this._shutdownDebounceTimer = null;
            }
            this.ensurePeerReady()
                .then((peerId) => {
                    if (!peerId || !this.shouldLobbyBeActive()) return;
                    this.connectLobby();
                })
                .catch((err) => {});
        },

        shutdownTransport: function () {
            if (this._shutdownDebounceTimer) {
                clearTimeout(this._shutdownDebounceTimer);
                this._shutdownDebounceTimer = null;
            }
            this._cleanupAuthorized = true;
            this._cancelReconnect();
            this.closeLobby(true);
            // Native teardown paths (leaveGame / host stop) already shut RakNet
            // down first. Avoid sending a second close notification back into
            // wasm while the client world is being destroyed.
            this.cleanupAllConnections(false);
            this._resetPeerMappings();
            this._destroyPeer();
            this._relayQueueHigh = [];
            this._relayQueueNormal = [];
            this._relayQueueBytes = 0;
            this._relaySessions = {};
            this._relaySessionOrder = [];
            this._relaySessionCursor = 0;
            this._relaySessionQueuedBytes = 0;
            this._relayCapabilities = {
                protocolVersion: 1,
                binaryDedicatedUpload: false,
                received: false
            };
            this._cancelRelayFlush();
            this._stopStatsTicker();
            this._peerSessionState = {};
            this._peerDiagnostics = {};
            this._joinSyncUntilByIp = {};
            for (const ip of Object.keys(this._joinWarmupTimerByIp)) {
                clearTimeout(this._joinWarmupTimerByIp[ip]);
            }
            this._joinWarmupTimerByIp = {};
            this._joinWarmupQueueByIp = {};
            this._cleanupAuthorized = false;
        },

        _ensurePeerLibrary: function () {
            if (typeof window.Peer === 'function') {
                return Promise.resolve();
            }
            if (this._peerLibraryPromise) {
                return this._peerLibraryPromise;
            }

            this._peerLibraryPromise = new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js';
                script.onload = () => resolve();
                script.onerror = (err) => {
                    this._peerLibraryPromise = null;
                    reject(err || new Error('Failed to load PeerJS'));
                };
                document.head.appendChild(script);
            });
            return this._peerLibraryPromise;
        },

        ensurePeerReady: function () {
            if (this.peer && this.peerId && !this.peer.destroyed) {
                return Promise.resolve(this.peerId);
            }
            if (this._relayOnlyModeEnabled() && this.peerId) {
                return Promise.resolve(this.peerId);
            }
            if (this._peerInitPromise) {
                return this._peerInitPromise;
            }

            if (this._relayOnlyModeEnabled()) {
                this._peerInitPromise = Promise.resolve().then(() => {
                    if (!this.shouldLobbyBeActive()) {
                        this._peerInitPromise = null;
                        return null;
                    }
                    if (!this.peerId) {
                        this.peerId = this._generateRelayPeerId();
                    }
                    const id = this.peerId;
                    this._peerInitPromise = null;
                    return id;
                });
                return this._peerInitPromise;
            }

            this._peerInitPromise = this._ensurePeerLibrary().then(() => new Promise((resolve, reject) => {
                if (!this.shouldLobbyBeActive()) {
                    this._peerInitPromise = null;
                    resolve(null);
                    return;
                }

                // Defer Peer creation to next tick to avoid blocking the main thread
                // (e.g. when toggling server visibility, the Peer constructor can freeze the UI)
                const initPeer = () => {
                    if (!this.shouldLobbyBeActive()) {
                        this._peerInitPromise = null;
                        resolve(null);
                        return;
                    }
                    const peer = new Peer({
                    debug: 1,
                    config: {
                        iceServers: window.__MCPE_ICE_SERVERS || [
                            { urls: 'stun:stun.l.google.com:19302' },
                            { urls: 'stun:stun1.l.google.com:19302' }
                        ],
                        iceTransportPolicy: window.__MCPE_ICE_TRANSPORT_POLICY === 'relay' ? 'relay' : 'all'
                    }
                });
                let settled = false;
                this.peer = peer;
                this.peerId = null;

                peer.on('open', (id) => {
                    if (this.peer !== peer) return;
                    this.peerId = id;
                    if (!settled) {
                        settled = true;
                        this._peerInitPromise = null;
                        resolve(id);
                    }
                    if (this.shouldLobbyBeActive()) {
                        this.connectLobby();
                    } else {
                        this.shutdownTransport();
                    }
                });

                peer.on('disconnected', () => {
                    if (this.peer !== peer) return;
                    this.peerId = null;
                    this.closeLobby(false);
                    if (this.shouldLobbyBeActive() && !peer.destroyed) {
                        try {
                            peer.reconnect();
                        } catch (err) {}
                    }
                });

                peer.on('close', () => {
                    if (this.peer !== peer) return;
                    this.peer = null;
                    this.peerId = null;
                    this._peerInitPromise = null;
                    if (this.shouldLobbyBeActive()) {
                        setTimeout(() => this.refreshTransportState(), 500);
                    }
                });

                peer.on('error', (err) => {
                    if (this.peer !== peer) return;
                    if (err && err.type === 'peer-unavailable') {
                        const targetPeerId = err.peer || (err.message && err.message.match(/peer ([a-f0-9-]+)/i)?.[1]);
                        if (targetPeerId) {
                            const fakeIp = this.peerToIp[targetPeerId];
                            if (fakeIp) {
                                const entry = this.connections[fakeIp];
                                if (entry && entry.peerId) {
                                    this._setPeerSessionState(entry.peerId, 'relay-only', 'peer-unavailable');
                                    this._setRelayQuality(entry.peerId, 'relay', 'peer-unavailable');
                                }
                            }
                        }
                    }
                    if (!settled) {
                        settled = true;
                        this._peerInitPromise = null;
                        reject(err);
                    }
                });

                peer.on('connection', (conn) => {
                    if (this.peer !== peer) return;
                    this._setupIncomingConnection(conn);
                });
                };
                setTimeout(initPeer, 0);
            }));

            return this._peerInitPromise;
        },

        connectLobby: function () {
            if (!this.shouldLobbyBeActive() || !this.peerId) return;
            if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) return;

            try {
                const wsUrl = (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host;
                const ws = new WebSocket(wsUrl);
                ws.binaryType = 'arraybuffer';
                this.ws = ws;
                this._wsManualClose = false;

                ws.onopen = () => {
                    this._wsReconnectDelay = 1000;
                    this._lastAdvertisedHost = false;
                    this._relayCapabilities = {
                        protocolVersion: 1,
                        binaryDedicatedUpload: false,
                        received: false
                    };
                    ws.send(JSON.stringify({
                        type: 'register_client',
                        peerId: this.peerId,
                        clientUuid: window.MCPEBridge ? window.MCPEBridge.getClientUUID() : ''
                    }));
                    ws.send(JSON.stringify({ type: 'list_dedicated_servers' }));
                    this._syncHostAdvertisement('ws-open');
                    this.refreshPeerVerification('ws-open');
                    this._flushRelayQueue();
                    this._scheduleRelayFlush();
                };

                ws.onerror = (event) => {
                    const buffered = (typeof ws.bufferedAmount === 'number') ? ws.bufferedAmount : 0;
                    const activePeers = Object.keys(this.connections).length;
                    console.warn(
                        `[Lobby] WebSocket error (readyState=${ws.readyState}, buffered=${buffered}, ` +
                        `relayQueueBytes=${this._relayQueueBytes}, activePeers=${activePeers}).`,
                        event
                    );
                };

                ws.onclose = (event) => {
                    const closeCode = event && typeof event.code === 'number' ? event.code : 0;
                    const closeReason = event && event.reason ? String(event.reason) : '';
                    const buffered = (typeof ws.bufferedAmount === 'number') ? ws.bufferedAmount : 0;
                    const activePeers = Object.keys(this.connections).length;
                    console.warn(
                        `[Lobby] WebSocket closed during gameplay bridge. code=${closeCode || 0}` +
                        `${closeReason ? ` reason=${closeReason}` : ''}` +
                        ` buffered=${buffered} relayQueueBytes=${this._relayQueueBytes} activePeers=${activePeers}`
                    );
                    if (this.ws === ws) {
                        this.ws = null;
                    }
                    this._relayCapabilities = {
                        protocolVersion: 1,
                        binaryDedicatedUpload: false,
                        received: false
                    };
                    this._cancelRelayFlush();
                    this._relaySessions = {};
                    this._relaySessionOrder = [];
                    this._relaySessionCursor = 0;
                    this._relaySessionQueuedBytes = 0;
                    const shouldReconnect = !this._wsManualClose && this.shouldLobbyBeActive();
                    this._wsManualClose = false;
                    if (shouldReconnect) {
                        this._scheduleReconnect();
                    }
                };

                ws.onmessage = (event) => {
                    this._handleLobbyMessage(event);
                };
            } catch (e) {
                this.ws = null;
                if (!this._wsManualClose && this.shouldLobbyBeActive()) {
                    this._scheduleReconnect();
                }
            }
        },

        closeLobby: function (manualClose) {
            this._cancelReconnect();
            const ws = this.ws;
            if (!ws) return;

            this._wsManualClose = manualClose !== false;
            this.ws = null;
            this._cancelRelayFlush();
            this._relaySessions = {};
            this._relaySessionOrder = [];
            this._relaySessionCursor = 0;
            this._relaySessionQueuedBytes = 0;

            try {
                if (ws.readyState === WebSocket.OPEN && this.peerId && manualClose !== false) {
                    ws.send(JSON.stringify({ type: 'disconnecting', peerId: this.peerId }));
                }
                if (ws.readyState === WebSocket.OPEN && this.shouldAdvertiseHost()) {
                    ws.send(JSON.stringify({ type: 'unhost' }));
                }
            } catch (e) {}

            try {
                if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
                    ws.close();
                }
            } catch (e) {}
        },

        _cancelReconnect: function () {
            if (!this._wsReconnectTimer) return;
            clearTimeout(this._wsReconnectTimer);
            this._wsReconnectTimer = null;
        },

        _scheduleReconnect: function () {
            if (!this.shouldLobbyBeActive() || this._wsReconnectTimer) return;
            // When game is running (active peers or hosting), reconnect aggressively
            // so relay stays available; avoid long outages during brief WebSocket drops
            const hasActiveSession = this.hasActivePeerConnections() || this._hasHostSocket;
            const delay = hasActiveSession ? Math.min(this._wsReconnectDelay, 500) : this._wsReconnectDelay;
            const maxDelay = hasActiveSession ? 3000 : 10000;
            this._wsReconnectTimer = setTimeout(() => {
                this._wsReconnectTimer = null;
                this._wsReconnectDelay = Math.min(this._wsReconnectDelay * 2, maxDelay);
                this.refreshTransportState();
            }, delay);
        },

        _cancelRelayFlush: function () {
            if (!this._relayFlushTimer) return;
            clearTimeout(this._relayFlushTimer);
            this._relayFlushTimer = null;
        },

        _scheduleRelayFlush: function () {
            if (this._relayFlushTimer || !this._relayHasBacklog()) return;
            this._relayFlushTimer = setTimeout(() => {
                this._relayFlushTimer = null;
                this._flushRelayQueue();
                if (this._relayHasBacklog()) {
                    this._scheduleRelayFlush();
                }
            }, 16);
        },

        _handleLobbyMessage: function (event) {
            try {
                // Binary frame from server (peer_packet / dedicated_packet in binary relay protocol)
                if (event.data instanceof ArrayBuffer) {
                    const buf = new Uint8Array(event.data);
                    if (buf.length < 6) return; // minimum: type(1)+peerIdLen(1)+peerIdMin(1)+ports(4)=7, but at least 6
                    const type = buf[0];
                    if (type === 0x03) {
                        const peerIdLen = buf[1];
                        if (buf.length < 2 + peerIdLen + 4) return;
                        let fromId = '';
                        for (let i = 0; i < peerIdLen; i++) fromId += String.fromCharCode(buf[2 + i]);
                        const view = new DataView(event.data, 2 + peerIdLen, 4);
                        const targetPort = view.getUint16(0, true);
                        const sourcePort = view.getUint16(2, true);
                        const payload = new Uint8Array(event.data, 2 + peerIdLen + 4);

                        this._cancelPendingPeerDisconnect(fromId);
                        const fakeIp = this.getFakeIp(fromId);
                        if (sourcePort) {
                            this.lastRemotePort[fakeIp] = sourcePort;
                        }
                        const relayEntry = this._ensureRelayPeerEntry(fakeIp, fromId, sourcePort);
                        this._setPeerSessionState(fromId, 'relay-open', 'lobby-peer-packet');
                        this._setRelayQuality(fromId, 'relay', 'lobby-peer-packet');
                        this._markRelaySessionEstablished(`peer:${fromId}`);
                        if (this.needsPeerVerification() && (!relayEntry || relayEntry.verified !== true)) {
                            this._requestPeerVerification(fromId);
                        }
                        this._receiveWithJoinGuard(fakeIp, targetPort, sourcePort, payload);
                        return;
                    }
                    if (type === 0x05) {
                        const serverIdLen = buf[1];
                        if (buf.length < 2 + serverIdLen + 4) return;
                        let serverId = '';
                        for (let i = 0; i < serverIdLen; i++) serverId += String.fromCharCode(buf[2 + i]);
                        const fakeIp = this.dedicatedServerIdToIp[serverId];
                        if (!fakeIp) return;
                        const view = new DataView(event.data, 2 + serverIdLen, 4);
                        const targetPort = view.getUint16(0, true);
                        const sourcePort = view.getUint16(2, true);
                        const payload = new Uint8Array(event.data, 2 + serverIdLen + 4);
                        this._markRelaySessionEstablished(`dedicated:${serverId}`);
                        this._receiveWithJoinGuard(fakeIp, targetPort || 19132, sourcePort || 19132, payload);
                        return;
                    }
                    return;
                }

                // JSON frame (control messages: peer_info, peer_disconnected, etc.)
                const msg = JSON.parse(event.data);
                if (msg.type === 'peer_packet') {
                    return;
                } else if (msg.type === 'relay_capabilities') {
                    this._relayCapabilities = {
                        protocolVersion: Number(msg.protocolVersion) || 1,
                        binaryDedicatedUpload: msg.binaryDedicatedUpload === true,
                        received: true
                    };
                } else if (msg.type === 'dedicated_servers') {
                    this._applyDedicatedServerList(Array.isArray(msg.servers) ? msg.servers : []);
                } else if (msg.type === 'dedicated_packet') {
                    if (!msg.serverId || !Array.isArray(msg.data)) return;
                    const fakeIp = this.dedicatedServerIdToIp[msg.serverId];
                    if (!fakeIp) return;
                    const payload = new Uint8Array(msg.data);
                    this._markRelaySessionEstablished(`dedicated:${msg.serverId}`);
                    this._receiveWithJoinGuard(fakeIp, msg.targetPort || 19132, msg.sourcePort || 19132, payload);
                } else if (msg.type === 'peer_info') {
                    if (!msg.peerId) return;
                    this._cancelPendingPeerDisconnect(msg.peerId);
                    const fakeIp = this.getFakeIp(msg.peerId);
                    if (msg.username !== undefined) {
                        this._setAuthoritativeInfo(
                            fakeIp,
                            msg.username || 'Steve69',
                            msg.verified === true ? (msg.mcpeUuid || "") : "");
                    } else {
                        this._clearAuthoritativeInfo(fakeIp);
                    }
                    this._setConnectionVerified(fakeIp, 'lobby-peer-info');
                } else if (msg.type === 'peer_disconnected') {
                    if (!msg.peerId) return;
                    const peerId = msg.peerId;
                    const fakeIp = this.peerToIp[peerId];
                    if (fakeIp) {
                        const entry = this.connections[fakeIp];
                        if (entry && entry.conn && entry.conn.open) {
                            console.log(`[Lobby] Peer ${peerId} left the lobby, but the direct session is still active.`);
                            return;
                        }
                        console.log(`[Lobby] Peer ${peerId} left the lobby; closing session immediately for ${fakeIp}.`);
                        this._cancelPendingPeerDisconnect(peerId);
                        this._dropConnection(fakeIp, true, true);
                        this.forgetPeer(peerId);
                        return;
                    }
                    this.forgetPeer(peerId);
                }
            } catch (e) {}
        },


        _setConnectionVerified: function (address, reason) {
            const entry = this.connections[address];
            if (!entry) return;
            if (entry.verified) return;
            entry.verified = true;
        },

        _processConnectionData: function (address, data) {
            const entry = this.connections[address];
            if (!entry) return;
            if (entry.peerId) {
                this._cancelPendingPeerDisconnect(entry.peerId);
            }

            const arr = data instanceof Uint8Array ? data : new Uint8Array(data);
            if (arr.length < 4) return;

            const view = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
            const targetP = view.getUint16(0, true);
            const sourceP = view.getUint16(2, true);
            const payload = new Uint8Array(arr.buffer, arr.byteOffset + 4, arr.byteLength - 4);

            entry.remotePort = sourceP;
            this.lastRemotePort[address] = sourceP;
            this.peerDisconnectState[address] = { peerId: entry.peerId || null, remotePort: sourceP };
            if (entry.peerId && this.needsPeerVerification() && entry.verified !== true) {
                this._requestPeerVerification(entry.peerId);
            }
            this._receiveWithJoinGuard(address, targetP, sourceP, payload);
        },

        _setupIncomingConnection: function (conn) {
            const fakeIp = this.getFakeIp(conn.peer);
            const existing = this.connections[fakeIp];
            const diag = this._ensurePeerDiagnostics(conn.peer);
            if (existing && existing.peerId === conn.peer && this._isConnectionUsable(existing)) {
                if (diag) diag.duplicateIncomingRejected += 1;
                try { conn.close(); } catch (e) { }
                return;
            }
            if (diag) diag.incomingAccepted += 1;
            this._cancelPendingPeerDisconnect(conn.peer);
            this._setPeerSessionState(conn.peer, 'incoming-connecting', 'incoming-connection');
            this._bindConnection(fakeIp, conn, conn.peer);
        },

        _bindConnection: function (address, conn, peerId) {
            const existing = this.connections[address];
            if (existing && existing.conn !== conn) {
                this._dropConnection(address, false);
            }

            this.connections[address] = {
                conn: conn,
                remotePort: 19132,
                peerId: peerId || null,
                verified: !this.needsPeerVerification()
            };
            this.peerDisconnectState[address] = { peerId: peerId || null, remotePort: 19132 };
            if (peerId) {
                this._cancelPendingPeerDisconnect(peerId);
            }
            if (this._hasHostSocket) this._applyRuntimeRelayConfig();

            if (this.needsPeerVerification()) {
                this._requestPeerVerification(peerId);
            }

            conn.on('open', () => {
                const entry = this.connections[address];
                if (!entry || entry.conn !== conn) return;
                if (entry.peerId) {
                    this._setPeerSessionState(entry.peerId, 'open', 'conn-open');
                    this._setRelayQuality(entry.peerId, 'direct', 'conn-open');
                }
            });

            conn.on('data', (data) => {
                const entry = this.connections[address];
                if (!entry || entry.conn !== conn) return;
                this._processConnectionData(address, data);
            });

            conn.on('close', () => {
                const entry = this.connections[address];
                if (!entry || entry.conn !== conn) return;
                this.peerDisconnectState[address] = { peerId: entry.peerId || peerId || null, remotePort: entry.remotePort || 19132 };
                if (entry.verificationTimer) {
                    clearTimeout(entry.verificationTimer);
                    entry.verificationTimer = null;
                }
                delete this.connections[address];
                delete this._joinSyncUntilByIp[address];
                if (this._joinWarmupTimerByIp[address]) {
                    clearTimeout(this._joinWarmupTimerByIp[address]);
                    delete this._joinWarmupTimerByIp[address];
                }
                delete this._joinWarmupQueueByIp[address];
                if (entry.peerId) {
                    delete this._recentDialByPeer[entry.peerId];
                    this._setPeerSessionState(entry.peerId, 'closed', 'conn-close');
                    this._setRelayQuality(entry.peerId, 'relay', 'conn-close');
                }
                console.warn(`[WebRTC] Connection closed for ${address}; falling back to relay until it reconnects.`);
                if (!this.shouldLobbyBeActive()) {
                    this.refreshTransportState();
                }
            });

            conn.on('error', (err) => {
                const entry = this.connections[address];
                if (!entry || entry.conn !== conn) return;
                this.peerDisconnectState[address] = { peerId: entry.peerId || peerId || null, remotePort: entry.remotePort || 19132 };
                if (entry.verificationTimer) {
                    clearTimeout(entry.verificationTimer);
                    entry.verificationTimer = null;
                }
                delete this.connections[address];
                delete this._joinSyncUntilByIp[address];
                if (this._joinWarmupTimerByIp[address]) {
                    clearTimeout(this._joinWarmupTimerByIp[address]);
                    delete this._joinWarmupTimerByIp[address];
                }
                delete this._joinWarmupQueueByIp[address];
                if (entry.peerId) {
                    delete this._recentDialByPeer[entry.peerId];
                    this._setPeerSessionState(entry.peerId, 'degraded', err && err.type ? err.type : 'conn-error');
                    this._setRelayQuality(entry.peerId, 'relay', err && err.type ? err.type : 'conn-error');
                }
                console.warn(`[WebRTC] Keeping session alive via relay fallback for ${address}.`);
                if (!this.shouldLobbyBeActive()) {
                    this.refreshTransportState();
                }
            });
        },

        _dropConnection: function (address, notifyNative, forgetState) {
            const entry = this.connections[address];
            const fallbackState = this.peerDisconnectState[address] || null;
            const lastPort = this.lastRemotePort[address];
            if (!entry && !fallbackState && !lastPort) return;
            const peerId = entry ? entry.peerId : (fallbackState ? fallbackState.peerId : null);
            if (peerId) {
                this._cancelPendingPeerDisconnect(peerId);
            }

            const port = lastPort || (entry ? (entry.remotePort || 19132) : (fallbackState.remotePort || 19132));
            delete this.connections[address];
            delete this._joinSyncUntilByIp[address];
            if (this._joinWarmupTimerByIp[address]) {
                clearTimeout(this._joinWarmupTimerByIp[address]);
                delete this._joinWarmupTimerByIp[address];
            }
            delete this._joinWarmupQueueByIp[address];
            this._clearAuthoritativeInfo(address);

            if (notifyNative !== false) {
                this.notifyConnectionClosed(address, port);
            }

            if (entry && entry.conn) {
                try {
                    entry.conn.close();
                } catch (e) {
                }
            }

            if (forgetState !== false) {
                delete this.peerDisconnectState[address];
            }
            if (this._hasHostSocket) this._applyRuntimeRelayConfig();
        },

        cleanupAllConnections: function (notifyNative) {
            if (notifyNative === false && !this._cleanupAuthorized) {
                return;
            }
            for (const ip of Object.keys(this.connections)) {
                this._dropConnection(ip, notifyNative);
            }
        },

        _cancelPendingPeerDisconnect: function (peerId) {
            if (!peerId || !this.pendingPeerDisconnects[peerId]) return;
            clearTimeout(this.pendingPeerDisconnects[peerId]);
            delete this.pendingPeerDisconnects[peerId];
        },

        _schedulePeerDisconnect: function (peerId, fakeIp, options) {
            if (!peerId || !fakeIp) return;
            const opts = options || {};
            this._cancelPendingPeerDisconnect(peerId);

            if (opts.immediateHide === true) {
                const fallbackState = this.peerDisconnectState[fakeIp] || null;
                const port = this.lastRemotePort[fakeIp] || (fallbackState ? (fallbackState.remotePort || 19132) : 19132);
                this._clearAuthoritativeInfo(fakeIp);
                this.notifyConnectionClosed(fakeIp, port);
            }

            const graceMs = (opts.graceMs != null && opts.graceMs >= 0) ? opts.graceMs : (this._peerDisconnectGraceMs | 0);
            this.pendingPeerDisconnects[peerId] = setTimeout(() => {
                delete this.pendingPeerDisconnects[peerId];
                const mappedIp = this.peerToIp[peerId];
                if (mappedIp !== fakeIp) {
                    return;
                }
                const entry = this.connections[fakeIp];
                if (!opts.forceDrop && entry && entry.conn && entry.conn.open) {
                    return;
                }
                this._dropConnection(fakeIp, false, true);
                this.forgetPeer(peerId);
            }, Math.max(750, graceMs));
        },

        _resetPeerMappings: function () {
            this._clearAllAuthoritativeInfo();
            for (const peerId of Object.keys(this.pendingPeerDisconnects)) {
                clearTimeout(this.pendingPeerDisconnects[peerId]);
            }
            this.pendingPeerDisconnects = {};
            this._recentDialByPeer = {};
            this._peerSessionState = {};
            this._peerDiagnostics = {};
            this._joinSyncUntilByIp = {};
            for (const ip of Object.keys(this._joinWarmupTimerByIp)) {
                clearTimeout(this._joinWarmupTimerByIp[ip]);
            }
            this._joinWarmupTimerByIp = {};
            this._joinWarmupQueueByIp = {};
            this._joinWarmupAppliedByIp = {};
            this.ipToPeer = {};
            this.peerToIp = {};
            this.peerDisconnectState = {};
            this.lastRemotePort = {};
            this._relayQualityByPeer = {};
            this._nextIpSuffix = 2;
            this._availableIpSuffixes = [];
        },

        getFakeIp: function (peerId) {
            if (this.peerToIp[peerId]) return this.peerToIp[peerId];

            const index = this._nextIpSuffix++;
            const addressSpace = 253 * 254 * 254;
            if (index >= addressSpace) {
                const fallbackIp = '10.254.254.254';
                this.ipToPeer[fallbackIp] = peerId;
                this.peerToIp[peerId] = fallbackIp;
                return fallbackIp;
            }
            const normalized = index - 2;
            const octet2 = 1 + Math.floor(normalized / (254 * 254));
            const remainder = normalized % (254 * 254);
            const octet3 = Math.floor(remainder / 254);
            const octet4 = 1 + (remainder % 254);
            const ip = `10.${octet2}.${octet3}.${octet4}`;

            this.ipToPeer[ip] = peerId;
            this.peerToIp[peerId] = ip;
            return ip;
        },

        _getDedicatedFakeIp: function (serverId, indexHint) {
            if (this.dedicatedServerIdToIp[serverId]) return this.dedicatedServerIdToIp[serverId];
            const base = typeof indexHint === 'number' ? indexHint : Object.keys(this.dedicatedServerIdToIp).length;
            const octet3 = Math.floor(base / 253);
            const octet4 = 1 + (base % 253);
            const ip = `11.0.${octet3}.${octet4}`;
            this.dedicatedServerIdToIp[serverId] = ip;
            this.dedicatedIpToServerId[ip] = serverId;
            return ip;
        },

        _applyDedicatedServerList: function (servers) {
            this.dedicatedServersById = {};
            this.dedicatedIpToServerId = {};
            this.dedicatedServerIdToIp = {};

            if (window.Module && typeof window.Module.ccall === 'function') {
                try {
                    window.Module.ccall('mcpe_clearDedicatedDiscoveredServers', 'void', [], []);
                } catch (e) {}
            }

            for (let i = 0; i < servers.length; i++) {
                const server = servers[i];
                if (!server || !server.serverId || !server.name) continue;
                const fakeIp = this._getDedicatedFakeIp(server.serverId, i);
                this.dedicatedServersById[server.serverId] = {
                    serverId: server.serverId,
                    name: server.name,
                    motd: server.motd || '',
                    fakeIp: fakeIp,
                    port: Number(server.port) || 19132,
                    currentPlayers: Number(server.currentPlayers) || 0,
                    maxPlayers: Number(server.maxPlayers) || 16
                };
                if (window.Module && typeof window.Module.ccall === 'function') {
                    try {
                        window.Module.ccall(
                            'mcpe_upsertDiscoveredServer',
                            'void',
                            ['string', 'string', 'string', 'string', 'number', 'number', 'number', 'number'],
                            [server.serverId, server.name, server.motd || '', fakeIp, Number(server.port) || 19132, Number(server.currentPlayers) || 0, Number(server.maxPlayers) || 16, 1]
                        );
                    } catch (e) {}
                }
            }
        },

        forgetPeer: function (peerId) {
            const fakeIp = this.peerToIp[peerId];
            if (!fakeIp) return null;

            delete this.peerToIp[peerId];
            if (this.ipToPeer[fakeIp] === peerId) {
                delete this.ipToPeer[fakeIp];
            }
            this._clearAuthoritativeInfo(fakeIp);
            delete this.peerDisconnectState[fakeIp];
            delete this._joinWarmupAppliedByIp[fakeIp];
            delete this._peerDiagnostics[peerId];
            delete this._peerSessionState[peerId];
            delete this._relayQualityByPeer[peerId];
            return fakeIp;
        },

        _sessionHasBacklog: function () {
            const ids = this._relaySessionOrder;
            for (let i = 0; i < ids.length; i++) {
                const session = this._relaySessions[ids[i]];
                if (session && session.items && session.items.length > 0) {
                    return true;
                }
            }
            return false;
        },

        _getTotalRelayQueuedBytes: function () {
            return this._relayQueueBytes + this._relaySessionQueuedBytes;
        },

        _getRelaySessionThresholds: function (mode) {
            if (mode === 'dedicated') {
                return {
                    softBytes: 768 * 1024,
                    hardBytes: 3 * 1024 * 1024,
                    softAgeMs: 1500,
                    hardAgeMs: 6000,
                    graceMs: 2500
                };
            }
            return {
                softBytes: 192 * 1024,
                hardBytes: 768 * 1024,
                softAgeMs: 400,
                hardAgeMs: 1500,
                graceMs: 750
            };
        },

        _getRelaySession: function (sessionId) {
            return sessionId ? (this._relaySessions[sessionId] || null) : null;
        },

        _ensureRelaySession: function (sessionId, mode) {
            if (!sessionId) return null;
            if (!this._relaySessions[sessionId]) {
                this._relaySessions[sessionId] = {
                    sessionId: sessionId,
                    mode: mode === 'dedicated' ? 'dedicated' : 'peer',
                    items: [],
                    bytes: 0,
                    overloadSince: 0,
                    overloadReason: '',
                    established: false,
                    binarySent: false,
                    fallbackUsed: false,
                    stats: {
                        queuedBytes: 0,
                        queuedPackets: 0,
                        avgQueueResidenceMs: 0,
                        maxQueueResidenceMs: 0,
                        maxQueuedBytes: 0,
                        maxQueuedPackets: 0,
                        enqueueRejected: 0,
                        socketSendErrors: 0
                    }
                };
                this._relaySessionOrder.push(sessionId);
            } else if (mode) {
                this._relaySessions[sessionId].mode = mode === 'dedicated' ? 'dedicated' : 'peer';
            }
            return this._relaySessions[sessionId];
        },

        _removeRelaySession: function (sessionId) {
            const session = this._relaySessions[sessionId];
            if (!session) return;
            this._relaySessionQueuedBytes = Math.max(0, this._relaySessionQueuedBytes - session.bytes);
            delete this._relaySessions[sessionId];
            this._relaySessionOrder = this._relaySessionOrder.filter((value) => value !== sessionId);
            if (this._relaySessionCursor >= this._relaySessionOrder.length) {
                this._relaySessionCursor = 0;
            }
        },

        _buildRelaySessionMeta: function (kind, id) {
            if (!id) return null;
            if (kind === 'dedicated') {
                return { activeSession: true, sessionId: `dedicated:${id}`, sessionMode: 'dedicated' };
            }
            return { activeSession: true, sessionId: `peer:${id}`, sessionMode: 'peer' };
        },

        _markRelaySessionEstablished: function (sessionId) {
            const session = this._getRelaySession(sessionId);
            if (session) {
                session.established = true;
            }
        },

        _describeRelaySessionOverload: function (session, now) {
            const thresholds = this._getRelaySessionThresholds(session.mode);
            const oldestAge = session.items.length > 0 ? Math.max(0, now - session.items[0].acceptedAt) : 0;
            const overAge = oldestAge > thresholds.hardAgeMs;
            const overBytes = session.bytes > thresholds.hardBytes;
            if (overAge && overBytes) return 'age+bytes';
            if (overAge) return 'age';
            if (overBytes) return 'bytes';
            return '';
        },

        _disconnectForRelaySessionOverload: function (session, reason) {
            if (!session) return;
            // Dedicated sessions should degrade gracefully under pressure instead
            // of tearing down the websocket for everyone sharing the page.
            if (session.mode === 'dedicated') {
                const droppedPackets = session.items.length;
                const droppedBytes = session.bytes;
                if (droppedBytes > 0) {
                    this._relaySessionQueuedBytes = Math.max(0, this._relaySessionQueuedBytes - droppedBytes);
                }
                session.items = [];
                session.bytes = 0;
                session.overloadSince = 0;
                session.overloadReason = '';
                this.stats.relayDropBackpressure += droppedPackets;
                this._showNetworkHealthWarning('Network congestion: dropping distant dedicated updates to keep session alive.');
                try {
                    console.warn(`[Lobby] Dedicated relay backlog dropped session=${session.sessionId} packets=${droppedPackets} bytes=${droppedBytes} reason=${reason || 'unknown'}`);
                } catch (e) {
                }
                return;
            }

            this.stats.relayOverflowDisconnects += 1;
            this._showNetworkHealthWarning('Network overload: closing multiplayer session to avoid world desync.');
            try {
                if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                    this.ws.close(1008, `Relay overload (${reason || 'unknown'})`);
                }
            } catch (e) {
            }
        },

        _evaluateRelaySessionPressure: function (session, now) {
            if (!session) return false;
            const thresholds = this._getRelaySessionThresholds(session.mode);
            const oldestAge = session.items.length > 0 ? Math.max(0, now - session.items[0].acceptedAt) : 0;
            this.stats.relaySessionQueuedBytes = Math.max(this.stats.relaySessionQueuedBytes, this._relaySessionQueuedBytes);
            this.stats.relaySessionQueuedPackets = Math.max(this.stats.relaySessionQueuedPackets, session.items.length);
            this.stats.relaySessionOldestAgeMs = Math.max(this.stats.relaySessionOldestAgeMs, oldestAge);
            const hardBreached = session.bytes > thresholds.hardBytes || oldestAge > thresholds.hardAgeMs;
            if (!hardBreached) {
                session.overloadSince = 0;
                session.overloadReason = '';
                return false;
            }
            if (!session.overloadSince) {
                session.overloadSince = now;
                session.overloadReason = this._describeRelaySessionOverload(session, now);
                return false;
            }
            if ((now - session.overloadSince) < thresholds.graceMs) {
                return false;
            }
            this._disconnectForRelaySessionOverload(session, session.overloadReason);
            return true;
        },

        _enqueueRelaySessionFrame: function (frame, meta) {
            const payload = frame instanceof Uint8Array ? frame : new Uint8Array(frame);
            const session = this._ensureRelaySession(meta.sessionId, meta.sessionMode);
            if (!session) {
                this.stats.relayEnqueueRejected += 1;
                return false;
            }
            const now = Date.now();
            session.items.push({
                payload: payload,
                acceptedAt: now
            });
            session.bytes += payload.byteLength;
            this._relaySessionQueuedBytes += payload.byteLength;
            session.stats.queuedBytes += payload.byteLength;
            session.stats.queuedPackets += 1;
            session.stats.maxQueuedBytes = Math.max(session.stats.maxQueuedBytes, session.bytes);
            session.stats.maxQueuedPackets = Math.max(session.stats.maxQueuedPackets, session.items.length);
            this.stats.relayQueuePeakBytes = Math.max(this.stats.relayQueuePeakBytes, this._getTotalRelayQueuedBytes());
            if (this._evaluateRelaySessionPressure(session, now)) {
                return false;
            }
            this._scheduleRelayFlush();
            return true;
        },

        _flushRelaySessions: function () {
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
            if (!this._sessionHasBacklog()) return;

            let order = this._relaySessionOrder.filter((sessionId) => !!this._relaySessions[sessionId]);
            this._relaySessionOrder = order;
            if (!order.length) {
                this._relaySessionCursor = 0;
                return;
            }

            let start = this._relaySessionCursor % order.length;
            let visited = 0;
            while (visited < order.length) {
                if (typeof this.ws.bufferedAmount === 'number' && this.ws.bufferedAmount > this._maxWsBufferedAmount) {
                    break;
                }

                order = this._relaySessionOrder;
                if (!order.length) {
                    this._relaySessionCursor = 0;
                    return;
                }
                if (start >= order.length) {
                    start = 0;
                }

                const sessionId = order[start];
                const session = this._relaySessions[sessionId];
                if (!session) {
                    this._relaySessionOrder.splice(start, 1);
                    continue;
                }

                const now = Date.now();
                if (this._evaluateRelaySessionPressure(session, now)) {
                    return;
                }

                const maxPacketsPerSlice = session.mode === 'dedicated' ? 32 : 16;
                const maxBytesPerSlice = session.mode === 'dedicated' ? (64 * 1024) : (32 * 1024);
                let sentPackets = 0;
                let sentBytes = 0;
                while (session.items.length > 0 && sentPackets < maxPacketsPerSlice && sentBytes < maxBytesPerSlice) {
                    if (typeof this.ws.bufferedAmount === 'number' && this.ws.bufferedAmount > this._maxWsBufferedAmount) {
                        break;
                    }
                    const item = session.items.shift();
                    this._relaySessionQueuedBytes = Math.max(0, this._relaySessionQueuedBytes - item.payload.byteLength);
                    session.bytes = Math.max(0, session.bytes - item.payload.byteLength);
                    const residenceMs = Math.max(0, Date.now() - item.acceptedAt);
                    session.stats.avgQueueResidenceMs = session.stats.avgQueueResidenceMs <= 0
                        ? residenceMs
                        : ((session.stats.avgQueueResidenceMs * 0.9) + (residenceMs * 0.1));
                    session.stats.maxQueueResidenceMs = Math.max(session.stats.maxQueueResidenceMs, residenceMs);
                    this.stats.relayQueueAgeMsP95 = Math.max(this.stats.relayQueueAgeMsP95 * 0.95, residenceMs);
                    try {
                        this.ws.send(item.payload.buffer.slice(item.payload.byteOffset, item.payload.byteOffset + item.payload.byteLength));
                        this.stats.relaySentDirect += 1;
                    } catch (err) {
                        session.items.unshift(item);
                        this._relaySessionQueuedBytes += item.payload.byteLength;
                        session.bytes += item.payload.byteLength;
                        session.stats.socketSendErrors += 1;
                        this.stats.relaySocketSendErrors += 1;
                        break;
                    }
                    sentPackets += 1;
                    sentBytes += item.payload.byteLength;
                }

                if (session.items.length === 0) {
                    this._removeRelaySession(sessionId);
                    order = this._relaySessionOrder;
                    if (!order.length) {
                        this._relaySessionCursor = 0;
                        return;
                    }
                    if (start >= order.length) {
                        start = 0;
                    }
                    continue;
                }

                start = (start + 1) % order.length;
                visited += 1;
            }

            this._relaySessionCursor = start;
        },

        notifyServerState: function (isHosting) {
            if (isHosting) {
                this._hostSocketCount += 1;
            } else {
                this._hostSocketCount = Math.max(0, this._hostSocketCount - 1);
            }
            this._hasHostSocket = this._hostSocketCount > 0;
            this._applyRuntimeRelayConfig();
            this._syncHostAdvertisement('socket-state');
            this.refreshTransportState();
        },

        _logRelayUnavailable: function (context) {
            const now = Date.now();
            if ((now - this._lastRelayUnavailableLog) < 30000) return;
            this._lastRelayUnavailableLog = now;
        },

        _relayHasBacklog: function () {
            return this._relayQueueHigh.length > 0 || this._relayQueueNormal.length > 0 || this._sessionHasBacklog();
        },

        _classifyRelayPriority: function (purpose, payload) {
            const text = String(purpose || '').toLowerCase();
            if (text.indexOf('critical') !== -1 || text.indexOf('control') !== -1) return 'high';
            if (text.indexOf('interaction') !== -1 || text.indexOf('combat') !== -1 || text.indexOf('inventory') !== -1) return 'high';
            if (payload && payload.byteLength <= 400) return 'high';
            if (text.indexOf('broadcast') !== -1 && payload && payload.byteLength <= 220) return 'high';
            return 'normal';
        },

        _shouldBypassRelayQueue: function (purpose, payload) {
            const text = String(purpose || '').toLowerCase();
            return payload && payload.byteLength <= 96 &&
                (text.indexOf('critical interaction') !== -1 ||
                 text.indexOf('control') !== -1);
        },

        _inferRelayPurpose: function (targetPort, sourcePort, payload, isBroadcast) {
            const size = payload ? payload.byteLength : 0;
            if (size <= 200) return 'critical interaction packet';
            if (targetPort === 19132 || sourcePort === 19132) {
                if (size <= 320) return 'interaction packet';
                if (size <= 900) return isBroadcast ? 'state broadcast packet' : 'state relay packet';
                return isBroadcast ? 'bulk broadcast packet' : 'bulk relay packet';
            }
            if (size <= 220) return 'control packet';
            return isBroadcast ? 'broadcast packet' : 'relay packet';
        },

        _updateAdaptiveRelayLimits: function () {
            const buffered = (this.ws && typeof this.ws.bufferedAmount === 'number') ? this.ws.bufferedAmount : 0;
            const queueRatio = this._maxRelayQueueBytes > 0 ? (this._getTotalRelayQueuedBytes() / this._maxRelayQueueBytes) : 0;
            const bufferedRatio = this._maxWsBufferedAmount > 0 ? (buffered / this._maxWsBufferedAmount) : 0;
            const pressure = Math.max(queueRatio, bufferedRatio);
            if (pressure > 0.95) this._relayPressureScore = Math.min(1, this._relayPressureScore + 0.08);
            else if (pressure > 0.8) this._relayPressureScore = Math.min(1, this._relayPressureScore + 0.04);
            else this._relayPressureScore = Math.max(0, this._relayPressureScore - 0.03);

            const scaleBytes = Math.max(0.55, 1 - (this._relayPressureScore * 0.45));
            const scaleAge = Math.max(0.35, 1 - (this._relayPressureScore * 0.65));
            this._adaptiveWsBufferedAmount = Math.max(96 * 1024, Math.floor(this._maxWsBufferedAmount * scaleBytes));
            this._adaptiveRelayQueueBytes = Math.max(128 * 1024, Math.floor(this._maxRelayQueueBytes * scaleBytes));
            this._adaptiveRelayQueueAgeMs = Math.max(350, Math.floor(this._maxRelayQueueAgeMs * scaleAge));
        },

        _canSendOnLobby: function (purpose) {
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return false;
            this._updateAdaptiveRelayLimits();
            if (typeof this.ws.bufferedAmount === 'number' && this.ws.bufferedAmount > this._adaptiveWsBufferedAmount) {
                this.stats.relayDropBackpressure += 1;
                const now = Date.now();
                if (!this._lastWsBackpressureLogAt || (now - this._lastWsBackpressureLogAt) > 10000) {
                    this._lastWsBackpressureLogAt = now;
                }
                return false;
            }
            return true;
        },

        _dropStaleFromQueue: function (queue, now) {
            while (queue.length > 0 && (now - queue[0].at) > this._adaptiveRelayQueueAgeMs) {
                const stale = queue.shift();
                this.stats.relayDropStale += 1;
                this._relayQueueBytes = Math.max(0, this._relayQueueBytes - stale.payload.byteLength);
                const buffered = (this.ws && typeof this.ws.bufferedAmount === 'number') ? this.ws.bufferedAmount : 0;
            }
        },

        _dequeueRelayFrame: function () {
            if (this._relayQueueHigh.length > 0) return this._relayQueueHigh.shift();
            if (this._relayQueueNormal.length > 0) return this._relayQueueNormal.shift();
            return null;
        },

        _enqueueRelayFrame: function (frame, purpose) {
            const payload = frame instanceof Uint8Array ? frame : new Uint8Array(frame);
            this._updateAdaptiveRelayLimits();
            if (payload.byteLength > this._adaptiveRelayQueueBytes) {
                this.stats.relayDropOversized += 1;
                return false;
            }

            const now = Date.now();
            this._dropStaleFromQueue(this._relayQueueHigh, now);
            this._dropStaleFromQueue(this._relayQueueNormal, now);

            const priority = this._classifyRelayPriority(purpose, payload);
            const highBudget = Math.max(128 * 1024, Math.floor(this._adaptiveRelayQueueBytes * 0.75));

            while ((this._relayQueueBytes + payload.byteLength) > this._adaptiveRelayQueueBytes && this._relayQueueNormal.length > 0) {
                const dropped = this._relayQueueNormal.shift();
                this.stats.relayDropFull += 1;
                this._relayQueueBytes = Math.max(0, this._relayQueueBytes - dropped.payload.byteLength);
            }

            if (priority === 'high') {
                let highBytes = 0;
                for (let i = 0; i < this._relayQueueHigh.length; i++) highBytes += this._relayQueueHigh[i].payload.byteLength;
                while ((highBytes + payload.byteLength) > highBudget && this._relayQueueHigh.length > 0) {
                    const dropped = this._relayQueueHigh.shift();
                    this.stats.relayDropFull += 1;
                    highBytes = Math.max(0, highBytes - dropped.payload.byteLength);
                    this._relayQueueBytes = Math.max(0, this._relayQueueBytes - dropped.payload.byteLength);
                }
            }

            if (priority !== 'high') {
                if ((this._relayQueueBytes + payload.byteLength) > this._adaptiveRelayQueueBytes) {
                    this.stats.relayDropFull += 1;
                    return false;
                }
            } else {
                while ((this._relayQueueBytes + payload.byteLength) > this._adaptiveRelayQueueBytes && this._relayQueueNormal.length > 0) {
                    const dropped = this._relayQueueNormal.shift();
                    this.stats.relayDropFull += 1;
                    this._relayQueueBytes = Math.max(0, this._relayQueueBytes - dropped.payload.byteLength);
                }
                if ((this._relayQueueBytes + payload.byteLength) > this._adaptiveRelayQueueBytes) {
                    this.stats.relayDropFull += 1;
                    return false;
                }
            }

            const item = { payload: payload, at: now, purpose: purpose || 'relay frame', priority: priority };
            if (priority === 'high') this._relayQueueHigh.push(item);
            else this._relayQueueNormal.push(item);
            this.stats.relaySentQueued += 1;
            this._relayQueueBytes += payload.byteLength;
            this.stats.relayQueuePeakBytes = Math.max(this.stats.relayQueuePeakBytes, this._relayQueueBytes);
            this._scheduleRelayFlush();
            return true;
        },

        _sendOrQueueRelayFrame: function (frame, purpose, meta) {
            const payload = frame instanceof Uint8Array ? frame : new Uint8Array(frame);
            const isSessionTraffic = meta && meta.activeSession === true && meta.sessionId;
            const buffered = (this.ws && typeof this.ws.bufferedAmount === 'number') ? this.ws.bufferedAmount : 0;
            if (!isSessionTraffic &&
                this._shouldBypassRelayQueue(purpose, payload) &&
                this.ws && this.ws.readyState === WebSocket.OPEN &&
                buffered <= this._maxWsBufferedAmount) {
                try {
                    this.ws.send(payload.buffer.slice(payload.byteOffset, payload.byteOffset + payload.byteLength));
                    this.stats.relaySentDirect += 1;
                    return true;
                } catch (err) {
                }
            }
            if (this._canSendOnLobby(purpose)) {
                try {
                    this.ws.send(payload.buffer.slice(payload.byteOffset, payload.byteOffset + payload.byteLength));
                    this.stats.relaySentDirect += 1;
                    return true;
                } catch (err) {
                }
            }
            if (isSessionTraffic) {
                const session = this._getRelaySession(meta.sessionId);
                if ((!session || session.items.length === 0) &&
                    this.ws && this.ws.readyState === WebSocket.OPEN &&
                    buffered <= this._maxWsBufferedAmount) {
                    try {
                        this.ws.send(payload.buffer.slice(payload.byteOffset, payload.byteOffset + payload.byteLength));
                        this.stats.relaySentDirect += 1;
                        if (session) {
                            session.binarySent = true;
                        }
                        return true;
                    } catch (err) {
                        if (session) {
                            session.stats.socketSendErrors += 1;
                        }
                        this.stats.relaySocketSendErrors += 1;
                    }
                }
                const queued = this._enqueueRelaySessionFrame(payload, meta);
                if (queued) {
                    const active = this._getRelaySession(meta.sessionId);
                    if (active) {
                        active.binarySent = true;
                    }
                } else {
                    this.stats.relayEnqueueRejected += 1;
                }
                return queued;
            }
            return this._enqueueRelayFrame(payload, purpose);
        },

        _flushRelayQueue: function () {
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
            if (!this._relayHasBacklog()) return;

            this._flushRelaySessions();

            const now = Date.now();
            this._dropStaleFromQueue(this._relayQueueHigh, now);
            this._dropStaleFromQueue(this._relayQueueNormal, now);

            while (this._relayHasBacklog()) {
                if (!this._canSendOnLobby('relay queue flush')) {
                    break;
                }
                const queued = this._dequeueRelayFrame();
                if (!queued) break;
                const queueAge = Math.max(0, now - queued.at);
                this.stats.relayQueueAgeMsP95 = Math.max(this.stats.relayQueueAgeMsP95 * 0.95, queueAge);
                const payload = queued.payload;
                this._relayQueueBytes = Math.max(0, this._relayQueueBytes - payload.byteLength);
                try {
                    this.ws.send(payload.buffer.slice(payload.byteOffset, payload.byteOffset + payload.byteLength));
                    this.stats.relaySentDirect += 1;
                } catch (err) {
                    if (queued.priority === 'high') this._relayQueueHigh.unshift(queued);
                    else this._relayQueueNormal.unshift(queued);
                    this._relayQueueBytes += payload.byteLength;
                    break;
                }
            }

            if (this._relayHasBacklog()) {
                this._scheduleRelayFlush();
            }
        },

        sendBatch: function (address, targetPort, sourcePort, batchBuffer) {
            this.stats.bridgeCalls++;
            this._initStatsTicker();

            // A batch is a series of [2B length][payload] entries
            const view = new DataView(batchBuffer.buffer, batchBuffer.byteOffset, batchBuffer.byteLength);
            let offset = 0;

            while (offset < batchBuffer.byteLength) {
                if (offset + 2 > batchBuffer.byteLength) break;
                const len = view.getUint16(offset, true);
                offset += 2;
                if (offset + len > batchBuffer.byteLength) break;
                const packetData = batchBuffer.subarray(offset, offset + len);
                offset += len;

                // Re-use sendPacket for each sub-packet in the batch
                // NOTE: this.stats.bridgeCalls is NOT incremented per sub-packet, 
                // but we DO decrement stats.bridgeCalls in sendPacket to avoid double counting 
                // if we wanted to be super precise. But here we just want the WASM->JS call count.
                this._sendPacketInternal(address, targetPort, sourcePort, packetData);
            }
        },

        // Refactored core send logic to avoid double-incrementing bridgeCalls during batch dispatch
        _sendPacketInternal: function (address, targetPort, sourcePort, data) {
            const rawData = (data instanceof Uint8Array) ? data : new Uint8Array(data);
            if (address === "255.255.255.255" || address === "0.0.0.0") {
                const purpose = this._inferRelayPurpose(targetPort, sourcePort, rawData, true);
                this.stats.ppsOut++;
                this.stats.bpsOut += rawData.length;
                if (this._tryDirectBroadcastFanout(targetPort, sourcePort, rawData, purpose)) {
                    return;
                }
                const frame = new Uint8Array(1 + 2 + 2 + rawData.length);
                frame[0] = this._hasHostSocket ? 0x04 : 0x02; // BIN_BROADCAST_LINKED or BIN_BROADCAST
                const hdr = new DataView(frame.buffer, 1, 4);
                hdr.setUint16(0, targetPort, true);
                hdr.setUint16(2, sourcePort, true);
                frame.set(rawData, 5);
                const meta = this._hasHostSocket ? { activeSession: true, sessionId: 'peer:broadcast-linked', sessionMode: 'peer' } : null;
                this._sendOrQueueRelayFrame(frame, purpose, meta);
                return;
            }

            const dedicatedServerId = this.dedicatedIpToServerId[address];
            if (dedicatedServerId) {
                this.stats.ppsOut++;
                this.stats.bpsOut += rawData.length;
                if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
                    this._logRelayUnavailable(`dedicated relay for ${dedicatedServerId}`);
                    return;
                }
                const sessionMeta = this._buildRelaySessionMeta('dedicated', dedicatedServerId);
                let dedicatedSession = this._getRelaySession(sessionMeta.sessionId);
                const canUseBinaryDedicated = this._relayCapabilities && this._relayCapabilities.received === true &&
                    this._relayCapabilities.binaryDedicatedUpload === true;
                if (canUseBinaryDedicated) {
                    const serverIdBytes = new TextEncoder().encode(dedicatedServerId);
                    const frame = new Uint8Array(1 + 1 + serverIdBytes.length + 2 + 2 + rawData.length);
                    let off = 0;
                    frame[off++] = 0x06;
                    frame[off++] = serverIdBytes.length;
                    frame.set(serverIdBytes, off); off += serverIdBytes.length;
                    const hdr = new DataView(frame.buffer, off, 4);
                    hdr.setUint16(0, targetPort, true);
                    hdr.setUint16(2, sourcePort, true);
                    off += 4;
                    frame.set(rawData, off);
                    this._sendOrQueueRelayFrame(frame, 'dedicated gameplay packet', sessionMeta);
                    dedicatedSession = this._getRelaySession(sessionMeta.sessionId);
                    if (dedicatedSession) {
                        dedicatedSession.binarySent = true;
                    }
                    return;
                }
                if (!dedicatedSession) {
                    dedicatedSession = this._ensureRelaySession(sessionMeta.sessionId, 'dedicated');
                }
                if (dedicatedSession && !dedicatedSession.fallbackUsed) {
                    dedicatedSession.fallbackUsed = true;
                    this.stats.relayFallbackUsed += 1;
                }
                try {
                    this.ws.send(JSON.stringify({
                        type: 'send_to_dedicated',
                        serverId: dedicatedServerId,
                        targetPort: targetPort,
                        sourcePort: sourcePort,
                        data: Array.from(rawData)
                    }));
                } catch (err) {
                    this.stats.relaySocketSendErrors += 1;
                }
                return;
            }

            const targetPeerId = this.ipToPeer[address];
            if (!targetPeerId) return;

            const purpose = this._inferRelayPurpose(targetPort, sourcePort, rawData, false);

            const entry = this.connections[address];
            const directPreferred =
                purpose.indexOf('interaction') !== -1 ||
                purpose.indexOf('critical') !== -1 ||
                purpose.indexOf('control') !== -1;
            if (!this._relayOnlyModeEnabled() &&
                entry && entry.conn && entry.conn.open && rawData.length <= 350 && directPreferred) {
                const dc = entry.conn.dataChannel;
                const congested = dc && typeof dc.bufferedAmount === 'number'
                    && dc.bufferedAmount > this._maxDataChannelBufferedAmount;
                if (!congested) {
                    try {
                        const payload = new Uint8Array(4 + rawData.length);
                        const view = new DataView(payload.buffer);
                        view.setUint16(0, targetPort, true);
                        view.setUint16(2, sourcePort, true);
                        payload.set(rawData, 4);
                        entry.conn.send(payload);
                        const diag = this._ensurePeerDiagnostics(entry.peerId);
                        if (diag) diag.directSends += 1;
                        this._setRelayQuality(entry.peerId, 'direct', 'datachannel-send');
                        this.stats.ppsOut++;
                        this.stats.bpsOut += rawData.length;
                        return;
                    } catch (err) {
                        const diag = this._ensurePeerDiagnostics(entry.peerId);
                        if (diag) diag.relayFallbacks += 1;
                    }
                } else {
                    const diag = this._ensurePeerDiagnostics(entry.peerId);
                    if (diag) diag.relayFallbacks += 1;
                }
            }

            this.stats.ppsOut++;
            this.stats.bpsOut += rawData.length;
            const peerIdBytes = new TextEncoder().encode(targetPeerId);
            const frame = new Uint8Array(1 + 1 + peerIdBytes.length + 2 + 2 + rawData.length);
            let off = 0;
            frame[off++] = 0x01; // BIN_SEND_TO_PEER
            frame[off++] = peerIdBytes.length;
            frame.set(peerIdBytes, off); off += peerIdBytes.length;
            const hdr = new DataView(frame.buffer, off, 4);
            hdr.setUint16(0, targetPort, true);
            hdr.setUint16(2, sourcePort, true);
            off += 4;
            frame.set(rawData, off);
            this._setRelayQuality(targetPeerId, 'relay', purpose);
            this._sendOrQueueRelayFrame(frame, purpose, this._buildRelaySessionMeta('peer', targetPeerId));
            if (!this._relayOnlyModeEnabled()) {
                this.establishConnection(address, targetPeerId);
            }
        },

        sendPacket: function (address, targetPort, sourcePort, data) {
            this.stats.bridgeCalls++;
            this._initStatsTicker();
            this._sendPacketInternal(address, targetPort, sourcePort, data);
        },


        _shouldInitiateConnection: function (targetPeerId) {
            if (!this.peerId || !targetPeerId) return true;
            return String(this.peerId) < String(targetPeerId);
        },

        establishConnection: function (address, targetPeerId) {
            if (this._relayOnlyModeEnabled()) return;
            if (this.connections[address]) return;
            if (!this.shouldLobbyBeActive()) return;
            if (!this.peer || this.peer.destroyed || this.peer.disconnected || !this.peerId) return;
            const session = this._peerSessionState[targetPeerId];
            if (session && (session.state === 'open' || session.state === 'incoming-connecting' || session.state === 'dialing')) {
                return;
            }
            if (!this._shouldInitiateConnection(targetPeerId)) {
                return;
            }
            const now = Date.now();
            const lastDial = this._recentDialByPeer[targetPeerId] || 0;
            const diag = this._ensurePeerDiagnostics(targetPeerId);
            if ((now - lastDial) < this._dialCooldownMs) {
                if (diag) diag.dialCooldownSkips += 1;
                return;
            }
            if (diag) diag.dialAttempts += 1;
            this._recentDialByPeer[targetPeerId] = now;
            this._setPeerSessionState(targetPeerId, 'dialing', 'establishConnection');
            const conn = this.peer.connect(targetPeerId, { reliable: false, serialization: 'binary' });
            this._bindConnection(address, conn, targetPeerId);
        },

        notifyConnectionClosed: function (address, port) {
            if (window.Module && typeof window.Module.ccall === 'function') {
                try {
                    window.Module.ccall('NotifyWebConnectionClosed', 'void', ['string', 'number'], [address, port]);
                } catch (e) {
                    console.error("Error in NotifyWebConnectionClosed:", e);
                }
            }
        },

        receivePacket: function (address, targetPort, sourcePort, data) {
            this.stats.ppsIn++;
            this.stats.bpsIn += data.length;
            if (window.Module && typeof window.Module.ccall === 'function' && typeof window.Module._malloc === 'function') {
                try {
                    const len = data.length;
                    if (len > 65535) { // Protect against massive allocation requests
                        return;
                    }
                    const ptr = Module._malloc(len);
                    if (!ptr) {
                        return;
                    }
                    Module.HEAPU8.set(data, ptr);

                    Module.ccall('onIncomingPacket', 'void',
                        ['string', 'number', 'number', 'number', 'number'],
                        [address, targetPort, sourcePort, ptr, len]);

                    Module._free(ptr);
                } catch (e) {
                    console.error("Error in onIncomingPacket:", e);
                }
            } else {
                console.warn("WASM Module not fully initialized! Packet dropped.");
            }
        },

        _destroyPeer: function () {
            const peer = this.peer;
            this.peer = null;
            this.peerId = null;
            this._peerInitPromise = null;

            if (peer && !peer.destroyed) {
                try {
                    peer.destroy();
                } catch (e) {
                }
            }
        }
    },

    // Keyboard + Mouse input manager
    // C++ is authoritative for mode selection. JS follows the selected mode.
    inputManager: {
        pointerLocked: false,
        canvas: null,
        _wasm: false,       // true once WASM module is ready
        _unlockRequested: false,
        _gameWantsPointerLock: false,
        _keyboardMouseMode: false,
        _pointerLockPending: false,
        _desiredLockState: false,
        _lastLockAttemptAt: 0,
        _lastTouchAt: 0,
        _suppressMouseUntil: 0,
        _pressedKeys: {},

        _focusCanvas: function () {
            if (!this.canvas) return;
            if (window.MCPEBridge && MCPEBridge.keyboard && MCPEBridge.keyboard.visible) return;
            try {
                if (typeof this.canvas.focus === 'function') {
                    this.canvas.focus({ preventScroll: true });
                }
            } catch (e) {
                try {
                    this.canvas.focus();
                } catch (ignored) { }
            }
        },


        _shouldSuppressSyntheticMouse: function (e) {
            const now = Date.now();
            if (now > this._suppressMouseUntil) return false;
            if (this.pointerLocked) return false;
            if (e && e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents === true) {
                return true;
            }
            if (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) {
                return true;
            }
            return false;
        },

        _markTouchInteraction: function () {
            const now = Date.now();
            this._lastTouchAt = now;
            this._suppressMouseUntil = now + 700;
        },

        _releasePressedKeys: function () {
            const pressedKeys = this._pressedKeys;
            this._pressedKeys = {};
            if (!this._wasm || !window.Module || !Module._onNativeKey) return;

            Object.keys(pressedKeys).forEach((key) => {
                if (pressedKeys[key] === true) {
                    Module._onNativeKey(Number(key), 0);
                }
            });
        },

        init: function (canvas) {
            this.canvas = canvas;
            this._wasm = true;
            if (this.canvas && this.canvas.tabIndex < 0) {
                this.canvas.tabIndex = 0;
            }
            this._focusCanvas();

            // Pointer lock change listener
            document.addEventListener('pointerlockchange', () => { this._onPointerLockChange(); });
            document.addEventListener('mozpointerlockchange', () => { this._onPointerLockChange(); });

            // Click canvas to re-lock pointer during kb/m gameplay.
            // On touch devices, browsers may synthesize mouse events after touch.
            // Suppress those synthetic mouse events to avoid duplicate actions (e.g. double place).
            canvas.addEventListener('touchstart', () => { this._markTouchInteraction(); }, { passive: true, capture: true });
            canvas.addEventListener('touchend', () => { this._markTouchInteraction(); }, { passive: true, capture: true });

            canvas.addEventListener('mousedown', (e) => {
                if (this._shouldSuppressSyntheticMouse(e)) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    return;
                }
                this._onCanvasMouseDown(e);
            }, true);

            canvas.addEventListener('mouseup', (e) => {
                if (this._shouldSuppressSyntheticMouse(e)) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    return;
                }
                this._onUserGesture();
            }, true);

            canvas.addEventListener('click', (e) => {
                if (this._shouldSuppressSyntheticMouse(e)) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    return;
                }
                this._onUserGesture();
            }, true);

            // Keyboard events – global so they always fire regardless of focus
            document.addEventListener('keydown', (e) => { this._onKeyDown(e); });
            document.addEventListener('keyup', (e) => { this._onKeyUp(e); });
            document.addEventListener('mouseup', () => { this._onUserGesture(); });
            window.addEventListener('blur', () => { this._releasePressedKeys(); });
            window.addEventListener('focus', () => {
                if (this._shouldKeepPointerLocked()) {
                    this._requestPointerLock(true);
                }
            });
        },

        // --- pointer lock ---

        _shouldKeepPointerLocked: function () {
            return this._keyboardMouseMode && this._gameWantsPointerLock;
        },

        _requestPointerLock: function (force) {
            if (!this.canvas || this.pointerLocked || this._pointerLockPending) return;
            const now = Date.now();
            if (!force && (now - this._lastLockAttemptAt) < 250) return;
            this._lastLockAttemptAt = now;
            try {
                const req = this.canvas.requestPointerLock && this.canvas.requestPointerLock();
                if (!req) {
                    this._pointerLockPending = true;
                    setTimeout(() => {
                        this._pointerLockPending = false;
                    }, 100);
                    return;
                }
                if (req && typeof req.then === 'function') {
                    this._pointerLockPending = true;
                    req.catch(() => {
                        // Browser may reject lock outside a gesture; ignore and retry later.
                    }).finally(() => {
                        this._pointerLockPending = false;
                    });
                }
            } catch (e) { }
        },

        _releasePointerLock: function () {
            if (!this.pointerLocked && !this._pointerLockPending) return;
            this._unlockRequested = true;
            try {
                const req = document.exitPointerLock && document.exitPointerLock();
                if (req && typeof req.catch === 'function') {
                    req.catch(() => { });
                }
            } catch (e) { }
        },

        _onPointerLockChange: function () {
            const wasLocked = this.pointerLocked;
            const unlockWasRequested = this._unlockRequested;
            this.pointerLocked = (document.pointerLockElement === this.canvas ||
                document.mozPointerLockElement === this.canvas);

            if (wasLocked && !this.pointerLocked) {
                this._releasePressedKeys();
                this._unlockRequested = false;

                // When KB/M gameplay loses pointer lock, let native decide whether that
                // should pause. This fixes Escape-on-web cases where the browser unlocks
                // first and the pause key event is swallowed or delayed.
                if (!unlockWasRequested && this._wasm && window.Module && Module._onNativePointerLockReleased) {
                    Module._onNativePointerLockReleased();
                }
            } else if (this.pointerLocked) {
                this._unlockRequested = false;
            }
        },

        _onUserGesture: function () {
            this._focusCanvas();
            if (this._shouldKeepPointerLocked()) {
                this._requestPointerLock(true);
            }
        },

        // --- input event handlers ---

        _onCanvasMouseDown: function (e) {
            this._focusCanvas();
            if (this._shouldKeepPointerLocked()) {
                this._requestPointerLock(true);
            }
        },

        // Called each frame from C++ to mirror Minecraft::mouseGrabbed.
        syncGamePointerLock: function (shouldLock, keyboardMouseMode) {
            const wasDesired = this._desiredLockState;
            this._keyboardMouseMode = !!keyboardMouseMode;
            this._gameWantsPointerLock = !!shouldLock;
            const shouldLockNow = this._shouldKeepPointerLocked();
            this._desiredLockState = shouldLockNow;
            if (!shouldLockNow) {
                this._releasePressedKeys();
                this._releasePointerLock();
                return;
            }
            this._focusCanvas();
            // Recenter native mouse position so click/pick logic starts from crosshair.
            if (!wasDesired && this._wasm && window.Module && Module._onNativeMouse && this.canvas) {
                const dpr = MCPEBridge.getEffectiveDevicePixelRatio();
                const rect = this.canvas.getBoundingClientRect();
                const cx = ((rect.width * 0.5) * dpr) | 0;
                const cy = ((rect.height * 0.5) * dpr) | 0;
                Module._onNativeMouse(0, 0, cx, cy);
            }
            // Keep requesting during gameplay transitions; successful locks still require browser-approved gestures.
            this._requestPointerLock(!wasDesired);
        },

        // Returns true when a key event should be handled as a game input.
        // Suppressed when the game's virtual keyboard input element has focus
        // (e.g. chat box or sign editing is open).
        _isGameFocused: function () {
            const keyboard = window.MCPEBridge && MCPEBridge.keyboard;
            const kbEl = keyboard && keyboard.element;
            if (keyboard && keyboard.visible) return false;
            if (kbEl && document.activeElement === kbEl) return false;
            return true;
        },

        // Map browser key/code → game key code (matches Keyboard.h constants)
        // Use e.code for Shift to distinguish left (sneak) vs right (utility menu)
        _getKeyCode: function (e) {
            const key = (typeof e === 'string') ? e : e.key;
            const code = (typeof e === 'object' && e.code) ? e.code : '';
            if (code === 'ShiftRight') return 254;   // KEY_RSHIFT (utility menu)
            if (key === 'Shift' || code === 'ShiftLeft') return 10;   // KEY_LSHIFT (sneak)
            if (key >= '0' && key <= '9') return key.charCodeAt(0);
            if (code === 'Numpad0') return 48;
            if (code === 'Numpad1') return 49;
            if (code === 'Numpad2') return 50;
            if (code === 'Numpad3') return 51;
            if (code === 'Numpad4') return 52;
            if (code === 'Numpad5') return 53;
            if (code === 'Numpad6') return 54;
            if (code === 'Numpad7') return 55;
            if (code === 'Numpad8') return 56;
            if (code === 'Numpad9') return 57;
            switch (key) {
                case 'w': case 'W': return 87;   // KEY_W  (forward)
                case 'a': case 'A': return 65;   // KEY_A  (left)
                case 's': case 'S': return 83;   // KEY_S  (back)
                case 'd': case 'D': return 68;   // KEY_D  (right)
                case ' ': return 32;   // KEY_SPACE (jump)
                case 'e': case 'E': return 69;   // KEY_E  (inventory / block selection)
                case 'q': case 'Q': return 81;   // KEY_Q  (drop)
                case 't': case 'T': return 84;   // KEY_T  (chat)
                case 'u': case 'U': return 85;   // KEY_U  (use: bow, place blocks, etc.)
                case 'Tab': return 9;   // KEY_TAB (server list / status)
                case 'Escape': return 27;   // KEY_ESCAPE (pause)
                default: return -1;
            }
        },

        _shouldLockPointerForKey: function (key) {
            return key === 'w' || key === 'W' ||
                key === 'a' || key === 'A' ||
                key === 's' || key === 'S' ||
                key === 'd' || key === 'D' ||
                key === ' ';
        },

        _onKeyDown: function (e) {
            if (!this._keyboardMouseMode) return;
            if (!this._isGameFocused()) return;

            const keyCode = this._getKeyCode(e);
            if (keyCode >= 0 && this._pressedKeys[keyCode]) {
                e.preventDefault();
                return;
            }
            if (keyCode === 27 && this.pointerLocked) {
                this._pressedKeys[keyCode] = 'escape-lock';
                this._unlockRequested = true;
                e.preventDefault();
                if (this._wasm && window.Module && Module._onNativeEscapeWhilePointerLocked) {
                    Module._onNativeEscapeWhilePointerLocked();
                    return;
                }
            }
            if (keyCode < 0) {
                const isPrintable = typeof e.key === 'string'
                    && e.key.length === 1
                    && !e.ctrlKey
                    && !e.metaKey
                    && !e.altKey;
                if (isPrintable && this._wasm && window.Module && Module._onNativeChar) {
                    Module._onNativeChar(e.key.charCodeAt(0));
                    e.preventDefault();
                }
                return;
            }

            if (this._shouldLockPointerForKey(e.key)) {
                this._requestPointerLock();
            }

            // Prevent browser defaults (scrolling on Space, back-nav on Backspace, etc.)
            e.preventDefault();

            if (this._wasm && window.Module && Module._onNativeKey) {
                this._pressedKeys[keyCode] = true;
                Module._onNativeKey(keyCode, 1);   // key down
            }
        },

        _onKeyUp: function (e) {
            if (!this._keyboardMouseMode) return;

            const keyCode = this._getKeyCode(e);
            if (keyCode < 0) return;
            const pressState = this._pressedKeys[keyCode];
            delete this._pressedKeys[keyCode];

            if (!pressState) {
                e.preventDefault();
                return;
            }

            e.preventDefault();

            if (pressState === 'escape-lock') {
                return;
            }

            if (this._wasm && window.Module && Module._onNativeKey) {
                Module._onNativeKey(keyCode, 0);   // key up
            }
        }
    },

    _generateUuid: function () {
        if (window.crypto && typeof window.crypto.randomUUID === 'function') {
            return window.crypto.randomUUID();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    _writeUuidCookie: function (uuid) {
        document.cookie = 'ninecraft_uuid=; path=/; max-age=0; SameSite=Lax';
        if (uuid) {
            document.cookie = 'mcpe_uuid=' + uuid + '; path=/; max-age=31536000; SameSite=Lax';
        } else {
            document.cookie = 'mcpe_uuid=; path=/; max-age=0; SameSite=Lax';
        }
    },

    getGuestUUID: function () {
        let uuid = localStorage.getItem('mcpe_guest_uuid');
        if (!uuid) {
            uuid = localStorage.getItem('mcpe_uuid') || localStorage.getItem('ninecraft_uuid');
        }
        if (!uuid) {
            uuid = this._generateUuid();
        }
        localStorage.setItem('mcpe_guest_uuid', uuid);
        localStorage.removeItem('mcpe_uuid');
        localStorage.removeItem('ninecraft_uuid');
        return uuid;
    },

    rotateGuestUUID: function () {
        const uuid = this._generateUuid();
        localStorage.setItem('mcpe_guest_uuid', uuid);
        if (!window.mcpe_uuid) {
            this._writeUuidCookie(uuid);
        }
        return uuid;
    },

    setAuthenticatedSession: function (username, uuid) {
        if (!uuid) {
            return this.clearAuthenticatedSession(username || '');
        }
        const guestUuid = this.getGuestUUID();
        if (guestUuid === uuid) {
            this.rotateGuestUUID();
        }
        window.mcpe_uuid = uuid;
        this._writeUuidCookie(uuid);
        if (window.Module && window.Module.ccall) {
            window.Module.ccall('mcpe_applyRuntimeAuthState', 'v', ['number', 'string', 'string'], [1, username || '', uuid]);
        }
        if (this.network) {
            this.network.refreshClientProfile();
            this.network.refreshPeerVerification('auth-session');
        }
        return uuid;
    },

    clearAuthenticatedSession: function (username) {
        window.mcpe_uuid = null;
        const guestUuid = this.getGuestUUID();
        this._writeUuidCookie(guestUuid);
        if (window.Module && window.Module.ccall) {
            window.Module.ccall('mcpe_applyRuntimeAuthState', 'v', ['number', 'string', 'string'], [0, username || '', guestUuid]);
        }
        if (this.network) {
            this.network.refreshClientProfile();
            this.network.refreshPeerVerification('guest-session');
        }
        return guestUuid;
    },

    // Client UUID (persistent across sessions)
    getClientUUID: function () {
        const uuid = window.mcpe_uuid || this.getGuestUUID();
        this._writeUuidCookie(uuid);
        return uuid;
    },

    fetchAbyssLeaderboard: function (limit, mcpeUuid, warningMessage) {
        const cache = this.abyssLeaderboard;
        const safeUuid = mcpeUuid || this.getClientUUID();
        const origin = (typeof window !== 'undefined' && window.location && window.location.origin)
            ? window.location.origin
            : '';
        cache.status = 'loading';
        cache.entries = [];
        cache.player = null;
        cache.error = '';
        cache.warning = warningMessage || '';
        cache.lastUuid = safeUuid;
        cache._requestId = (cache._requestId | 0) + 1;
        const requestId = cache._requestId;
        const params = new URLSearchParams();
        params.set('limit', String(limit || 10));
        if (safeUuid) {
            params.set('mcpeUuid', safeUuid);
        }
        const url = (origin ? origin : '') + '/auth/abyss-leaderboard?' + params.toString();

        return fetch(url, {
            method: 'GET',
            credentials: 'same-origin'
        }).then((res) => {
            return res.json().then((data) => ({ ok: res.ok, data: data || {} }));
        }).then(({ ok, data }) => {
            if (cache._requestId !== requestId) {
                return;
            }
            if (!ok || data.success !== true) {
                throw new Error((data && data.error) ? data.error : 'Leaderboard fetch failed');
            }

            cache.entries = Array.isArray(data.entries)
                ? data.entries.map((entry, index) => cache._normalizeEntry(entry, index + 1)).filter(Boolean)
                : [];
            cache.player = cache._normalizePlayer(data.player);
            cache.warning = warningMessage || '';
            cache.error = '';
            cache.status = 'ready';
        }).catch((err) => {
            if (cache._requestId !== requestId) {
                return;
            }
            cache.status = 'error';
            cache.error = (err && err.message) ? err.message : 'Leaderboard unavailable';
            if (!cache.warning) {
                cache.warning = '';
            }
        });
    },

    submitAbyssScore: function (score, username, mcpeUuid) {
        const cache = this.abyssLeaderboard;
        const safeScore = Math.max(0, Number(score || 0) | 0);
        const safeUsername = username || '';
        const safeUuid = mcpeUuid || this.getClientUUID();
        const origin = (typeof window !== 'undefined' && window.location && window.location.origin)
            ? window.location.origin
            : '';
        const postUrl = origin ? origin + '/auth/abyss-score' : '/auth/abyss-score';

        cache.lastScore = safeScore;
        cache.lastUsername = safeUsername;
        cache.lastUuid = safeUuid;

        return fetch(postUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
            body: JSON.stringify({ score: safeScore, username: safeUsername, mcpeUuid: safeUuid })
        }).then((res) => {
            return res.json().then((data) => ({ ok: res.ok, data: data || {} }));
        }).then(({ ok, data }) => {
            if (!ok || data.success !== true) {
                throw new Error((data && data.error) ? data.error : 'Score submit failed');
            }
            return this.fetchAbyssLeaderboard(10, safeUuid, '');
        }).catch((err) => {
            console.warn('[Abyss] Score submit failed:', err);
            return this.fetchAbyssLeaderboard(10, safeUuid, 'Score submit failed; leaderboard may be stale.');
        });
    },

    retryAbyssLeaderboard: function () {
        const cache = this.abyssLeaderboard;
        return this.fetchAbyssLeaderboard(10, cache.lastUuid || '', cache.warning || '');
    },

    // Fullscreen Toggle
    requestFullscreen: function () {
        const el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    },

    reconnectLobby: function () {
        if (!this.network) return;
        this.network.closeLobby(true);
        setTimeout(() => {
            this.network.refreshTransportState();
        }, 200);
    }
};

window.MCPEBridge = MCPEBridge;
