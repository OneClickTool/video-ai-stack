---
title: "OP-167 · Token Bucket Rate Limiter Explained"
description: "explain a token bucket rate limiter, canvas only, no libraries, every frame a pure function of time so my renderer can screenshot it."
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Token Bucket Rate Limiter Explained

<p class="sc-code-line"><span class="sc-code">OP-167</span> <span class="chip">Explainer</span> <span class="chip chip--ghost">Canvas</span> <span class="chip chip--ghost">Vật lý</span></p>

<div class="sc-media-row"><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/parkerrex-701462/original-card.1e3d6a058e.mp4" poster="https://media.skillry.dev/opus-5-5/parkerrex-701462/original.9740e7ff3b.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản gốc của tác giả</figcaption></figure><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/parkerrex-701462/remake-card.f2272ac69e.mp4" poster="https://media.skillry.dev/opus-5-5/parkerrex-701462/remake.663e46fdf7.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản dựng lại trên Skillry (cùng prompt)</figcaption></figure></div>

Tác giả: [@ParkerRex](https://x.com/ParkerRex) · [Video gốc trên X](https://x.com/ParkerRex/status/2103206747846701462) · [Xem gốc + remake trên Skillry](https://skillry.dev/ai-videos/opus-5-5/parkerrex-701462)

## Prompt

```text
explain a token bucket rate limiter, canvas only, no libraries, every frame a pure function of time so my renderer can screenshot it.
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-167** — mình dựng kênh cùng kiểu hình
(*explainer* — hợp kênh giải thích: khoa học, công thức, số liệu, how-it-works) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-166](0xevinho-436195.md) · [Tất cả video](../index.md) · [OP-168 →](justincooperman-188876.md)
