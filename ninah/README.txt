No, I'm not a Human - Rexcomp port, web build
===============================================

The whole game as static files: index.html, the runtime (rexcomp.wasm), the guest image (image.bin) and the
game data as 1 MB chunks under game/ (manifest.json lists them). No Range requests, no special headers and no
server logic needed - any static host or CDN can serve this folder.

Play locally: double-click start.bat (or serve.cmd, or: python serve.py 8000 in this folder), then open
http://127.0.0.1:8000/ in Chrome or Edge 137+. It needs about 4 GB of RAM in the tab.

Do not open index.html by double-clicking it: file:// cannot load the game.

The server has to answer .wasm with application/wasm and .mjs with text/javascript - serve.py does, and any
static host does.

Every file in manifest.json is present here in full, including the .dll/.exe chunks the packer skips - the
runtime lifts those binaries into the wasm, but they are kept so nothing can go missing during a match.

The game data is fetched lazily, 1 MB at a time: a boot to the house pulls a fraction of it, not the whole
1.3 GB container, so a static host with brotli (Cloudflare, nginx, R2) is enough - rexcomp.wasm is 565 MB raw
and about 106 MB compressed, image.bin is 120 MB raw and about 56 MB compressed.

Downloading
-----------
The page fetches everything before the game starts and shows it: the runtime (565 MB), the guest image
(120 MB) and the 1.3 GB of game data (1512 chunks) - 2.1 GB in total. The progress card on the page shows
the percentage, the megabytes, the speed and the time left; the overlay goes away on the first frame.

The runtime reads the game's files on demand, one chunk at a time, so without this a scene that opens a file
nobody has read yet waits for the network. The page asks for the same URLs the runtime asks for and keeps them
in Cache Storage (not in the browser's HTTP cache - that is not a dependable place for 1.3 GB), and the runtime's
own reads are answered out of it. So every chunk is downloaded exactly once, and a second visit starts without
downloading anything again.

  ?prefetch=0      do not prefetch: the runtime fetches on demand again (a slow first boot, no stall after)
  ?concurrency=N   how many requests run at once (default 24 - jsDelivr answers in about 400 ms, so the
                   download is latency-bound and many requests at once is what makes it fast)
  ?skip=artbook    leave the 195 MB artbook PDF out - the game never reads it
  ?cdn=<url>       where the parts, the runtime and the game data come from
  ?base=<url>      only the game data from somewhere else

Controls
--------
Choose New Game to load the house without watching the opening VHS. The browser starts loading as soon as the
page opens. Click inside the game to capture the mouse and enable audio. F10 toggles capture. WASD moves.

Saves
-----
Saves and settings live in the browser profile (IndexedDB), per address and port. Moving to a different port
starts with empty storage.

port by crax / https://aetheris.win / https://crax.lol/

---
Serving this copy from a git host: GitHub refuses any file over 100 MB and jsDelivr any file over 20 MB, so
rexcomp.wasm (565 MB) and image.bin (120 MB) are stored here as rexcomp.wasm.part01..part48 and
image.bin.part01..part10 (12 MiB each), and the loader inlined in index.html streams the parts back as one
response before rexcomp.js asks for either file. Keep the parts next to that script; the rest of the folder is
unchanged from the pack.

The page itself is a single file: index.html sets a base href to jsDelivr, so the runtime, the graphics worker
and the 1.3 GB of game data are all fetched from
https://cdn.jsdelivr.net/gh/mynamescrax/gamesforaetheris@main/ninah/ - ?cdn=<url> points it somewhere else
and ?base=<url> only moves the game data. The graphics worker has to be same-origin with the page, so gfx-boot.js
rebuilds it from a blob: URL when the page is served from a CDN.
