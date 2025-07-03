---
layout: article
title: "BoxLang Debugger: Lessons Learned and Version 2"
date: 2025-06-28
description: "Lessons I learned writing the first version of the BoxLang Debugger and how that contributed to my deciscion to rewrite it."
categories: programming,boxlang
tags: draft
---

## First Attempt
Initial project was very explorartory

- research jdwp
- research jdi
- learn about instrumentation
- spent a lot of time getting no output and not sure what to do

Architecture fails

- very sloppy
- every feature felt like a band-aid
- Spent a lot of time on a test suite that ultimately got turned off
- never made it out of BoxLang core

## Lessons Learned

Brad Wood was joking to me one day while working together and said something along the lines of 

> When you work on something you have never done before, you always build two projects. 
>
> Either, you will build a prototype, learn from it, and then build your final product based off of what you learned.
>
> Or you will build your product first, you will learn a lot of things you want to do differently, and then you will have to rebuild it.

We weren't talking about the BoxLang debugger at that point but I immediately realized that Brad's wisdom had perfectly explained my struggle with the debugger. I then knew that the next step was to treat my original implementation as a prototype and start implementing "version 1.0".

## The Rewrite

- using ai
    - insctruction.md
    - prompts.md
- starting with using lsp4j instead of writing my own
- tests first!