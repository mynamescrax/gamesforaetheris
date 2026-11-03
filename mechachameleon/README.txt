Meccha Chameleon (Rexcomp port, web build)

The whole game as static files: index.html, the runtime (rexcomp.wasm), the guest image (image.bin) and the
game data as 1 MB chunks under game/ (manifest.json lists them). No Range requests, no special headers and no
server logic needed - any static host or CDN can serve this folder.

Play locally: double-click serve.cmd (or: python -m http.server 8140 in this folder), then open
http://127.0.0.1:8140/ in Chrome or Edge 137+. It needs about 4 GB of RAM in the tab.

Every file in manifest.json is present here in full (4.0 GB), including the .dll/.exe chunks the packer skips -
the runtime lifts those binaries into the wasm and only reads onnxruntime.dll, but they are kept so nothing can
go missing during a match.

The game data is fetched lazily, 1 MB at a time: a boot to the title pulls about 140 MB of it, not the 3.1 GB
container, so a static host with brotli (Cloudflare, nginx, R2) is enough - rexcomp.wasm is 475 MB raw and
about 106 MB compressed, image.bin is 183 MB raw and 56 MB compressed.

Multiplayer goes through wss://aetheris.win/eos-relay, which is compiled into the page.

port by crax / https://aetheris.win / https://crax.lol/

---
Rebuilding: `python x64/build.py pack mc --game-dir <game>` writes the chunks and manifest.json, but it skips
.dll/.exe/.rne files (the runtime lifts those into the wasm) while the manifest still lists them, so a fresh pack
leaves ~284 chunks missing and the game hangs at "Starting game...". Fill those chunks from the game tree (split
each file into 1 MB pieces named <path>.<n> under game/) after packing, as this folder has them.

Serving this copy from a git host: GitHub refuses any file over 100 MB, so rexcomp.wasm (475 MB) and
image.bin (183 MB) are stored here as rexcomp.wasm.part01..part40 and image.bin.part01..part16 (12 MiB each),
and rexcomp-split.js streams the parts back as one response before rexcomp.js asks for either file. Keep the
parts next to that script; the rest of the folder is unchanged from the pack.
