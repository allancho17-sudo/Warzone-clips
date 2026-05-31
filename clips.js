/*
 * Warzone Highlights — clip data
 * -------------------------------
 * These are real Call of Duty: Warzone videos hosted on YouTube, sourced from
 * public search results. Each entry embeds the actual video by its YouTube ID.
 *
 * Add or swap clips freely. Each clip supports two source types:
 *
 *   1. YouTube:   type: "youtube",  src: "<VIDEO_ID>"   (the 11-char ID in watch?v=…)
 *   2. Direct MP4: type: "mp4",     src: "https://…/clip.mp4"
 *
 * Fields:
 *   title    – headline shown on the card
 *   player   – creator / channel (gamertag style)
 *   category – one of: "Snipes", "Clutch", "High Kill", "Funny", "Movement"
 *   weapon   – weapon used (free text, also searchable)
 *   duration – display string e.g. "0:42"
 *   kills    – number, feeds the "Total Kills" stat
 *   win      – true if the clip ended in a W (feeds "Wins" stat)
 *   desc     – short description shown in the modal
 *   thumb    – optional custom thumbnail URL (YouTube auto-generates one)
 *
 * Note: if a specific video ever has embedding disabled by its uploader, the
 * player will show a "Watch on YouTube" link instead — just swap in another ID.
 */
window.CLIPS = [
  {
    title: "Top 50 Kills of All Time — Best Sniper Headshots & Longshots",
    player: "WZ Highlights",
    category: "Snipes",
    weapon: "Sniper",
    duration: "12:38",
    kills: 50,
    win: false,
    desc: "A countdown of the 50 cleanest sniper headshots and cross-map longshots ever pulled off in Warzone.",
    type: "youtube",
    src: "_5Rw-Ew8mYg"
  },
  {
    title: "The BEST Warzone Sniper Montage",
    player: "WZ Snipers",
    category: "Snipes",
    weapon: "Kar98k / HDR",
    duration: "8:14",
    kills: 40,
    win: false,
    desc: "Back-to-back quickscopes, no-scopes, and impossible flicks set to the beat. Pure sniper eye-candy.",
    type: "youtube",
    src: "oFI52CWPGfA"
  },
  {
    title: "Warzone Sniper Montage",
    player: "ClipVault",
    category: "Snipes",
    weapon: "Sniper",
    duration: "6:02",
    kills: 28,
    win: false,
    desc: "A tight montage of long-range eliminations and squad-breaking headshots across Verdansk and beyond.",
    type: "youtube",
    src: "Lf-mEZirMW8"
  },
  {
    title: "Warzone Sniper Clips Compilation",
    player: "ClipVault",
    category: "Snipes",
    weapon: "Sniper",
    duration: "5:21",
    kills: 22,
    win: false,
    desc: "Community-submitted sniper clips — the kind of shots that make the whole lobby spectate.",
    type: "youtube",
    src: "ujLrxNXP9pM"
  },
  {
    title: "INSANE Warzone Sniper Montage — 30 Bomb",
    player: "FragMaster",
    category: "High Kill",
    weapon: "Sniper Support",
    duration: "9:47",
    kills: 30,
    win: true,
    desc: "A 30-kill game carried by lights-out sniping. Loadout dropped early and the lobby never recovered.",
    type: "youtube",
    src: "YJI5Du0Q3Vc"
  },
  {
    title: "Warzone TOP 100 PLAYS of the Year",
    player: "WZ Top Plays",
    category: "High Kill",
    weapon: "Various",
    duration: "18:55",
    kills: 100,
    win: true,
    desc: "The 100 best Warzone plays of the year — clutches, snipes, wipes, and game-winning highlights all in one reel.",
    type: "youtube",
    src: "vsuVnCgkrIQ"
  },
  {
    title: "Warzone Solo vs Squads — WIN",
    player: "SoloGrind",
    category: "Clutch",
    weapon: "Meta AR",
    duration: "14:09",
    kills: 12,
    win: true,
    desc: "One player against full squads all game, closing it out in the final circle for the dub. Heart-rate material.",
    type: "youtube",
    src: "jVHbWVlVYxQ"
  },
  {
    title: "Warzone Best Highlights — Epic & Funny Moments #1",
    player: "WZ Moments",
    category: "Funny",
    weapon: "Various",
    duration: "10:32",
    kills: 14,
    win: false,
    desc: "The best of both worlds — jaw-dropping plays mixed with the chaos and comedy only Warzone delivers.",
    type: "youtube",
    src: "Yhq8ut9NFNI"
  },
  {
    title: "Warzone Epic & Funny Moments #25",
    player: "WZ Moments",
    category: "Funny",
    weapon: "Various",
    duration: "11:08",
    kills: 16,
    win: false,
    desc: "Episode 25 of the fan-favorite series — clutch saves, perfectly-timed killcams, and pure squad chaos.",
    type: "youtube",
    src: "h2Gv0funR0M"
  },
  {
    title: "Warzone Funny Moments & Fails",
    player: "ClipVault",
    category: "Funny",
    weapon: "Various",
    duration: "9:14",
    kills: 8,
    win: false,
    desc: "Gas-circle gambles, gulag heartbreak, and the kind of fails you can only laugh at. We've all been there.",
    type: "youtube",
    src: "YbJOTdZBX1g"
  },
  {
    title: "COD Warzone Funny Moments Compilation",
    player: "WZ Moments",
    category: "Funny",
    weapon: "Various",
    duration: "12:47",
    kills: 11,
    win: false,
    desc: "A full compilation of the funniest Warzone moments — teammates, timing, and total chaos.",
    type: "youtube",
    src: "8fAhEf6jLfc"
  },
  {
    title: "Warzone WTF & Funny Moments",
    player: "ClipVault",
    category: "Funny",
    weapon: "Various",
    duration: "8:39",
    kills: 9,
    win: false,
    desc: "The plays that make you go 'how?!' — physics-defying moments and lucky breaks caught on stream.",
    type: "youtube",
    src: "zUuKuP3uvWc"
  }
];
