# Phoenix Music

A catalog of music by PhoenixQDC. Albums open into a track list, each track plays through SoundCloud, and the page reacts to what is playing.

## Stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- GSAP for the desktop album-cover scroll animation

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## What to look at

The home page lists the albums. An album page has the cover, a written introduction, and the tracks grouped by era. Opening a track shows the player and the liner notes.

On a phone the track panel is a sheet that slides up from the bottom. From 640px up it is a sticky column beside the track list.

## Decisions

**One dedication map drives two visuals.** Each track stores a name such as `phoenix` or `chell`. `src/app/dedications.ts` maps that name to a gradient. The track logo is masked with that gradient, and the glow at the bottom of the screen uses the same entry while the track is playing. Adding a person means adding one key, not styling two components.

**The player is the source of “now playing.”** The SoundCloud widget reports play, pause, and finish. A small store in `components/nowplaying.ts` keeps the active track, and the glow reads that store. The panel does not have to pass playback state through the page.

**The cover animation is desktop-only.** On a wide screen the cover docks to the corner and the introduction fades as you scroll. On a phone that fixed cover covers the tracks, so the scroll animation is registered only at 640px and up.
