---
title: "OP-527 · Demoscene Fractal Tech Demo"
description: "Make a 37-second demoscene tech demo for the track ~/Downloads/(filename).mp3. The goal is graphics nobody has seen before. Like it's a statement for "
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Demoscene Fractal Tech Demo

<p class="sc-code-line"><span class="sc-code">OP-527</span> <span class="chip">3D &amp; WebGL</span></p>

<div class="sc-media-row"><figure class="sc-media"><a href="https://x.com/Xanares/status/2105770390924738984"><img src="https://media.skillry.dev/opus-5-5/_prompts/xanares-738984/poster.fb819706a8.webp" alt="Demoscene Fractal Tech Demo" loading="lazy"></a><figcaption>Ảnh poster · bấm để xem video gốc trên X</figcaption></figure></div>

Tác giả: [@Xanares](https://x.com/Xanares) · [Video gốc trên X](https://x.com/Xanares/status/2105770390924738984)

## Prompt

```text
Make a 37-second demoscene tech demo for the track ~/Downloads/(filename).mp3.
The goal is graphics nobody has seen before. Like it's a statement for a new AI demoscene.

Story, in one continuous shot with no cuts:
- A chrome sphere floats in dark fog. On each hit in the track, it gains one Mandelbox fractal level.
- In the drop, the object grows until its top face is a landscape. Fly low over it at sunset, then dive off its edge.
- At the end, the fractal collapses into 3D gold letters of the title. Carve the letters from the same fractal and light them with the same light.

Look: path-traced quality. Soft shadows, ambient occlusion, glossy reflections, fog with light shafts, depth of field, motion blur, bloom.

Sync: analyse the track first. Save a JSON beat map with hits, breaks, and kick, snare and hat onsets. Kicks pulse the light. Hats add surface detail.

Tech:
- One WebGL2 fragment-shader raymarcher. One HTML page is both the live player and the render source.
- Live: 60 fps in Chrome.
- Offline: 1920x1080 at 60 fps with 16 samples per pixel. Render it in headless Chrome on the Mac GPU, pipe the PNG frames to ffmpeg, and use the MP3 as the audio.
- Do not use AI image or video generators.
- Check contact sheets of stills before the full render.
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-527** — mình dựng kênh cùng kiểu hình
(*3d & webgl* — hợp kênh ambient / visual 3D, nền nhạc lo-fi, cảnh đẹp) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-526](oab10don-457273.md) · [Tất cả video](../index.md) · [OP-528 →](koushikde-937635.md)
