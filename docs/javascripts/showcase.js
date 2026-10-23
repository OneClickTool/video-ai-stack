// Lưới lọc cho trang showcase/ — đọc showcase/videos.json (sinh bởi scripts/sync_opus_showcase.py).
// Chạy lại mỗi lần đổi trang vì theme bật navigation.instant (document$ của Material).
(function () {
  const PAGE = 60;

  function init() {
    const app = document.getElementById("sc-app");
    if (!app || app.dataset.ready) return;
    app.dataset.ready = "1";

    const $ = (id) => document.getElementById(id);
    const q = $("sc-q"), tagSel = $("sc-tag"), sortSel = $("sc-sort");
    const cats = $("sc-cats"), grid = $("sc-grid"), count = $("sc-count"), more = $("sc-more");
    const state = { cat: "", shown: PAGE, list: [] };
    let data;

    const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
    const code = (n) => "OP-" + String(n).padStart(3, "0");

    function card(v) {
      const label = data.meta.cats[v.cat] || v.cat;
      return `<a class="sc-card" href="v/${v.slug}/" data-clip="${v.clip ? esc(v.clip) : ""}">
        <div class="sc-thumb">
          <img src="${esc(v.poster)}" alt="${esc(v.title)}" loading="lazy" decoding="async">
          <span class="sc-code">${code(v.n)}</span>
          ${v.clip ? '<span class="sc-play" aria-hidden="true">▶</span>' : ""}
        </div>
        <div class="sc-body">
          <p class="sc-title">${esc(v.title)}</p>
          <p class="sc-meta">${esc(label)} · @${esc(v.author)}</p>
        </div>
      </a>`;
    }

    function apply() {
      const term = q.value.trim().toLowerCase();
      const tag = tagSel.value;
      let list = data.videos.filter((v) =>
        (!state.cat || v.cat === state.cat) &&
        (!tag || v.tags.includes(tag)) &&
        (!term || (v.title + " " + v.author + " " + v.text + " " + code(v.n)).toLowerCase().includes(term.replace(/^@/, "")))
      );
      const s = sortSel.value;
      if (s === "new") list.sort((a, b) => (b.added || "").localeCompare(a.added || "") || b.n - a.n);
      else if (s === "clip") list.sort((a, b) => (!!b.clip - !!a.clip) || b.n - a.n);
      else list.sort((a, b) => a.n - b.n);
      state.list = list;
      state.shown = PAGE;
      render();
    }

    function render() {
      const list = state.list;
      grid.innerHTML = list.slice(0, state.shown).map(card).join("");
      count.textContent = list.length
        ? `${list.length} / ${data.meta.count} video · cập nhật ${data.meta.updated}`
        : "Không có video khớp — thử từ khoá khác.";
      more.hidden = state.shown >= list.length;
      more.textContent = `Xem thêm (${list.length - state.shown} video nữa)`;
    }

    // rê chuột → phát clip; chỉ tạo <video> khi cần để trang không tải 400 clip một lúc
    grid.addEventListener("mouseover", (e) => {
      const a = e.target.closest(".sc-card");
      if (!a || !a.dataset.clip || a.querySelector("video")) return;
      const vid = document.createElement("video");
      Object.assign(vid, { src: a.dataset.clip, muted: true, loop: true, playsInline: true, autoplay: true });
      a.querySelector(".sc-thumb").appendChild(vid);
      a.addEventListener("mouseleave", () => vid.remove(), { once: true });
    });

    more.addEventListener("click", () => { state.shown += PAGE; render(); });
    q.addEventListener("input", apply);
    tagSel.addEventListener("change", apply);
    sortSel.addEventListener("change", apply);

    fetch(app.dataset.src)
      .then((r) => r.json())
      .then((d) => {
        data = d;
        const n = (k) => d.videos.filter((v) => v.cat === k).length;
        cats.innerHTML = [["", `Tất cả (${d.meta.count})`]]
          .concat(Object.entries(d.meta.cats).map(([k, lbl]) => [k, `${lbl} (${n(k)})`]))
          .map(([k, lbl]) => `<button type="button" class="sc-cat${k ? "" : " is-on"}" data-cat="${k}">${esc(lbl)}</button>`)
          .join("");
        cats.addEventListener("click", (e) => {
          const b = e.target.closest(".sc-cat");
          if (!b) return;
          cats.querySelectorAll(".sc-cat").forEach((x) => x.classList.toggle("is-on", x === b));
          state.cat = b.dataset.cat;
          apply();
        });
        const used = new Set(d.videos.flatMap((v) => v.tags));
        tagSel.insertAdjacentHTML("beforeend", Object.entries(d.meta.tags)
          .filter(([k]) => used.has(k))
          .map(([k, lbl]) => `<option value="${k}">${esc(lbl)}</option>`).join(""));
        apply();
      })
      .catch(() => { count.textContent = "Không tải được danh sách video."; });
  }

  if (window.document$) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
