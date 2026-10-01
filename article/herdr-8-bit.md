---
layout: article
title: "Herdr 8 Bit Audio Plugin"
date: 2026-09-30
description: "Introducing a plugin for Herdr that adds Gauntlet like announcements to Herdr"
tags: article
---

I started using [Herdr](https://herdr.dev/) this past week and I love it. It immediately solved several problems that I had.

- Not knowing when my agents were finished
- Navigating to them easily
- Remembering shortcuts

It looks a lot nicer than my tmux setup too!

The biggest thing for me was the audible notification that one of the agents had finished. I would frequently go to check on an agent and realize it had been done for quite some time. Now that I get a little "ping" I can immediately see that something needs to be attended to.

<!-- TODO insert image of herdr -->

It was then that I was struck by inspiration... what if my audible notification could be [Gauntlet](https://en.wikipedia.org/wiki/Gauntlet_(1985_video_game)) themed? Gauntlet, as in the classic arcard game about adventure, treasure, and monsters. I LOVED that game growing up and was always excited to see that an arcade had a cabinet for it. There is an iconic voice line known to gamers throughout the world, "Wizard needs food badly!". Anytime the player character would get low on health the narrator would say a line like that using their selected character. 

<figure class="article-figure">
  <img src="/images/gauntlet.png" alt="NES artwork for Gauntlet">
  <figcaption>Source: <a href="https://en.wikipedia.org/wiki/Gauntlet_(1985_video_game)">Wikipedia</a></figcaption>
</figure>

Anyway, I took some time to make [my first herdr plugin](https://github.com/jbeers/herdr-8-bit-announcer). It uses a local AI model to generate voice lines for your agent and the workspace. If, like me, you use the [Pi coding agent](https://pi.dev/) it will generate something like "Pi agent in My Github Site needs food badly!". Immediately you know which agent and which workspace to look in! It even puts it through a crunchy 8-bit filter to give it that retro arcade feel. This can be disabled through the settings if it feels like too much.

Give it a shot, I hope you like it. I will try to put it in the herdr marketplace later this week.

[https://github.com/jbeers/herdr-8-bit-announcer](https://github.com/jbeers/herdr-8-bit-announcer)