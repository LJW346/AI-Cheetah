export class Channel {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this.sockets = new Map();
    this.nextId = 1;
  }
  async fetch(req) {
    if (req.method === 'POST') {
      const buf = await req.arrayBuffer();
      for (const [id, ws] of this.sockets) {
        try { ws.send(buf); } catch(e) {}
      }
      return new Response('ok');
    }
    if (req.headers.get('Upgrade') === 'websocket') {
      const pair = new WebSocketPair();
      const [client, server] = [pair[0], pair[1]];
      server.accept();
      const id = String(this.nextId++);
      this.sockets.set(id, server);
      server.addEventListener('message', ev => {});
      server.addEventListener('close', () => this.sockets.delete(id));
      server.addEventListener('error', () => this.sockets.delete(id));
      try { server.send(JSON.stringify({ t: 'welcome', ts: Date.now() })); } catch(e) {}
      return new Response(null, { status: 101, webSocket: client });
    }
    return new Response('Channel DO');
  }
}
