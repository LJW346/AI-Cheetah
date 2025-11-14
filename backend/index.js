// Simple Express backend for AI猎豹 v3.0 (demo scaffold)
const express = require('express');
const fetch = require('node-fetch');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://your-project.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'your-anon-key';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

app.get('/health', (req, res) => res.json({ ok: true, ts: Date.now() }));

app.post('/api/predictions', async (req, res) => {
  const { symbol, points, model_version } = req.body;
  const ts = Math.floor(Date.now()/1000);
  const { data, error } = await supabase
    .from('ai_predictions')
    .insert([{ symbol, points, model_version, ts }]);
  if (error) return res.status(500).json({ error });
  return res.json({ data });
});

app.post('/api/publish', async (req, res) => {
  const workerUrl = process.env.WORKER_PUBLISH_URL || 'https://your-worker.workers.dev/publish?channel=global';
  try {
    const body = JSON.stringify(req.body);
    const r = await fetch(workerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/octet-stream' },
      body
    });
    const text = await r.text();
    return res.json({ ok: true, text });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('AI-HEETAH backend running on', PORT));
