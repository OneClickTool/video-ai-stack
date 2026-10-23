---
title: "OP-126 · UI Shape Morph Reel"
description: "<inputs> Ask me for: 8 to 12 UI states I want the shape to become (e.g. button, loader, player, slider, toggle, tabs, chart, command palette, toast), "
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# UI Shape Morph Reel

<p class="sc-code-line"><span class="sc-code">OP-126</span> <span class="chip">Motion graphic</span> <span class="chip chip--ghost">SVG</span></p>

<div class="sc-media-row"><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/nezbuilds-294391/original-card.fda68d6b75.mp4" poster="https://media.skillry.dev/opus-5-5/nezbuilds-294391/original.2ea16dc1f9.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản gốc của tác giả</figcaption></figure><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/nezbuilds-294391/remake-card.6fc704379c.mp4" poster="https://media.skillry.dev/opus-5-5/nezbuilds-294391/remake.36e5997d33.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản dựng lại trên Skillry (cùng prompt)</figcaption></figure></div>

Tác giả: [@nezbuilds](https://x.com/nezbuilds) · [Video gốc trên X](https://x.com/nezbuilds/status/2103487427365294391) · [Xem gốc + remake trên Skillry](https://skillry.dev/ai-videos/opus-5-5/nezbuilds-294391)

## Prompt

```text
<inputs>
Ask me for: 8 to 12 UI states I want the shape to become (e.g. button, loader, player, slider, toggle, tabs, chart, command palette, toast), pure black and white or one accent color, and a royalty-free song around 120 BPM (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Light warm-gray canvas, black and white components, one clean UI font (Geist). Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. The last frame is the first frame, so it loops.
Banned: bouncy easing, particle bursts, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.
</direction>

<structure>
120 BPM, 7 bars, something happens on every beat.
Button → loader → check → dynamic island → music player with a play/pause morph → scrub the progress bar → it becomes a volume slider that stretches when dragged past max → a toggle flips on the beat → the knob becomes a liquid tab indicator → the tabs open into a chart that draws itself, with a tooltip on hover → it collapses into ⌘K → type to filter → enter → toast → back to the button.
</structure>

<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside seek(t): no CSS transitions, no timers, no state carried between frames.
2. Springs are closed-form step responses. A value that changes target many times is the sum of one spring per change, so it stays a pure function of time.
3. The tab indicator's two edges ride different springs, so the leading edge stretches ahead of the trailing one. Same trick for the toggle knob.
4. Drags are direct manipulation: while the cursor is held, the value is computed from its position. On release it springs back from wherever it was.
5. Analyze the song with numpy for the beat grid and start on a downbeat. Place every UI sound by its measured peak.
6. Render with Playwright: 4 subframes per frame, blended with ffmpeg tmix for motion blur at 60fps.
7. Render one frame per beat before the full render. Fix anything off the grid, cramped or hard to read.
</build>

<gotchas>
Never put will-change on anything the camera scales or the text renders blurry. Text that swaps inside a morphing container needs its own enter and exit timing or it overlaps. Make the last frame identical to the first, cursor position and speed included, or the loop stutters.
</gotchas>

<start>
Ask me for the inputs, then show me the state list on the beat grid before you write any code.
</start>
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-126** — mình dựng kênh cùng kiểu hình
(*motion graphic* — hợp kênh Shorts “đã mắt”, typography, loop thư giãn) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-125](anas0ra-952637.md) · [Tất cả video](../index.md) · [OP-127 →](sudo-kiran-254201.md)
