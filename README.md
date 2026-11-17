# SIEGE PROTOCOL — 5v5 Tactical FPS

A complete, original 5v5 tactical first-person shooter that runs entirely
offline from static files. Built for the make.fun best-game-01 bounty.

## The game

You are Vanguard, attacking a dusk foundry yard (Foundry Yard, 64 x 46 m)
with four AI teammates against five Sentinel defenders. Plant the spike at
Crane Bay (A) or Furnace Hall (B) and defend it until it detonates, or
eliminate all five Sentinels. First team to 5 rounds wins the match
(best of 9).

- **Full round loop:** buy phase (weapons, grenades, armor) → freeze →
  live round → round end with score and top fragger → next round → match
  end with victory/defeat and restart.
- **Arsenal:** P9 sidearm, VK-9 SMG, AR-77 rifle, LM-88 scoped sniper,
  plus HE, smoke and flash grenades. Each weapon has its own damage,
  spread, recoil, fire rate and reload.
- **Economy:** round wins, kills and plants pay credits; losing rounds pay
  less. Spend it between rounds or save for the sniper.
- **AI teammates and enemies:** 9 bots with waypoint pathfinding, reaction
  times, burst fire, accuracy that scales with range, bomb planting and
  defusing, and they hear your shots and turn toward you.
- **Feel:** hitscan tracers, hitmarkers, killfeed, live minimap, damage
  direction indicator, damage vignette, flash blindness, smoke cover,
  scope zoom, recoil, spread bloom, and fully procedural WebAudio sound
  (no audio files). M mutes.
- **Modes:** the menu, the buy shop, the live round, the round-end and
  match-end screens. Death spectates a living teammate.

## Controls

WASD move · mouse aim · click fire · R reload · Q / 1-4 switch weapon ·
5-7 select grenade · E plant (hold, inside a site) · B buy menu ·
Shift sprint · Ctrl crouch · Space jump · right-click scope (sniper) ·
M mute.

## Play it

Serve `game/` with any static server and open `index.html` in desktop
Chrome. No build step, no network: three.js is vendored under
`game/vendor/three/`, all textures are drawn on canvas at boot, all
sounds are synthesized. `node serve.ts` serves it at
http://127.0.0.1:8471/.

## Test it

Open `game/index.html?selftest=1` in a browser. The harness runs 15
scripted checks on the live systems (buy phase, buying, movement,
firing, damage, kill reward, reload, grenades, planting, defusing,
round flow) and prints `SELFTEST ALL PASS` or the failures.

## Shots

`?shot=1` firefight · `?shot=2` title menu · `?shot=3` buy shop ·
`?shot=4` victory screen. The four screenshots in `screenshots/` were
taken from these frozen states.

## Structure

- `game/src/state.js` — the single game state plus every config table
- `game/src/world.js` — Foundry Yard: walls, line-of-sight, waypoint graph
- `game/src/palette.js` — the dusk-industrial look, canvas textures only
- `game/src/player.js` — first-person movement (accel, friction, jump)
- `game/src/input.js` — keyboard, mouse, pointer lock, scripted override
- `game/src/weapons.js` — view models, spread, recoil, reload, switching
- `game/src/ballistics.js` — hitscan shots, armor, headshots, grenades
- `game/src/bots.js` — the 9 AI fighters: pathfinding, combat, bomb logic
- `game/src/economy.js` — buying and round rewards
- `game/src/hud.js` — every DOM overlay: HUD, minimap, shop, end screens
- `game/src/audio.js` — procedural WebAudio, no audio files
- `game/src/main.js` — boot, the 60 Hz simulation, round flow, self-test

## License

MIT. See LICENSE.
