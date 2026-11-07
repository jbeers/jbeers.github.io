---
name: site-editorial-illustration
description: Create or revise hero artwork, article images, and project illustrations for Jacob Beers's site in its approved bold editorial aesthetic. Use for warm ivory, ink, vermilion, scientific print texture, orbital graphics, and consistent site image prompts; use site-editorial-diagram when relationships or technical flows are the main message.
---

# Site editorial illustration

Read [the shared image direction](../../../design/editorial-images.md) completely and inspect the relevant approved reference images before writing a brief. Resolve all relative paths from this skill directory.

## Choose the image's job

- **Hero / identity:** a bold, memorable scientific or geometric composition. The desktop orbital graphic is a visual signature, not a literal architecture diagram. On mobile give it a visible area of its own, not a tiny corner badge.
- **Article:** make the subject recognizable. A network article, audio plugin, and lunar-science article should not all get interchangeable planets. Borrow the same linework, grain, and palette, not the same drawing.
- **Project:** show what the work enables. If a relationship or flow is necessary to understand it, use [site-editorial-diagram](../site-editorial-diagram/SKILL.md) instead.
- **Real evidence:** use actual approved photos/screenshots when they are needed. Never fabricate a client interface, conference photo, portrait, endorsement, or result.

Prefer a focused standalone illustration over a complete page screenshot. Keep layout and live text outside the image. Use ivory-compatible backgrounds for paper integration; ask the native image tool for true transparency when required and verify alpha rather than assuming it from a checkerboard.

## Brief scaffold

Fill the placeholders; keep the brief limited to the requested deliverables. Execute only through the shared guide's generation workflow.

```text
Use case: stylized-concept
Asset type: [hero / article artwork / project illustration]
Primary request: [one subject and the idea it should communicate]
Reference images: [paths; style reference or edit target, with invariants]
Style: editorial scientific print illustration; fine ink linework,
       selective stippling, restrained grain, strong silhouette
Palette: warm ivory #F6F3EB, ink #18211E, vermilion #CF472A
Composition: [aspect ratio, intended display size, visual focus,
              negative space and mobile crop-safe region]
Background: [ivory-compatible / genuinely transparent]
Text: none; site copy will be live HTML
Constraints: [preserve specified features; no invented claims or logos]
Avoid: stock SaaS art, glossy 3D, neon, teal grid, heavy shadows,
       fake screenshots, repeated orbital decoration without purpose
Authorized count and output: [count, new filenames, destination]
```

For an edit, explicitly state what changes and what stays. Reuse the approved art as a style reference rather than asking for an unrelated reimagining.

## Acceptance

Apply the shared review/handoff checklist. Also ask:

- Does the subject remain identifiable at the intended mobile size?
- Does this feel like the same publication as the approved editorial images?
- Is texture supporting the subject rather than muddying it?
- Is there useful variety across the site's images without a new art style per image?
- Can the artwork sit beside HTML headings without competing with them?

Reject a tiny hero badge when a visible hero was requested, illegible image text, or a visually attractive result that communicates the wrong subject. Report shortcomings and request permission before extra generations.

Example invocation after reloading skills:
`/skill:site-editorial-illustration Draft a prompt for one mobile-safe orbital hero; do not generate yet.`
