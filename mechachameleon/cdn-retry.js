// jsDelivr answers 403 for a file it has not cached yet when its own fetch from GitHub fails. On a 4 GB repo with
// 3,400 files that hits roughly one request in twenty, one file at a time, and the next attempt usually succeeds -
// or another jsDelivr mirror already has the file. Without this, one unlucky chunk ends a 1 MB block read and the
// game stalls. Loaded before rexcomp-split.js so the split-part fetches go through it too.
(() => {
  const RETRY_STATUS = [403, 429, 500, 502, 503, 504];
  const original = globalThis.fetch.bind(globalThis);
  const tried = new Set();

  // jsDelivr path -> the same file on the other mirrors (raw GitHub has no CORS problem and is the last resort)
  const mirrorsOf = url => {
    let u;
    try { u = new URL(url); } catch (e) { return []; }
    const m = /^\/gh\/([^/]+)\/([^@/]+)@([^/]+)\/(.+)$/.exec(u.pathname);
    if (!m || !/(^|\.)jsdelivr\.net$/.test(u.host)) return [];
    const [, user, repo, ref, rest] = m;
    const out = [
      `https://gcore.jsdelivr.net/gh/${user}/${repo}@${ref}/${rest}${u.search}`,
      `https://fastly.jsdelivr.net/gh/${user}/${repo}@${ref}/${rest}${u.search}`,
      `https://raw.githubusercontent.com/${user}/${repo}/${ref}/${rest}`,
    ];
    return out.filter(mirror => !tried.has(mirror));
  };

  const attempt = async (url, init) => {
    tried.add(url);
    try { return await original(url, init); } catch (e) { return { ok: false, status: 0, networkError: e }; }
  };

  globalThis.fetch = async function (input, init) {
    const url = input instanceof Request ? input.url : String(input);
    let res = await attempt(url, init);
    if (res.ok || !RETRY_STATUS.includes(res.status)) return res;

    // one plain retry first: the same URL usually succeeds the second time, and that keeps the same mirror
    res = await attempt(url, init);
    if (res.ok || !RETRY_STATUS.includes(res.status)) return res;

    for (const mirror of mirrorsOf(url)) {
      const alt = await attempt(mirror, init);
      if (alt.ok) return alt;
      if (!RETRY_STATUS.includes(alt.status)) break;
    }
    return res;
  };
})();
