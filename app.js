/* Warzone Highlights — app logic */
(function () {
  "use strict";

  const clips = window.CLIPS || [];
  const grid = document.getElementById("clip-grid");
  const filtersEl = document.getElementById("filters");
  const searchEl = document.getElementById("search");
  const emptyEl = document.getElementById("empty-state");

  let activeCategory = "All";
  let activeSearch = "";

  /* ---------- Thumbnails ---------- */
  function thumbFor(clip) {
    if (clip.thumb) return clip.thumb;
    if (clip.type === "youtube") {
      return `https://img.youtube.com/vi/${clip.src}/hqdefault.jpg`;
    }
    return "";
  }

  /* ---------- Stats ---------- */
  function renderStats() {
    const totals = clips.reduce(
      (acc, c) => {
        acc.kills += Number(c.kills) || 0;
        acc.wins += c.win ? 1 : 0;
        return acc;
      },
      { kills: 0, wins: 0 }
    );
    const map = { clips: clips.length, kills: totals.kills, wins: totals.wins };
    document.querySelectorAll("[data-stat]").forEach((el) => {
      animateCount(el, map[el.dataset.stat] || 0);
    });
  }

  function animateCount(el, target) {
    const dur = 900;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Filters ---------- */
  function buildFilters() {
    const cats = ["All", ...Array.from(new Set(clips.map((c) => c.category)))];
    filtersEl.innerHTML = "";
    cats.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "chip" + (cat === activeCategory ? " active" : "");
      btn.textContent = cat;
      btn.setAttribute("role", "tab");
      btn.addEventListener("click", () => {
        activeCategory = cat;
        filtersEl.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
        btn.classList.add("active");
        renderGrid();
      });
      filtersEl.appendChild(btn);
    });
  }

  /* ---------- Grid ---------- */
  function matches(clip) {
    const catOk = activeCategory === "All" || clip.category === activeCategory;
    if (!catOk) return false;
    if (!activeSearch) return true;
    const hay = [clip.title, clip.player, clip.weapon, clip.category, clip.desc]
      .join(" ")
      .toLowerCase();
    return hay.includes(activeSearch);
  }

  function renderGrid() {
    const visible = clips.filter(matches);
    grid.innerHTML = "";
    emptyEl.hidden = visible.length > 0;

    visible.forEach((clip) => {
      const idx = clips.indexOf(clip);
      const card = document.createElement("article");
      card.className = "clip-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Play ${clip.title}`);

      const thumb = thumbFor(clip);
      card.innerHTML = `
        <div class="thumb" style="${thumb ? `background-image:url('${thumb}')` : ""}">
          <span class="cat-tag">${clip.category}</span>
          <span class="duration">${clip.duration || ""}</span>
          <span class="play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
        </div>
        <div class="clip-body">
          <h3 class="clip-title">${escapeHtml(clip.title)}</h3>
          <p class="clip-sub">
            <span>@${escapeHtml(clip.player)}</span>
            <span class="dot"></span>
            <span>${escapeHtml(clip.weapon)}</span>
            ${clip.win ? '<span class="dot"></span><span style="color:var(--accent-2)">WIN</span>' : ""}
          </p>
        </div>`;

      card.addEventListener("click", () => openModal(idx));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(idx);
        }
      });
      grid.appendChild(card);
    });
  }

  /* ---------- Modal ---------- */
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalTags = document.getElementById("modal-tags");

  function openModal(idx) {
    const clip = clips[idx];
    if (!clip) return;

    if (clip.type === "youtube") {
      modalVideo.innerHTML = `<iframe src="https://www.youtube.com/embed/${clip.src}?autoplay=1&rel=0" title="${escapeAttr(clip.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else if (clip.type === "mp4") {
      modalVideo.innerHTML = `<video src="${clip.src}" controls autoplay playsinline></video>`;
    } else {
      modalVideo.innerHTML = "";
    }

    modalTitle.textContent = clip.title;
    modalDesc.textContent = clip.desc || "";
    modalTags.innerHTML = "";
    [`@${clip.player}`, clip.category, clip.weapon, `${clip.kills} kills`]
      .filter(Boolean)
      .forEach((t) => {
        const s = document.createElement("span");
        s.textContent = t;
        modalTags.appendChild(s);
      });

    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    modalVideo.innerHTML = ""; // stop playback
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-close")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---------- Search ---------- */
  searchEl.addEventListener("input", (e) => {
    activeSearch = e.target.value.trim().toLowerCase();
    renderGrid();
  });

  /* ---------- Submit form (demo) ---------- */
  const form = document.getElementById("submit-form");
  const note = document.getElementById("submit-note");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = document.getElementById("clip-url").value.trim();
    if (!url) return;
    note.hidden = false;
    note.textContent = "Thanks! Your clip was submitted for review. 🎯";
    form.reset();
    setTimeout(() => (note.hidden = true), 5000);
  });

  /* ---------- Helpers ---------- */
  function escapeHtml(str) {
    return String(str || "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }
  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, "&quot;");
  }

  /* ---------- Init ---------- */
  buildFilters();
  renderGrid();
  renderStats();
})();
