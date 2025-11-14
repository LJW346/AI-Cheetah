AI猎豹 v3.0 (智能生态版) - 开发包 (简化示例)
====================================

本包为演示用的最小可运行代码骨架，包含前端 (Flutter demo)、后端 (Node.js Express)、
Cloudflare Worker skeleton、以及 Supabase 初始化 SQL。

目录结构：
- backend/               Node.js 后端示例：index.js, publish.js, package.json
- frontend_flutter/      Flutter 最小 APP 示例 (lib/main.dart, pubspec.yaml)
- infra/                 Cloudflare Worker skeleton (index.js, channel_do.js, wrangler.toml)
- sql/                   Supabase 初始化 SQL (init.sql)
- README.md              本说明

注意：此为演示级骨架，并非生产就绪系统。
请按 backend/ README 中步骤配置 Supabase URL / Key, Cloudflare Worker domain 等后再运行。

下载项目 ZIP： sandbox:/mnt/data/ai-heetah-v3.zip
