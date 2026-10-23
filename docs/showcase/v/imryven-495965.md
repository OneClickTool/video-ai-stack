---
title: "OP-529 · Claude Code Multi-Agent Setup"
description: "Rebuild my Claude Code setup around this tree: 1. Look in ~/.claude/agents and .claude/agents for subagents that already cover explorer, worker and re"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Claude Code Multi-Agent Setup

<p class="sc-code-line"><span class="sc-code">OP-529</span> <span class="chip">Motion graphic</span></p>

<div class="sc-media-row"><figure class="sc-media"><a href="https://x.com/imryven/status/2105719735438495965"><img src="https://media.skillry.dev/opus-5-5/_prompts/imryven-495965/poster.4b4e7c2ce0.webp" alt="Claude Code Multi-Agent Setup" loading="lazy"></a><figcaption>Ảnh poster · bấm để xem video gốc trên X</figcaption></figure></div>

Tác giả: [@imryven](https://x.com/imryven) · [Video gốc trên X](https://x.com/imryven/status/2105719735438495965)

## Prompt

```text
Rebuild my Claude Code setup around this tree:

1. Look in ~/.claude/agents and .claude/agents for subagents that already cover explorer, worker and researcher. Draft new ones only for roles that are missing. Set each to model: opus, effort: medium. If an existing subagent is pinned to a different model, list it, don't touch it.

2. Set the main session's effortLevel to high in ~/.claude/settings.json, and set advisorModel to fable.

3. Check for anything disabling the advisor: CLAUDE_CODE_DISABLE_ADVISOR_TOOL, DISABLE_TELEMETRY, any variable blocking feature-flag fetches, and CLAUDE_CODE_EFFORT_LEVEL, which overrides subagent effort. Report what you find. Change nothing yet.

4. Add one line to ~/.claude/CLAUDE.md: consult the advisor before a large plan, when an error repeats, and before marking a long task done.

Show every change as a diff first. Don't touch anything until I say go.
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-529** — mình dựng kênh cùng kiểu hình
(*motion graphic* — hợp kênh Shorts “đã mắt”, typography, loop thư giãn) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-528](koushikde-937635.md) · [Tất cả video](../index.md) · [OP-530 →](renmu2017-477264.md)
