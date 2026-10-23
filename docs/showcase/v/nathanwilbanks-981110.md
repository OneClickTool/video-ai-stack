---
title: "OP-219 · GPU Fire Fluid Simulation"
description: "I asked opus 5.5 in @agnt_gg for the most realistic fire it could build using ONLY javascript. It wrote a real 3D fluid simulation that runs on the GP"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# GPU Fire Fluid Simulation

<p class="sc-code-line"><span class="sc-code">OP-219</span> <span class="chip">Explainer</span> <span class="chip chip--ghost">Three.js</span> <span class="chip chip--ghost">GLSL shader</span> <span class="chip chip--ghost">Có âm thanh</span></p>

<div class="sc-media-row"><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/nathanwilbanks-981110/original-card.a55abd6d9a.mp4" poster="https://media.skillry.dev/opus-5-5/nathanwilbanks-981110/original.5401acd5a9.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản gốc của tác giả</figcaption></figure><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/nathanwilbanks-981110/remake-card.6f154aa8c5.mp4" poster="https://media.skillry.dev/opus-5-5/nathanwilbanks-981110/remake.759f63af9d.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản dựng lại trên Skillry (cùng prompt)</figcaption></figure></div>

Tác giả: [@NathanWilbanks_](https://x.com/NathanWilbanks_) · [Video gốc trên X](https://x.com/NathanWilbanks_/status/2103881538592981110) · [Xem gốc + remake trên Skillry](https://skillry.dev/ai-videos/opus-5-5/nathanwilbanks-981110)

## Prompt

> Tác giả chỉ đăng video, không công bố prompt — đoạn dưới là nội dung bài đăng gốc.

```text
I asked opus 5.5 in @agnt_gg for the most realistic fire it could build using ONLY javascript.

It wrote a real 3D fluid simulation that runs on the GPU. The flame colors come from blackbody physics, the smoke is real volume, it runs at 96 fps in 1080p, and it critiqued its own renders about 40 times.

Then it shot a 38 second film of it. The sound comes from the fire itself. 🔥

Details:

- Nothing faked. The fire is actual simulated gas that burns, heats up, rises, and swirls. It gives off soot that glows, and the soot that escapes cools into smoke. Every frame is computed on the GPU.

- The AI graded its own work: render a frame, have a vision model pick it apart like a VFX supervisor, fix it, repeat. It caught a flame that kept dying, ring shaped artifacts on the ground, and coals that looked like cheese chips.

- The film isn't screen recorded. Each frame is rendered offline with scripted camera moves. The crackle and roar come from how brightly the fire burns in each frame.

- No Blender, no stock footage, no sound library. One HTML file, one conversation.
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-219** — mình dựng kênh cùng kiểu hình
(*explainer* — hợp kênh giải thích: khoa học, công thức, số liệu, how-it-works) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-218](kgonia7-746268.md) · [Tất cả video](../index.md) · [OP-220 →](hunzai-842605.md)
