---
title: "OP-456 · Lyric MV 3D Engine Workflow"
description: "Create a 50-second vertical music video using programmatic rendering (Three.js) instead of native video AI. 1. Generate song with Suno. Extract lyrics"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Lyric MV 3D Engine Workflow

<p class="sc-code-line"><span class="sc-code">OP-456</span> <span class="chip">3D &amp; WebGL</span></p>

<div class="sc-media-row"><figure class="sc-media"><a href="https://x.com/okazaky/status/2107826563786084783"><img src="https://media.skillry.dev/opus-5-5/_prompts/okazaky-084783/poster.a5adec824d.webp" alt="Lyric MV 3D Engine Workflow" loading="lazy"></a><figcaption>Ảnh poster · bấm để xem video gốc trên X</figcaption></figure></div>

Tác giả: [@okazaky](https://x.com/okazaky) · [Video gốc trên X](https://x.com/okazaky/status/2107826563786084783)

## Prompt

```text
Create a 50-second vertical music video using programmatic rendering (Three.js) instead of native video AI.
1. Generate song with Suno. Extract lyrics from embedded metadata.
2. Separate stems with Demucs (vocals, drums, bass, other).
3. Transcribe vocals with mlx_whisper. Align with official lyrics to create script where '1 lyric line = 1 scene'.
4. Write storyboard: define 'What to show in 3D', 'Camera', 'Main word' for each lyric line.
5. Have 4 parallel Opus sub-agents write scene programs.
6. Export 16-frame contact sheet for visual verification.
7. Render headless Chrome at 1080x1920, 60fps.
8. Normalize volume to -14 LUFS.
Style: Engraving-like lines, colors limited to Black, Bone, Orange.
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-456** — mình dựng kênh cùng kiểu hình
(*3d & webgl* — hợp kênh ambient / visual 3D, nền nhạc lo-fi, cảnh đẹp) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-455](eleanorina-653042.md) · [Tất cả video](../index.md) · [OP-457 →](twoclipping-041659.md)
