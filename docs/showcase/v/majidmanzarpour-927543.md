---
title: "OP-045 · Pixel Art Wizard Spell (Canvas)"
description: "Create a single self-contained HTML file that renders an animated pixel art wizard casting a spell, using vanilla JavaScript and Canvas 2D. No externa"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Pixel Art Wizard Spell (Canvas)

<p class="sc-code-line"><span class="sc-code">OP-045</span> <span class="chip">Motion graphic</span> <span class="chip chip--ghost">Canvas</span></p>

<div class="sc-media-row"><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/majidmanzarpour-927543/original-card.2ea673ee57.mp4" poster="https://media.skillry.dev/opus-5-5/majidmanzarpour-927543/original.f5bc33c897.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản gốc của tác giả</figcaption></figure><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/majidmanzarpour-927543/remake-card.0755c7d5dd.mp4" poster="https://media.skillry.dev/opus-5-5/majidmanzarpour-927543/remake.2e7d3db633.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản dựng lại trên Skillry (cùng prompt)</figcaption></figure></div>

Tác giả: [@majidmanzarpour](https://x.com/majidmanzarpour) · [Video gốc trên X](https://x.com/majidmanzarpour/status/2102476258948927543) · [Xem gốc + remake trên Skillry](https://skillry.dev/ai-videos/opus-5-5/majidmanzarpour-927543)

## Prompt

```text
Create a single self-contained HTML file that renders an animated pixel art wizard casting a spell, using vanilla JavaScript and Canvas 2D. No external assets, libraries, or network requests.

RENDERING
- Draw everything to an offscreen canvas at a fixed logical resolution of 128x96, then blit to a fullscreen display canvas scaled by the largest integer factor that fits the window, centered, with imageSmoothingEnabled = false and CSS image-rendering: pixelated.
- All drawing snaps to integer coordinates on the logical canvas. No sub-pixel positions, anti-aliasing, gradients, or shadowBlur.
- Fixed palette of ~24 hex colors: deep blues/purples for night sky, warm robe tones, 3-4 bright magic colors. Every pixel comes from this palette.

CHARACTER
- Build the wizard procedurally from filled rects and pixel runs, ~24x32 logical pixels: pointed hat with a bend, long beard, two-shade robe with darker outline, staff with a gem at the tip.
- Parameterize the pose (staff angle, arm raise, head tilt, robe sway). Animate parameters smoothly, then quantize to the pixel grid each frame so motion reads at an 8-12 fps pixel animation feel even though the loop runs at 60fps.

ANIMATION
- Looping state machine: IDLE (2-frame bob, beard sway) -> CHARGE (staff raises, gem flickers, sparks spiral inward) -> CAST (bright burst, projectile fires across the scene, 1-2 pixel screen shake) -> RECOVER (settle back). Ease pose parameters between keyframes.
- Pooled allocation-free particle system: preallocate and reuse. Sparks orbit the gem during CHARGE, explode outward on CAST, each particle stepping its palette index from white to magic color to dark before despawn. Snap particle positions to the grid when drawing.
- Fixed 60hz timestep update with rAF rendering. Zero object allocation inside the loop.

SCENE
- Minimal background: dark sky, a few twinkling 1px stars, moon, stone floor line. Character silhouette must read clearly.
- Subtle 1px rim light on the wizard from the gem, brightening during CHARGE and CAST.

QUALITY BAR
- Crisp pixels at any window size, seamless loop, stable 60fps, readable silhouette. Should look like a polished 16-bit sprite animation, not vector shapes scaled down.
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-045** — mình dựng kênh cùng kiểu hình
(*motion graphic* — hợp kênh Shorts “đã mắt”, typography, loop thư giãn) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-044](kloss-xyz-941143.md) · [Tất cả video](../index.md) · [OP-046 →](monokern-832979.md)
