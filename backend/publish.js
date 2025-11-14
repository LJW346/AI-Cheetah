// publish.js - example origin publisher (Node.js)
const fetch = require('node-fetch');
async function publish(payload) {
  const url = process.env.WORKER_PUBLISH_URL || 'https://your-worker.workers.dev/publish?channel=global';
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/octet-stream' },
    body: JSON.stringify(payload)
  });
  console.log('status', res.status);
  console.log(await res.text());
}

(async ()=> {
  await publish({ symbol: 'BTC/USDT', ts: Date.now(), price: 60000, note: 'demo prediction' });
})();
