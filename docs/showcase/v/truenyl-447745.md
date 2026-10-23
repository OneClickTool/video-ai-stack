---
title: "OP-236 · Real-World 3D Scene Recreation"
description: "Claude Opus 5.5 is absurdly good at 3D. I reran one of my recent 3D experiments with Claude Opus 5.5. Same prompt, same references, same real-world sc"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Real-World 3D Scene Recreation

<p class="sc-code-line"><span class="sc-code">OP-236</span> <span class="chip">3D &amp; WebGL</span> <span class="chip chip--ghost">Three.js</span> <span class="chip chip--ghost">GLSL shader</span></p>

<div class="sc-media-row"><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/truenyl-447745/original-card.43d1d3a50a.mp4" poster="https://media.skillry.dev/opus-5-5/truenyl-447745/original.4c323ecff9.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản gốc của tác giả</figcaption></figure><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/truenyl-447745/remake-card.b33a62c979.mp4" poster="https://media.skillry.dev/opus-5-5/truenyl-447745/remake.49d6627f1c.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản dựng lại trên Skillry (cùng prompt)</figcaption></figure></div>

Tác giả: [@truenyl](https://x.com/truenyl) · [Video gốc trên X](https://x.com/truenyl/status/2103086316137447745) · [Xem gốc + remake trên Skillry](https://skillry.dev/ai-videos/opus-5-5/truenyl-447745)

## Prompt

> Tác giả chỉ đăng video, không công bố prompt — đoạn dưới là nội dung bài đăng gốc.

```text
Claude Opus 5.5 is absurdly good at 3D.

I reran one of my recent 3D experiments with Claude Opus 5.5.

Same prompt, same references, same real-world scene I had previously built with GPT-6 Astra.

The result was much better than I expected.

Put simply, for this specific use case, Claude Opus 5.5 was a clear win for me.

The biggest differences for me were instruction following and taste.

With the same references, Opus 5.5 got much closer to the Zelda Breath of the Wild-style look I was aiming for.

The layout felt more intentional.

It picked better camera angles.

Asset placement made more sense.

And I spent much less time fixing basic mistakes.

In my Astra version, I had to repeatedly correct things like tree roots not touching the ground, rough geometry being used where proper assets already existed, or objects being placed in ways that just looked wrong.

Opus 5.5 got much more of this right on its own.

The interesting part for me is that I have almost zero real 3D skills.

I mostly give references, look at the result, explain what feels wrong, and keep iterating.

With better instruction following and visual judgment, that loop becomes dramatically easier.

Still plenty to improve, especially indoors.

Next test is whether I can recreate the interior of the house with the same level of quality.
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-236** — mình dựng kênh cùng kiểu hình
(*3d & webgl* — hợp kênh ambient / visual 3D, nền nhạc lo-fi, cảnh đẹp) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-235](myonisto-923578.md) · [Tất cả video](../index.md) · [OP-237 →](builtbysketch-114092.md)
