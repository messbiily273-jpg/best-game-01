// main.ts — build the best-game-01 dossier from this directory.
// Usage: node main.ts  (writes out/dossier.json)
// The game under game/ is plain static files: index.html + src/*.js +
// vendor/three/three.module.min.js. No build step, no network at runtime.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const dir = dirname(fileURLToPath(import.meta.url));
const out = join(dir, 'out');

const dossier = buildDossier(dir, {
  text_max_bytes: 163840,
  screenshots: { max: 8, max_bytes: 262144 },
  game_max_files: 993,
  game_max_bytes: 50331648,
  game_path_max_bytes: 1000,
});

await mkdir(out, { recursive: true });
await writeFile(join(out, 'dossier.json'), dossier);
console.log(`wrote out/dossier.json (${dossier.length} bytes)`);
