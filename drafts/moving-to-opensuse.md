---
layout: article
title: "Moving to openSUSE"
date: 2026-03-25
description: "An overview of my experience moving from Windows to openSUSE"
categories: software
tags: draft
---

Wanted to share a cool thing I did over the weekend so you can all nerd out with me.

Decided I was ready to move of Windows and wanted to move to openSUSE Tumbleweed. So far the move has been great! I had been using WSL and was doing more and more of my work in linux. I was running into really annoying issues because Windows was managing the virtual disk poorly and I was completely out of drive space. Additionally, I was having to maintain multiple developement setups between Windows and WSL.

In order to make the switch I needed to back up my disk. I had a huge amount of stuff to save so I looked in to getting a NAS. I ended up getting a UGREEN NAS and 2 2TB drives in RAID 1. The setup was incredibly easy. Once that was done I set up Kapio and backed everything up from both Windows and WSL. Kapio is amazing. It creates a database of all your files and deduplicates them based on their bytes.

Switched over to openSUSE. Only had a minor hitch where the default EFI bootloader partition was too small (260mb). Once I resized it to 1GB everything was good.

I've been researching openSUSE for a while and was really interested in setting up a new dev environment and leverage more opensource tooling and do more in the terminal. So now I have setup

* nvim - lots of cool plugins, all config is stored in a git repo I can pull down and auto install
* lazydocker - opensource terminal based docker desktop alternative
* lazygit - opensource terminal git GUI
* tmux + tmuxinator
* opencode/claude-code

I had never used tmux/nvim until recently and I can see why so many rave about it. I still do most work in VSCode but I'm slowly making the switch.
