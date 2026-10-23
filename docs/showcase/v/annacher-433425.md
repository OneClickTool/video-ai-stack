---
title: "OP-105 · Sprites.ai Promo from Real UI"
description: "Analyze http://sprites.ai and build a product promo from our own UI, not generic components. <direction> Dribbble-level UI motion. One shape, never cu"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Sprites.ai Promo from Real UI

<p class="sc-code-line"><span class="sc-code">OP-105</span> <span class="chip">Motion graphic</span> <span class="chip chip--ghost">SVG</span></p>

<div class="sc-media-row"><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/annacher-433425/original-card.a3156af387.mp4" poster="https://media.skillry.dev/opus-5-5/annacher-433425/original.89dc11ee96.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản gốc của tác giả</figcaption></figure><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/annacher-433425/remake-card.a84ec81e73.mp4" poster="https://media.skillry.dev/opus-5-5/annacher-433425/remake.95b6551c75.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản dựng lại trên Skillry (cùng prompt)</figcaption></figure></div>

Tác giả: [@AnnaCher___](https://x.com/AnnaCher___) · [Video gốc trên X](https://x.com/AnnaCher___/status/2103571096549433425) · [Xem gốc + remake trên Skillry](https://skillry.dev/ai-videos/opus-5-5/annacher-433425)

## Prompt

```text
Analyze http://sprites.ai and build a product promo from our own UI, not generic components.

<direction>
Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Warm-gray canvas, black and white components, one accent (#FD9543), Geist. Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. Last frame = first frame, so it loops.
Banned: bouncy easing, particles, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.
</direction>

<structure>
120 BPM, 7 bars, something on every beat.
Connect ad account (Meta, Google, LinkedIn, TikTok, Reddit logos) → loader → check → prompt bar types "Launch ads that convert" → island "Researching 42 competitors" → Ads Library wall of real ads scrolls and lands on a top performer → approval card → Approve & launch → budget slider that stretches past max → Autopilot toggle → knob becomes a liquid tab indicator across channels → ROAS chart draws itself with hover tooltip → ⌘K → type "pause" → toast "Paused 3 losing ads" → back to the button.
</structure>

<build>
1. One HTML file, 1440x1440. Every style is computed inside seek(t): no CSS transitions, no timers, no state between frames.
2. Springs are closed-form step responses. A value that changes target many times is a sum of springs, so it stays a pure function of time.
3. Tab indicator and toggle knob: the two edges ride different springs, so the leading edge stretches ahead.
4. Drags are direct manipulation: while held, the value follows the cursor. On release it springs back from wherever it was.
5. No music. Synthesize UI sounds with numpy and place each one by its measured peak on the beat grid.
6. Render with Playwright: 4 subframes per frame, blended with ffmpeg tmix for motion blur at 60fps.
7. Render one frame per beat first. Fix anything off-grid, cramped or hard to read.
</build>

<gotchas>
No will-change on anything the camera scales. Swapped text needs its own enter/exit timing. Match the last frame to the first, cursor position and speed included, or the loop stutters.
</gotchas>

Show me the state list on the beat grid before writing any code.
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-105** — mình dựng kênh cùng kiểu hình
(*motion graphic* — hợp kênh Shorts “đã mắt”, typography, loop thư giãn) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-104](madebyjmayala-649220.md) · [Tất cả video](../index.md) · [OP-106 →](slvdev-975986.md)
