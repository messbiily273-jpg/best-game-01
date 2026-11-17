// serve.ts — serve the game/ directory on http://127.0.0.1:8471 for
// play-testing and screenshots. No build step, no bundler, no network:
// every file comes from game/ on disk.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), 'game');
const types: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.json': 'application/json; charset=utf-8',
};

const server = createServer(async (req, res) => {
  try {
    const url = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname);
    const rel = url === '/' ? 'index.html' : url.replace(/^\/+/, '');
    const file = join(root, rel);
    if (!file.startsWith(root)) { res.writeHead(403); res.end('forbidden'); return; }
    const data = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404); res.end('not found');
  }
});
server.listen(8471, '127.0.0.1', () => {
  console.log('SIEGE PROTOCOL serving at http://127.0.0.1:8471/');
});
