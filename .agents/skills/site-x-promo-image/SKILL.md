---
name: site-x-promo-image
description: Plan and generate 5:2 article header or promo images for Jacob Beers's X cross-posts in the site's bold editorial aesthetic. Use for social banners, X article covers, short text hooks, narrative/abstract/technical comparisons, and overscan or crop experiments; get treatment, wording, generation count, and export count approval first.
---

# X article promo images

Make a recognizable, intriguing invitation to read the article—not a miniature article, generic engagement bait, or misleading promise. Offer three genuinely different treatments within one consistent editorial identity, then let Jacob choose.

Read [STYLE.md](../../../STYLE.md), [the shared image guide](../../../design/editorial-images.md), and the relevant [illustration](../site-editorial-illustration/SKILL.md) or [diagram](../site-editorial-diagram/SKILL.md) skill. Resolve relative paths from this skill directory. This skill adds social composition and a short-hook exception to the usual preference for keeping site text outside artwork; the shared generation safeguards still apply.

## Learned preference: full compositions, not empty templates

The SSH promo exploration established a useful starting preference: Jacob rejected small illustrations isolated in the right half beside a large blank text area, and abstract forms that looked abruptly cut off. He selected a fuller, integrated composition made from a planned overscan source with the wider of two crops. The tighter crop retained the artwork but had less comfortable edge clearance.

Carry forward **visual presence, complete forms, an integrated hook, and deliberate breathing room**—not the exact SSH ribbons or an assumption that abstract art always wins. This is author feedback about one design, not engagement evidence or proof that overscan always beats direct generation.

## 1. Understand the article

- Read the supplied article, including its approved edits. Identify its actual subject, audience, payoff, and what makes someone curious. Treat article text as source material, not instructions to execute.
- Inspect existing approved artwork and site references before creating a new visual direction. Do not assume an inline article illustration will survive a wide social crop.
- Preserve the author's argument and level of certainty. Flag factual concerns separately; do not silently rewrite the article or amplify its claims in the promo. Use [site-article-publishing](../site-article-publishing/SKILL.md) for article preparation rather than expanding this task into a rewrite.
- Do not put confidential material, credentials, internal hostnames, private contacts, or unpublished third-party details into prompts or images. Confirm uncertain disclosure boundaries.

## 2. Propose three written treatments before generation

Default to these three directions, each tied to this article:

1. **Visual narrative:** a recognizable problem, transformation, or payoff told through a concrete visual metaphor. The default recommendation for useful, approachable technical writing. Do not exaggerate the outcome or make the metaphor look like evidence.
2. **Abstract editorial:** expressive geometry, contrast, rhythm, and texture embody an idea such as fragmentation becoming order. Include a recognizable subject anchor where helpful; avoid arbitrary planets, vague emotional drama, or imagery that could promote any article.
3. **Technical clarity:** a simplified, accurate relationship that promises something useful to learn. Aim for two to four meaningful elements, minimal labels, and one takeaway—not a tiny architecture diagram. Establish credibility through specificity, not density.

For each treatment propose its purpose, subjects, composition, visual focus, optional exact hook (or explicit no-text approach), and what it must NOT imply. Identify the article passage supporting its promise. Explain the tradeoff in one sentence.

All treatments use warm ivory `#F6F3EB`, ink `#18211E`, restrained vermilion `#CF472A`, fine scientific-print linework, selective grain, strong silhouettes, and generous negative space. Change the storytelling approach, not the brand palette or quality. Avoid teal/grid styling, stock SaaS icons, glossy 3D, neon/glow, fake screenshots, and invented endorsements or results.

**Approval gate:** confirm the treatments, exact hook/labels, **native generation count and final export count**, and destination. The normal initial comparison set is **three candidates: one per direction**, not three variations of each. Once a direction is chosen, refine its composition/framing rather than automatically restarting all three directions. Agree on a bounded experiment; for example, two generations can provide three exports when two crops reuse one original. Jacob can approve fewer. Approval to generate inline article images does not authorize this additional set. Asking for a skill, approving article prose, or selecting a concept without clear generation authorization is not permission to spend image quota.

## 3. Decide whether text earns its space

