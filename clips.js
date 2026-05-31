/*
 * Warzone Highlights — clip data
 * -------------------------------
 * Add your own clips here. Each clip supports two source types:
 *
 *   1. YouTube:  type: "youtube",  src: "<VIDEO_ID>"
 *   2. Direct MP4: type: "mp4",    src: "https://…/clip.mp4"
 *
 * Fields:
 *   title    – headline shown on the card
 *   player   – who pulled off the play (gamertag)
 *   category – one of: "Snipes", "Clutch", "High Kill", "Funny", "Movement"
 *   weapon   – weapon used (free text, also searchable)
 *   duration – display string e.g. "0:42"
 *   kills    – number, feeds the "Total Kills" stat
 *   win      – true if the clip ended in a W (feeds "Wins" stat)
 *   desc     – short description shown in the modal
 *   thumb    – optional custom thumbnail URL (YouTube auto-generates one)
 */
window.CLIPS = [
  {
    title: "360 No-Scope Across Verdansk",
    player: "GhostFPS",
    category: "Snipes",
    weapon: "HDR",
    duration: "0:24",
    kills: 1,
    win: false,
    desc: "Spun the camera, prefired the rooftop, and dropped a full-send no-scope from over 300 meters.",
    type: "youtube",
    src: "aqz-KE-bpKQ"
  },
  {
    title: "1v4 Last Circle Clutch for the W",
    player: "ZaraClutch",
    category: "Clutch",
    weapon: "MCW",
    duration: "1:08",
    kills: 4,
    win: true,
    desc: "Down to the final gas circle, solo against a full squad. Reset the fight twice and closed it out.",
    type: "youtube",
    src: "ScMzIvxBSi4"
  },
  {
    title: "32 Kill Solo vs Squads Game",
    player: "Reaperizz",
    category: "High Kill",
    weapon: "Kar98k",
    duration: "2:15",
    kills: 32,
    win: true,
    desc: "A complete map domination run. Sniper support build, loadout drop secured early, never looked back.",
    type: "youtube",
    src: "VYOjWnS4cMY"
  },
  {
    title: "Bunny-Hop Slide Cancel Montage",
    player: "FlickJunkie",
    category: "Movement",
    weapon: "Various",
    duration: "1:33",
    kills: 7,
    win: false,
    desc: "Movement is the meta. Slide cancels, ledge mantles, and bhops chained into clean gunfights.",
    type: "youtube",
    src: "Sagg08DrO5U"
  },
  {
    title: "Team Wipe with the Last Bullet",
    player: "NovaStrike",
    category: "Clutch",
    weapon: "RAM-7",
    duration: "0:51",
    kills: 4,
    win: true,
    desc: "Quad feed to break the squad — final kill landed on an empty mag reload. Pure adrenaline.",
    type: "youtube",
    src: "M7lc1UVf-VE"
  },
  {
    title: "When the Gas Closes and Chaos Wins",
    player: "LaggyLlama",
    category: "Funny",
    weapon: "Riot Shield",
    duration: "0:37",
    kills: 2,
    win: false,
    desc: "Riot shield, a cluster strike, and three enemies fighting over one rock. It went exactly how you'd expect.",
    type: "youtube",
    src: "kJQP7kiw5Fk"
  },
  {
    title: "Cross-Map Quad Feed Snipe",
    player: "GhostFPS",
    category: "Snipes",
    weapon: "HDR",
    duration: "0:46",
    kills: 4,
    win: false,
    desc: "Four members of the same squad pushed across an open field. They did not make it across.",
    type: "youtube",
    src: "9bZkp7q19f0"
  },
  {
    title: "Gulag Comeback to Victory",
    player: "ZaraClutch",
    category: "Clutch",
    weapon: "X12 Pistol",
    duration: "1:19",
    kills: 5,
    win: true,
    desc: "Lost the first fight, won the Gulag with a pistol, redeployed and carried the squad to the W.",
    type: "youtube",
    src: "L_jWHffIx5E"
  }
];
