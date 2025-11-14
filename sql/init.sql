-- Supabase initialization SQL for AI猎豹 v3.0 (minimal schema)
CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  uid text UNIQUE,
  email text,
  nickname text,
  created_at bigint DEFAULT extract(epoch from now())::bigint
);

CREATE TABLE IF NOT EXISTS invites (
  id serial PRIMARY KEY,
  invitee text UNIQUE,
  inviter text,
  created_at bigint DEFAULT extract(epoch from now())::bigint
);

CREATE TABLE IF NOT EXISTS ai_predictions (
  id serial PRIMARY KEY,
  symbol text,
  ts bigint,
  points jsonb,
  model_version text
);

CREATE TABLE IF NOT EXISTS app_config (
  key text PRIMARY KEY,
  value jsonb
);

CREATE TABLE IF NOT EXISTS posts (
  id serial PRIMARY KEY,
  user_uid text,
  content text,
  coin text,
  images text[],
  created_at bigint DEFAULT extract(epoch from now())::bigint
);

CREATE INDEX IF NOT EXISTS idx_ai_predictions_symbol_ts ON ai_predictions(symbol, ts DESC);
