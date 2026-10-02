---
layout: article
title: "Pi Bash Alias"
date: 2026-10-01
description: "Create an alias for Pi to easily execute one-off agent commands from the CLI"
tags: article
---

Like many other software developers I've been using coding agents extensively. My current favorite (by a long shot) is Pi. In all of the agents I've used (as well as other similar apps) they give developers the ability to drop into running a shell command by prefixing it with an exclamation point. It usually looks something like `!code ./`. That command would open VSCode in the current directory.

I really like that feature and use it pretty frequently. It gives you the power of the terminal in your agent harness. This got me thinking, I have access to my shell from within my agent harness, what about having access to my agent from my shell?

This may sound odd, because of course I run `pi` from my shell all the time. That's how I open it! But what I mean is I kept finding myself do something like

- Working in the CLI
- Need to run a command that I can't remember
- Go to agent/web UI
- Describe problem
- Copy/paste to editor
- Modify for my use case
- Execute in shell

I was becoming a dreaded meat-proxy. So I had an idea. What if I made a reverse version of the `!` command in so many agent harnesses.

Check it out! I've aliased the command with `@`.

<figure class="article-figure">
  <video src="/images/pi-at-demo.mp4" alt="Demo of Pi with @ alias" muted autoplay loop controls style="width:80%;">
</figure>

The part I'm really excited about is that I made `cerebras/qwen-3.8-27b` the default model. That model runs at over 1k tok/sec. It is blazing fast. In my testing it was an order of magnitude faster than models from OpenAI. This made it feel really snappy on the CLI.

This is what the configuration in your `~/.bashrc` looks like.

```bash
# alias pi with at
# source this from Bash after putting pi on PATH
_PICLI="$(command -v pi 2>/dev/null || true)"
if [ -z "$_PICLI" ]; then
    _PICLI="$(CDPATH= cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)/pi"
fi

function @ {
	local f st
	local -a statuses
	f=$(mktemp) || return

	PI_EMIT="$f" "$_PICLI" \
		--no-extensions --no-skills --offline --no-session \
		--model "cerebras/qwen-3.8-27b" \
		--mode json "$*" |
		jq --unbuffered -j '
			select(.type == "message_update"
				and .assistantMessageEvent.type == "text_delta")
			| .assistantMessageEvent.delta
		'
	statuses=("${PIPESTATUS[@]}")
	printf '\n'

	st=${statuses[0]}
	if [ "$st" -eq 0 ]; then
		st=${statuses[1]}
	fi

	if [ "$st" -eq 0 ] && [ -s "$f" ]; then
		# shellcheck disable=SC1090
		. "$f"
		st=$?
	fi
	rm -f "$f"
	return "$st"
}
```

So far I've used it for several tasks

- converting images/videos easily
- natural langauge bash commands
- quick questions that I just need an answer for without conversation

I'm interested in trying out some tuned skills to make it more effective in the future. I could see coming up with a set of skills, maybe just make them global skills, that I frequently use regardless of project and can easily access them.