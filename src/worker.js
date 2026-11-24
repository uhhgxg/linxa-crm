// Linxa Agent CRM demo site worker
// Rewrites clean URLs to static HTML files, then serves everything else
// directly from the ASSETS binding (public/ directory).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/mobile') {
      return env.ASSETS.fetch(new URL('/mobile.html', url.origin));
    }
    if (url.pathname === '/about') {
      return env.ASSETS.fetch(new URL('/about.html', url.origin));
    }
    return env.ASSETS.fetch(request);
  }
};
