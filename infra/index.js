/**
 * Minimal Cloudflare Worker + Durable Object skeleton
 */
export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (req.method === 'POST' && url.pathname === '/publish') {
      const channel = url.searchParams.get('channel') || 'global';
      const id = env.CHANNEL.idFromName(channel);
      const obj = env.CHANNEL.get(id);
      return await obj.fetch(req.url, req);
    }
    if (req.headers.get('Upgrade') === 'websocket') {
      const channel = url.searchParams.get('channel') || 'global';
      const id = env.CHANNEL.idFromName(channel);
      const obj = env.CHANNEL.get(id);
      return await obj.fetch(req.url, req);
    }
    return new Response('AI Heetah Worker', { status: 200 });
  }
}
