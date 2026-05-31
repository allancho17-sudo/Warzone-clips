/*
 * Warzone Highlights — clip data
 * -------------------------------
 * These are real Call of Duty: Warzone videos hosted on YouTube, sourced from
 * public YouTube search results. Each entry embeds the actual video by its
 * YouTube ID (the 11-character code in a watch?v=… link).
 *
 * Add or swap clips freely. Each clip supports two source types:
 *
 *   1. YouTube:   type: "youtube",  src: "<VIDEO_ID>"
 *   2. Direct MP4: type: "mp4",     src: "https://…/clip.mp4"
 *
 * Fields:
 *   title    – headline shown on the card (kept close to the real video title)
 *   player   – creator / channel
 *   category – e.g. "Snipes", "Clutch", "High Kill", "Funny", "Movement", "Best Of"
 *   weapon   – weapon used (free text, also searchable)
 *   kills    – number, feeds the "Total Kills" stat
 *   win      – true if the clip ended in a W (feeds "Wins" stat)
 *   desc     – short description shown in the modal
 *   duration – OPTIONAL display string e.g. "0:42" (omitted when unknown)
 *   thumb    – OPTIONAL custom thumbnail (YouTube auto-generates one otherwise)
 *
 * Note: if a specific video ever has embedding disabled by its uploader, the
 * player will show a "Watch on YouTube" link instead — just swap in another ID.
 */
