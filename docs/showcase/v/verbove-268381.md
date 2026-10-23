---
title: "OP-014 · Product Story Through UI States"
description: "<inputs> Ask me for: • my product + URL • 8–12 UI states that tell its story • the real data shown in each state • brand colors + fonts + accent color"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Product Story Through UI States

<p class="sc-code-line"><span class="sc-code">OP-014</span> <span class="chip">Explainer</span> <span class="chip chip--ghost">Canvas</span></p>

<div class="sc-media-row"><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/verbove-268381/original-card.0625940c72.mp4" poster="https://media.skillry.dev/opus-5-5/verbove-268381/original.48c597b63b.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản gốc của tác giả</figcaption></figure><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/verbove-268381/remake-card.48390f64a7.mp4" poster="https://media.skillry.dev/opus-5-5/verbove-268381/remake.fbcc6f768c.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản dựng lại trên Skillry (cùng prompt)</figcaption></figure></div>

Tác giả: [@verbove](https://x.com/verbove) · [Video gốc trên X](https://x.com/verbove/status/2103483957266268381) · [Xem gốc + remake trên Skillry](https://skillry.dev/ai-videos/opus-5-5/verbove-268381)

## Prompt

```text
<inputs> 
Ask me for: 
• my product + URL 
• 8–12 UI states that tell its story 
• the real data shown in each state 
• brand colors + fonts + accent color 
• required formats (1:1, 16:9, 9:16) 
</inputs>

<rules> 
One HTML file. One canvas
One draw(t) function

No CSS transitions
No timers
No state carried between frames

One shape, never cut

Every state is the same element changing size, radius and color while the content swaps

A cursor drives the sequence with real clicks, typing and one drag

Real UI. Real data. No placeholders.

</rules>
<structure> 
120 BPM grid

Something happens on every bea

logo → button → handle field → “is this you?” → loader → pin → globe filling with users → matches → tabs → RSVP → search → logo

</structure>

<motion> 
Closed-form springs everywhere with only a tiny overshoot.

If a value changes target multiple times, sum one spring per change

Content enters after its container starts morphing and leaves before the next morph so text never overlaps

Use a short blur on transitions

Never fade black directly into the accent color. Move an accent element between states instead

Make tab indicators stretch by putting each edge on a different spring

Zoom the camera so every state fills the frame

Make the last frame equal the first so the whole thing loops
</motion>

<export> 
First render one frame per beat as a contact sheet

Fix anything cramped or broken

Then render every frame in headless Chrome at 60fps, averaging 6 subframes for motion blur

Pipe into ffmpeg:
H.264 + yuv420p

Export all aspect ratios in parallel
</export>

motion design is becoming a prompt
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-014** — mình dựng kênh cùng kiểu hình
(*explainer* — hợp kênh giải thích: khoa học, công thức, số liệu, how-it-works) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-013](0xvalure-331584.md) · [Tất cả video](../index.md) · [OP-015 →](gandamu-ml-220530.md)
