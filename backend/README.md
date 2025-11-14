Backend (Node.js Express)
------------------------
Files:
- index.js   : lightweight Express server (health, save prediction, publish endpoint)
- publish.js : example origin publisher to Cloudflare Worker publish endpoint
- package.json : dependencies & start script

Quick start (Windows):
1. cd backend
2. npm install
3. set SUPABASE_URL=https://your.supabase.co
   set SUPABASE_KEY=your_anon_key
   set WORKER_PUBLISH_URL=https://your-worker.workers.dev/publish?channel=global
4. npm start
