// GitHub rejects any file over 100 MB, so the 475 MB runtime wasm and the 183 MB guest image ship as
// rexcomp.wasm.partNN / image.bin.partNN (12 MiB each). This stitches them back into one streamed response before
// rexcomp.js asks for either file, so the runtime never knows they were split.
//
// The parts are read from CDN_BASE: the bulk of the game (3.8 GB of parts and chunks) can live on a CDN while the
// page and the ~2 MB of runtime scripts stay on the page's own origin, which is what the graphics worker needs
// (a classic worker script cannot be cross-origin). ?cdn=<url> points the parts somewhere else for testing, and
// ?cdn= (present but empty) takes them from next to the page.
(() => {
  const SPLIT = {
    'rexcomp.wasm': { type: 'application/wasm', pad: 2 },
    'image.bin': { type: 'application/octet-stream', pad: 2 },
  };
  const CDN_BASE = 'https://cdn.jsdelivr.net/gh/mynamescrax/gamesforaetheris@main/mechachameleon/';
  const MAX_PARTS = 512;
  if (typeof ReadableStream !== 'function' || typeof Response !== 'function') return;

  const query = new URLSearchParams(location.search);
  const cdn = query.has('cdn') ? query.get('cdn') : CDN_BASE;
  // absolute and slash-terminated, so name.partNN resolves next to the folder rather than beside its last segment
  globalThis.RXC_CDN = cdn ? new URL(cdn.endsWith('/') ? cdn : cdn + '/', location.href).href : '';

  const original = globalThis.fetch.bind(globalThis);

  const target = input => {
    let url;
    try { url = new URL(input instanceof Request ? input.url : String(input), document.baseURI); } catch (e) { return null; }
    const name = Object.keys(SPLIT).find(n => url.pathname.endsWith('/' + n));
    return name ? { name, url, cfg: SPLIT[name] } : null;
  };

  globalThis.fetch = function (input, init) {
    const hit = target(input);
    if (!hit) return original(input, init);
    const { name, url, cfg } = hit;
    const local = url.origin + url.pathname.slice(0, -name.length);

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for (let i = 1; i <= MAX_PARTS; i += 1) {
            const file = name + '.part' + String(i).padStart(cfg.pad, '0');
            const part = globalThis.RXC_CDN ? globalThis.RXC_CDN + file : local + file;
            const res = await original(part, init);
            if (!res.ok) {
              if (i === 1) throw new Error('missing ' + file + ' (HTTP ' + res.status + ')');
              break;
            }
            if (!res.body) { controller.enqueue(new Uint8Array(await res.arrayBuffer())); continue; }
            const reader = res.body.getReader();
            for (;;) {
              const { done, value } = await reader.read();
              if (done) break;
              controller.enqueue(value);
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return Promise.resolve(new Response(stream, {
      status: 200,
      statusText: 'OK',
      headers: { 'content-type': cfg.type },
    }));
  };
})();
