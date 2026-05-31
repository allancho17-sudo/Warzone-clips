# Warzone Highlights 🎯

A clean, fast, single-page website for showcasing your best **Call of Duty: Warzone** clips — clutch wins, insane snipes, high-kill games, and funny moments.

No build tools, no frameworks, no dependencies. Just open it in a browser.

![Warzone Highlights](https://img.shields.io/badge/COD-Warzone-f5a623?style=flat-square) ![No Build Step](https://img.shields.io/badge/build-none-36d1a8?style=flat-square)

## Features

- 🎬 **Video modal player** — plays YouTube embeds or direct MP4 files
- 🏷️ **Category filters** — Snipes, Clutch, High Kill, Funny, Movement (auto-generated from your clips)
- 🔎 **Live search** — by title, player, or weapon
- 📊 **Animated stats** — total clips, kills, and wins
- 📱 **Fully responsive** — looks great on phone, tablet, and desktop
- ⚡ **Zero dependencies** — pure HTML / CSS / vanilla JS

## Quick start

Open `index.html` directly in your browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Adding your own clips

Edit **`clips.js`** — each clip is one object in the `window.CLIPS` array:

```js
{
  title: "1v4 Last Circle Clutch",
  player: "YourGamertag",
  category: "Clutch",        // Snipes | Clutch | High Kill | Funny | Movement
  weapon: "MCW",
  duration: "1:08",
  kills: 4,
  win: true,
  desc: "Short description shown in the player.",

  // Source — pick ONE:
  type: "youtube", src: "dQw4w9WgXcQ"            // YouTube video ID
  // type: "mp4",  src: "https://site.com/clip.mp4"  // direct video file
}
```

- **YouTube clips** auto-generate a thumbnail. To use a custom one, add `thumb: "https://…"`.
- **MP4 clips** should set a `thumb` so the card has a preview image.
- New categories appear as filter chips automatically.
- `kills` and `win` feed the stat counters in the hero section.

## Install as an app (PWA)

The site is a Progressive Web App, so you can install it to your phone or
desktop and launch it fullscreen like a native app — it even loads offline.

- **iPhone/iPad (Safari):** Share → *Add to Home Screen*
- **Android (Chrome):** menu (⋮) → *Install app* / *Add to Home Screen*
- **Desktop (Chrome/Edge):** install icon in the address bar

PWA files: `manifest.webmanifest` (app metadata + icons) and `sw.js` (a
service worker that caches the app shell). Bump `CACHE_VERSION` in `sw.js`
whenever you change cached files so installed users get the update.

## File structure

```
index.html            – page markup
styles.css            – all styling (dark gaming theme)
clips.js              – your clip data (edit this!)
app.js                – rendering, filtering, search, and modal logic
manifest.webmanifest  – PWA metadata (name, colors, icons)
sw.js                 – service worker (offline app shell cache)
icon-192/512.png      – app icons  •  apple-touch-icon.png – iOS icon
.github/workflows/    – GitHub Pages auto-deploy
```

## Notes

This is a fan-made showcase template and is not affiliated with Activision or Call of Duty. The sample clips use placeholder YouTube videos — swap in your own.