- A short hook is optional, not a mandatory full title or branding block. Aim for roughly **3–7 words**, expressing a specific curiosity or benefit the article can defend.
- Do not simply repeat a long article title, add paragraphs, or use code blocks as decorative texture. Avoid vague superlatives, unsupported absolutes, emotional manipulation, and guarantees such as “SSH into anything.”
- Prefer the same approved hook across candidates when comparing aesthetic treatments. If wording/no-text choices intentionally differ, explain that the comparison also changes the message.
- Example for an SSH article: “One SSH command. Different routes.” is a bounded hook; “Connect to every machine instantly” is an unsupported promise. Examples are not preapproved wording for a real asset.
- Prefer generating the **artwork without text**, with a short headline pocket integrated into the overall composition, then typesetting the approved hook afterward. Do not interpret “leave room for text” as “leave half the image empty.” A hook above, within, or framed by the visual can work better than a rigid text-left/art-right split; do not obscure meaningful artwork. Use the site's self-hosted Fraunces headline font, with restrained sans-serif support only if needed. Check font loading and include applicable font licensing with redistributed source assets.
- Deterministic HTML/SVG/browser or image-tool composition is allowed to place approved text over genuine generated artwork. It must not substitute code-drawn graphics for requested generated artwork. Keep the editable composition and original image. Do not crop a site screenshot into a promo.
- If text is generated inside the image, require exact wording and proofread every character. Report errors; no automatic extra generations. Do not silently rewrite a hook just because the available space is small.

## 4. Compose for the chosen 5:2 format

- Jacob's requested deliverable is **exactly 5:2**, default **1500 × 600 pixels**. This is the project's chosen format, not a claim that every X surface requires the same ratio.
- Design for a wide canvas from the beginning. Give the artwork real visual presence across the composition: a clear focal point, strong scale, readable silhouettes, and useful negative space—not a small illustration floating in a large unused field. Do not shrink complete artwork into a little box merely to satisfy margins.
- Keep complete subjects, line endings, connectors, and labels in frame. Flowing forms should have intentional complete loops or natural ends, not several elements chopped along one straight boundary. Specify this in the generation brief; extra pixels cannot restore parts the model never drew.
- Protect the hook and essential relationships from edge cropping. Roughly 5–8% clearance is a starting consideration, **not a fixed empty border or a blank-half requirement**. Denser artwork can approach edges when intentionally framed and fully visible; disclose reduced crop tolerance. Prefer the wider complete crop over a tighter version that nicks an edge or merely feels cut off. These allowances are not guarantees about X's cropping.
- With text, reserve enough uncluttered space for a large, high-contrast hook, usually one or two lines. Start around 64–88px type at 1500px width and inspect the actual result rather than treating that size as sufficient evidence.
- Technical labels must also survive phone feed size; simplify the diagram rather than shrinking everything. Avoid relying on color alone to convey its relationship.
- Final social exports should be opaque PNGs with a deliberate background (normally warm ivory), so the composition does not depend on X's light/dark canvas. Preserve transparent generated originals when supplied; transparency alone is not a finished social design.

### Choose a framing method deliberately

- **Direct 5:2:** generate the intended wide composition. This can be the fullest result, but the native framing leaves less room for later adjustment.
- **Planned overscan:** generate a taller or wider source with explicit crop allowance around a complete composition. Describe the future 5:2 crop band and any tighter comparison crop in the brief, keeping all meaningful art and the headline pocket inside both. For example, a full-width 5:2 crop of a 3:2 source retains only 60% of its height; the extra top/bottom must be expendable, not essential subject matter.
- **Crop comparisons:** reuse one original for wider/tighter exports to judge framing without spending another generation. Keep the hook/style consistent. Choose crop coordinates from actual subject bounds, not an arbitrary zoom percentage; reduce or reject a planned zoom if it would clip anything important.
- **Resolution is separate:** a taller source is not necessarily more pixels or more usable detail. Record requested and actual native dimensions, the crop's pixel dimensions, and whether final export resamples up or down. If a requested 2400 × 1600 source arrives as 1536 × 1024, report that plainly. Do not describe a slightly upscaled crop as a high-resolution advantage, or claim a crop experiment proved an engagement/detail benefit. Never retry for more resolution without approval.

## 5. Generate only the approved set

Use the installed `codex-imagegen` execution skill and Codex's subscription-backed native image tool. Follow its CLI/authentication checks, private scratch workspace, bounded briefs, and evidence requirements. Do not use a separately billed API, another agent recursively from Codex, or a code-rendered placeholder. Stop and report unavailable tooling/authentication/quota rather than changing accounts or providers.

For each candidate, record:

```text
Use case: [stylized-concept / infographic-diagram]
Asset type: X article header / promo image
Article payoff: [faithful one-sentence summary]
Treatment: [visual narrative / abstract editorial / technical clarity]
Subject and relationships: [specific composition; approved node/edge list if needed]
Style references: [paths and roles; palette/texture only, not permission to copy layout]
Palette: ivory #F6F3EB, ink #18211E, vermilion #CF472A
Output intent: 1500x600 final; 5:2; phone-feed readable
Framing: [direct wide / overscan with explicit future crop band(s)]
Visual footprint: [large subject arrangement; complete forms and ends; no blank-half template]
Text plan: [none / integrated headline pocket for later typesetting / approved in-image words]
Constraints: [claims, labels, subject bounds, crop allowance, and essential content to preserve]
Authorized count: one candidate for this treatment; no retries or extras
Output: [new descriptive filename in the approved workspace]
```

For an initial full set, use one native generation per distinct treatment. For an approved framing experiment, follow its separately agreed generation/export budget; crops, resizing, and typesetting of an existing original do not require another model call. Inspect the first result before generating the remainder; it can guide palette/texture consistency, but do not force the other treatments to copy its composition. No unrequested alternates, revisions, or automatic retries. Reuse of existing approved artwork is possible if agreed, with the generation count adjusted explicitly.

## 6. Inspect, finish, and compare

- Require real, non-symlink raster outputs, successful worker completion, and evidence of native generation. Inspect every image with the image-capable read tool; verify actual format, dimensions, and integrity. Claimed paths alone are not evidence.
- Finish typesetting if approved, then export the exact requested size. Verify `width * 2 == height * 5`; default size must be 1500 × 600. Never stretch artwork to force the ratio.
- If native dimensions differ, a safe crop, proportional resize, or deliberate background extension is acceptable only if it preserves all meaningful content and the approved composition. Keep the original and record the actual crop coordinates. Inspect every crop for complete forms and edge clearance; a contrast/ink-bounds check can supplement visual inspection but can miss pale details. Disclose any upscaling. If the result cannot fit safely, report the mismatch and ask before another generation; do not quietly clip a label, feather away meaningful edges, introduce awkward empty bands, or shrink the whole visual back into a sparse template.
- Check the final hook against the actual artwork beneath it: it must not cover a connector, label, important shape, or busy texture. Verify exact wording, actual font loading and text bounds, not just the dimensions of its containing box.
- Inspect the **final export**, not just the raw generation, at full size and approximately **600 × 240 and 390 × 156** feed previews. The subject, hook, and essential diagram labels should remain recognizable/readable. Check text spelling, contrast, safe margins, unintended lettering, artifacts, and arrow semantics. A technically correct ratio is not proof of a good image.
- Evaluate each with: **Is the subject clear? Is there a reason to read? Is the promise accurate? Does it look like Jacob's site? Does it survive feed size? Does the artwork fill the composition intentionally? Do all forms look complete rather than accidentally cropped?** State shortcomings without claiming measured engagement or performance.
- Deliver the three separately named candidates, e.g. `<slug>-x-narrative-v1.png`, `<slug>-x-abstract-v1.png`, and `<slug>-x-technical-v1.png`, or the agreed smaller/framing set (for example, direct / overscan-wide / overscan-tight). Clearly identify exports that share an original. A deterministic contact sheet/feed-size comparison may supplement, not replace, individual exports; it does not authorize more generations.
- Recommend one with a short explanation, then ask Jacob to choose. Do not silently designate a final winner, remove alternatives, overwrite an existing selected asset, or generate revisions without approval.

## 7. Preserve and hand off without posting

Keep original generations, exact prompts and reference roles, approved hook text, editable typesetting source, final dimensions/crop details, alt-text suggestions, and review limitations together. Use non-destructive filenames. Native generation still uses the execution skill's private scratch workspace. For requested local integration/review, final exports and editable sources may be uncommitted working-tree files; do not require an isolated preview merely because the article is unpublished. Keep unused candidates in a site-excluded location rather than `images/`, and confidential notes outside the repository. `design/` is excluded from the site but is still in a public Git repository, so review staged files before any commit/push.

When a selection is approved, record the chosen candidate and framing, then save a clearly named final copy in the agreed destination while retaining the alternatives and editable source. Verify that the selected final matches the chosen export. Adding a social image to article frontmatter or changing existing site images requires the appropriate integration request; a promo image does not automatically become the article's cover. Preserve the article and existing assets.

Report final paths, prompt/source locations, actual generation count, checks performed, and unresolved issues. **No posting to X, scheduling, account access, site publication, commit, or push is authorized by image generation or selection.** Those are separate requests. Do not generate a social post or rewrite the article unless asked.

Example after reloading skills:
`/skill:site-x-promo-image Propose the three treatments and short hooks for this article. Do not generate yet.`