window.CLIPS = [
  /* ---------------- High Kill ---------------- */
  {
    title: "Solo vs Quads WORLD RECORD — 67 Kills",
    player: "Metaphor",
    category: "High Kill",
    weapon: "Meta Loadout",
    kills: 67,
    win: true,
    desc: "Metaphor's record-setting solo-vs-quads game — 67 eliminations in a single match of pure aggression.",
    type: "youtube",
    src: "o5oLFS5kKCw"
  },
  {
    title: "60 Kills Solo vs Squads in Warzone",
    player: "WZ Pros",
    category: "High Kill",
    weapon: "AR / SMG",
    kills: 60,
    win: true,
    desc: "A 60-bomb solo run against full squads. Relentless pace from the first drop to the final circle.",
    type: "youtube",
    src: "Ulg_hyr5u4c"
  },
  {
    title: "Warzone Solo vs Squads — 41 Solo Kills",
    player: "SoloGrind",
    category: "High Kill",
    weapon: "Meta Loadout",
    kills: 41,
    win: true,
    desc: "Forty-one kills flying solo against teams of four. Loadout secured early and the lobby paid for it.",
    type: "youtube",
    src: "NwpBlWPscK0"
  },

  /* ---------------- Clutch ---------------- */
  {
    title: "INSANE Solo vs Squads Win (31 Kills)",
    player: "ClutchKing",
    category: "Clutch",
    weapon: "AR / SMG",
    kills: 31,
    win: true,
    desc: "A 31-kill solo win where the final circle came down to the wire. Textbook resets and closing the dub.",
    type: "youtube",
    src: "QqHI6ExIpHM"
  },
  {
    title: "Epic Last-Second Win — Solo vs Squads (No Commentary)",
    player: "No Comm Gameplay",
    category: "Clutch",
    weapon: "Meta AR",
    kills: 14,
    win: true,
    desc: "Perfect rotations and smart positioning set up an unexpected last-second victory. Pure gameplay, no talking.",
    type: "youtube",
    src: "SnuYbi7tYqs"
  },
  {
    title: "\"VIOLATE HIM!\" — 1v4 Gas Play Clutch (Both POVs)",
    player: "WZ Community",
    category: "Clutch",
    weapon: "SMG",
    kills: 4,
    win: true,
    desc: "A full-squad 1v4 won inside the gas, shown from both points of view. One of the cleanest clutches around.",
    type: "youtube",
    src: "BuT71SJa2sE"
  },
  {
    title: "Insane IMPOSSIBLE 1v4 Warzone Clutch",
    player: "Stract",
    category: "Clutch",
    weapon: "SMG",
    kills: 4,
    win: true,
    desc: "A 1v4 that had no business going this way. Stract resets the fight and breaks the entire squad solo.",
    type: "youtube",
    src: "Hx1nWtwOa_4"
  },

  /* ---------------- Snipes ---------------- */
  {
    title: "The Verdansk — A Warzone Sniper Montage",
    player: "FaZe Pamaj",
    category: "Snipes",
    weapon: "HDR / Kar98k",
    kills: 45,
    win: false,
    desc: "FaZe Pamaj's classic Verdansk sniper montage — flicks, no-scopes, and cross-map headshots back to back.",
    type: "youtube",
    src: "K3F2bo2dtpU"
  },
  {
    title: "Top 50 Best Warzone Sniper Kills",
    player: "WZ Snipers",
    category: "Snipes",
    weapon: "Sniper",
    kills: 50,
    win: false,
    desc: "Fifty of the cleanest sniper eliminations ever clipped in Warzone, counted down to the very best.",
    type: "youtube",
    src: "zN5NUsV401c"
  },
  {
    title: "The 75 Best Warzone Sniper Kills Ever Witnessed",
    player: "WZ Snipers",
    category: "Snipes",
    weapon: "Sniper",
    kills: 75,
    win: false,
    desc: "Seventy-five jaw-dropping snipes — the kind of shots that make the whole lobby spectate.",
    type: "youtube",
    src: "dIXLApvR4MM"
  },
  {
    title: "Top 100 in the World — Warzone Sniper Montage",
    player: "WZ Snipers",
    category: "Snipes",
    weapon: "Sniper",
    kills: 100,
    win: false,
    desc: "A hundred elite-level snipes from some of the best long-range players Warzone has ever seen.",
    type: "youtube",
    src: "EeF8IwTHVyo"
  },
  {
    title: "15 Impossible COD Warzone Sniper Shots",
    player: "WZ Snipers",
    category: "Snipes",
    weapon: "Sniper",
    kills: 15,
    win: false,
    desc: "Fifteen shots that physically should not have connected. Trajectory, lead, and luck all aligned.",
    type: "youtube",
    src: "pVBOq44KJwo"
  },

  /* ---------------- Movement / Gameplay ---------------- */
  {
    title: "Warzone Is Better Like THIS — Duos Gameplay",
    player: "JackFrags",
    category: "Movement",
    weapon: "Various",
    kills: 12,
    win: false,
    desc: "JackFrags drops into Urzikstan for a clean duos game — slick movement, smart fights, great commentary.",
    type: "youtube",
    src: "km03k3o635E"
  },

  /* ---------------- Funny ---------------- */
  {
    title: "Top 300 Funniest Fails in Warzone",
    player: "WZ Moments",
    category: "Funny",
    weapon: "Various",
    kills: 0,
    win: false,
    desc: "Three hundred of the funniest fails, fumbles, and only-in-Warzone moments all in one compilation.",
    type: "youtube",
    src: "23Ne81xWPgk"
  },
  {
    title: "Warzone WTF & Funny Moments #474",
    player: "WZ Moments",
    category: "Funny",
    weapon: "Various",
    kills: 0,
    win: false,
    desc: "Episode 474 of the long-running series — physics chaos, perfect timing, and pure squad comedy.",
    type: "youtube",
    src: "J6SoGDRCyaw"
  },
  {
    title: "Funniest Warzone Fails Before Epic Wins",
    player: "WZ Moments",
    category: "Funny",
    weapon: "Various",
    kills: 0,
    win: false,
    desc: "The fails that somehow turned into wins. Gas-circle gambles and gulag heartbreak that paid off.",
    type: "youtube",
    src: "uV8PgeT0PXQ"
  },

  /* ---------------- Best Of ---------------- */
  {
    title: "1000 Warzone Moments That Will Blow Your Mind (2025)",
    player: "Top WZ Plays",
    category: "Best Of",
    weapon: "Various",
    kills: 0,
    win: false,
    desc: "A thousand of the best Warzone moments from 2025 — clutches, snipes, wipes, and highlight-reel plays.",
    type: "youtube",
    src: "wptEU4CYg8I"
  },
  {
    title: "Best Warzone Highlights 2025 (Part 2)",
    player: "Top WZ Plays",
    category: "Best Of",
    weapon: "Various",
    kills: 0,
    win: false,
    desc: "Part two of the year's best — the top plays and funniest moments the community produced in 2025.",
    type: "youtube",
    src: "87XullAM_GE"
  }
];
