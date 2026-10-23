---
title: "OP-387 · Cardilife 1.3 Intro Video"
description: "Cardilife 1.3 をリリースしました。 あわせて紹介動画を作りました（56秒）。 動画は Claude Code（Opus 5.5 と Fable 5.1）と作りました。編集ソフトは使っていません。 技術構成 ・Remotion 4（React 19 / TypeScript）：全体。19"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Cardilife 1.3 Intro Video

<p class="sc-code-line"><span class="sc-code">OP-387</span> <span class="chip">Motion graphic</span> <span class="chip chip--ghost">Three.js</span> <span class="chip chip--ghost">SVG</span></p>

<div class="sc-media-row"><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/dengent-412996/original-card.7ab02144de.mp4" poster="https://media.skillry.dev/opus-5-5/dengent-412996/original.9c6528d015.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản gốc của tác giả</figcaption></figure><figure class="sc-media"><video src="https://media.skillry.dev/opus-5-5/dengent-412996/remake-card.91d38c2238.mp4" poster="https://media.skillry.dev/opus-5-5/dengent-412996/remake.703cc7c979.webp" controls muted loop playsinline preload="none"></video><figcaption>Bản dựng lại trên Skillry (cùng prompt)</figcaption></figure></div>

Tác giả: [@DengenT](https://x.com/DengenT) · [Video gốc trên X](https://x.com/DengenT/status/2107425308773412996) · [Xem gốc + remake trên Skillry](https://skillry.dev/ai-videos/opus-5-5/dengent-412996)

## Prompt

> Tác giả chỉ đăng video, không công bố prompt — đoạn dưới là nội dung bài đăng gốc.

```text
Cardilife 1.3 をリリースしました。
あわせて紹介動画を作りました（56秒）。

動画は Claude Code（Opus 5.5 と Fable 5.1）と作りました。編集ソフトは使っていません。

技術構成
・Remotion 4（React 19 / TypeScript）：全体。1920×1080・30fps
・three.js（React Three Fiber / @remotion/three）：冒頭の 3D
・Python（標準ライブラリのみ）：音楽の合成

日本語版と英語版は、同じコードから props で切り替えて書き出しています。

https://apps.apple.com/jp/app/cardilife/id6802896176

#ClaudeCode #Remotion #threejs
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-387** — mình dựng kênh cùng kiểu hình
(*motion graphic* — hợp kênh Shorts “đã mắt”, typography, loop thư giãn) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-386](envoldev-017555.md) · [Tất cả video](../index.md) · [OP-388 →](apoorvjain25-150112.md)
