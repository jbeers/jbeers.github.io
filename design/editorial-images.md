# Editorial images for Jacob Beers's site

Shared direction for the project-local [illustration skill](../.agents/skills/site-editorial-illustration/SKILL.md) and [diagram skill](../.agents/skills/site-editorial-diagram/SKILL.md). This records approved design decisions, not permission to generate images.

## Visual contract

Read [STYLE.md](../STYLE.md) completely for the canonical palette, typography, imagery, hierarchy, mobile, and accessibility principles. This guide adds image-production workflow, not a competing aesthetic.

For artwork: warm ivory `#F6F3EB`, near-black ink `#18211E`, restrained vermilion `#CF472A`; fine scientific-print linework and selective grain. Decorative art evokes an idea; explanatory art must communicate relationships. Let meaning lead, vary imagery by subject, and keep texture away from readable page text.

## Approved references

Paths below are relative to this file. Read the relevant image, not just its filename:

| Reference | What to take from it |
| --- | --- |
| [Desktop home](mockups/bold-editorial/home.png) | Overall palette, scientific print character, orbital hero |
| [About v2](mockups/bold-editorial/about-v2.png) | Approved observatories → warehouse, runtime targets, debugger illustration |
| [Talks v2](mockups/bold-editorial/talks-v2.png) | Editorial consistency; layout reference, not an image asset |
| [Articles index](mockups/bold-editorial/articles.png) | Different image treatments for different subjects |
| [Mobile home v2](mockups/bold-editorial/home-mobile-v2.png) | A genuinely visible mobile hero, not a tiny corner decoration |
| [Mobile article v2](mockups/bold-editorial/article-mobile-v2.png) | Reading and conceptual workflow direction |

These are design proposals containing draft copy and conceptual diagrams. Their embedded text, typography scale, exact architecture, and dimensions are not production specifications. Mobile pages still need more vertical space than the images show. Do not crop an entire screenshot into a production illustration or scale a mockup into a website.

## Before generating

1. Identify the role: decorative hero, article artwork, project illustration, or explanatory diagram. Read the actual surrounding content. Reuse a suitable existing asset before generating a replacement.
2. State the one idea the image should convey. Record the exact asset count, filenames, destination, desktop/mobile use, intended display size/aspect ratio, crop-safe area, background treatment, and reference roles. Ask only for missing essentials. No unrequested variants or automatic retries.
3. Choose a composition that can survive the intended narrow viewport. Give a mobile hero visible presence without obscuring the introduction or links. Do not solve a tall-page layout problem by shrinking images or text into a fixed screenshot.
4. Separate **reference images** (style), **edit targets** (preserve specified features), and **factual inputs** (approved subject/relationships). A mockup does not establish technical facts.
5. Use the installed `codex-imagegen` skill for subscription-backed raster generation from Pi. Read and follow it, including its current CLI checks and private scratch-workspace requirements. When running in Codex with its native image tool, use that directly; never launch a second agent recursively.
6. If that workflow/tool/authentication is unavailable, report the blocker. Do not switch to an image API, ask for an API key, change account settings, or substitute a code-rendered placeholder for requested artwork. This project guide adds art direction; it does not override tool safety or spending limits.

## Review and handoff

- Inspect every actual raster output with the image-capable read tool. Verify format, dimensions, file integrity, and absence of symlinks before accepting/copying files. A worker's claimed save path is not proof.
- Compare to the approved reference at desktop size and approximately 390px viewport width. Does the main subject or flow still read? If labels are too small or cropped, do not call the asset ready.
- Check background seams, excessive grain, unintended colors, stray lettering, malformed objects, arrow direction, and unsupported claims. Exact labels require proofreading.
- If the generator ignores dimensions, transparency, spacing, or diagram semantics, disclose the mismatch. Do not silently approve, generate extra images, or distort the result to hide it.
- Save non-destructive, descriptive filenames such as `matchbox-runtime-v2.png`. Mockups stay in `design/mockups/`; implementation-ready artwork belongs in `images/` only when that handoff is requested. Never overwrite existing assets without approval.
- Preserve the final prompt next to the asset as `<stem>.prompt.txt`, including reference paths/roles, intended use/size, exact labels or approved flow, and review caveats. Keep credentials, private logs, internal hostnames, and NDA content out of the repository.
- Report the final asset/prompt paths, native generation source, what was checked, and remaining limitations. Generation does not authorize publication or edits to templates.

## Accessibility at integration time

Keep site headlines, copy, navigation, and important labels as HTML, not generated lettering. Decorative images get empty alt text. Informative images get concise purpose-oriented alt text; diagrams also need a nearby textual explanation of the relationships. Preserve captions and a full-size link for diagrams with fine detail. Specify intrinsic image dimensions and responsive sizing without stretching or hiding essential content in a crop. Validate actual readability, contrast, overflow, and layout in the browser; a raster mockup is not accessibility evidence.
