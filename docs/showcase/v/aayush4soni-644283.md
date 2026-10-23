---
title: "OP-255 · House from a Floor Plan in 3D"
description: "My family is planning to build a house, and all we had was the floor plan. I wanted to see how it would really look once it's built: which colors, lay"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# House from a Floor Plan in 3D

<p class="sc-code-line"><span class="sc-code">OP-255</span> <span class="chip">3D &amp; WebGL</span> <span class="chip chip--ghost">Three.js</span> <span class="chip chip--ghost">Canvas</span></p>

<div class="sc-media-row"><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/aayush4soni-644283/original-card.845fdda44e.mp4" poster="https://media.skillry.dev/opus-5-5/aayush4soni-644283/original.0f89f331fa.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản gốc của tác giả</figcaption></figure><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/aayush4soni-644283/remake-card.4797af1d87.mp4" poster="https://media.skillry.dev/opus-5-5/aayush4soni-644283/remake.7c50fc1e59.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản dựng lại trên Skillry (cùng prompt)</figcaption></figure></div>

Tác giả: [@aayush4soni](https://x.com/aayush4soni) · [Video gốc trên X](https://x.com/aayush4soni/status/2104181266459644283) · [Xem gốc + remake trên Skillry](https://skillry.dev/ai-videos/opus-5-5/aayush4soni-644283)

## Prompt

> Tác giả chỉ đăng video, không công bố prompt — đoạn dưới là nội dung bài đăng gốc.

```text
My family is planning to build a house, and all we had was the floor plan. I wanted to see how it would really look once it's built: which colors, layout and design would suit it best.

So I gave the plan to Claude Opus 5.5 and asked it to create a 3D view of the house.

It's one of the most useful things I've created recently. We can now walk through the house before a single brick is laid, and when we want to try a different color or layout, I just ask for the change.

In the video: the hall, room, and the terrace at dusk, all at eye height.

How it worked:

• I gave it the 5-page floor-plan PDF and one reference image for the front of the house.
• It read the drawings and rebuilt every floor: walls, doors, windows and stairs.
• Where a printed size didn't match the drawn wall, it flagged it (15 places) instead of quietly guessing.
• It furnished every room itself: 500+ pieces of furniture, decor and lighting.
• Everything runs in a web browser with three.js. No Blender, no game engine. You can walk through it like a game, in daylight or evening light, and the lamps actually light the rooms.
• It treated it like a real software project: ~37k lines of JavaScript, 185 unit tests, 56 browser tests, and deterministic video capture (render the same frame twice, get identical pixels).
• It even tracked down a bug of its own: a room's lighting changed depending on which room you walked in from.
• It split the work across sub-agents. Start to finish took about two days.

My part was the decisions: what each room is for, the style, and the changes I wanted.
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-255** — mình dựng kênh cùng kiểu hình
(*3d & webgl* — hợp kênh ambient / visual 3D, nền nhạc lo-fi, cảnh đẹp) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-254](maruo-0314-998343.md) · [Tất cả video](../index.md) · [OP-256 →](allforbigfire-029657.md)
