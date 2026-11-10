# Agent guidance

## Design authority

Read [STYLE.md](STYLE.md) before changing site layout, typography, color, imagery, or presentation. It is the canonical aesthetic guide. The approved direction is **bold editorial**: warm ivory, ink, vermilion, bold serif headlines, clean sans-serif body, thin rules, scientific print imagery, and generous whitespace.

Use approved About/Talks v2 and mobile v2 references linked there. Borrow field-notes explanatory clarity and aligned talk metadata—not its overall theme. Mockups are references, not production assets or pixel-perfect specifications.

- Preserve a clear hierarchy and descriptive links. Avoid generic SaaS cards, résumé walls, and competing calls to action.
- Keep client work visible alongside language/runtime work. Prioritize speaking, then employment, then consulting.
- Let mobile pages grow vertically. Never shrink text or remove breathing room to match a raster's height.
- Preserve accessibility, existing routes/content, useful tools/experiments, and theme behavior unless the requested change explicitly alters them.
- Do not begin redesign implementation or generate images merely because these instructions exist; stay within the current request.

## Article preparation

Use [site-article-publishing](.agents/skills/site-article-publishing/SKILL.md) when Jacob pastes an article, supplies an Obsidian draft, or asks to prepare writing for release. Preserve his voice and intellectual content. Apply only unambiguous minor copyedits automatically; discuss structural, substantive, or meaning-changing edits and get approval before applying them. Give critical feedback separately from the draft.

Propose 3–5 written image concepts before generation, then generate only the explicitly approved concepts/count and incorporate reviewed outputs at approved locations using the image skills below. Preparing an article does not authorize image generation or publication. Use the normal working tree and `npm run dev` for article review by default; leave pending article and asset changes uncommitted until release approval. Local preview is not publication. Use an isolated workspace only when requested or needed for confidential material. The existing `drafts/` directory and future publication dates do not prevent a page from being built, so do not treat them as release gates. Review staged files and get explicit authorization before committing, pushing, or deploying a release.

## Image skills

Project-local skills live in `.agents/skills/`:

- [site-editorial-illustration](.agents/skills/site-editorial-illustration/SKILL.md): hero artwork, article images, and expressive project illustrations.
- [site-editorial-diagram](.agents/skills/site-editorial-diagram/SKILL.md): informative relationships, technical workflows, and project diagrams.
- [site-x-promo-image](.agents/skills/site-x-promo-image/SKILL.md): exact 5:2 X promo/header images, with three proposed treatments (visual narrative, abstract editorial, technical clarity), optional approved hooks, and feed-size review. This is a separate generation request from inline article images; the full comparison set is three candidates total, not three per treatment. No posting to X is implied.

Read the relevant skill and its [shared image guide](design/editorial-images.md) before producing images. They complement the installed `codex-imagegen` execution skill; they do not replace its subscription-backed native-tool workflow or safety constraints. Confirm requested asset counts and avoid unrequested alternatives/retries. Stop and report missing generation capability rather than switching to a billed API.

Keep new versions non-destructive, preserve prompts and reference roles, inspect actual outputs, and disclose mismatches. Do not treat conceptual art as factual architecture or invent endorsements, client results, portraits, screenshots, or resource links. Public client wording must not imply NASA directly hired or endorsed Jacob.

## Project and verification

This is an Eleventy site using Nunjucks/HTML templates, Markdown content, and shared CSS. Reuse existing patterns and dependencies; avoid new frameworks or packages for the redesign.

Keep production images in `images/` when integration is requested. Design studies, briefs, and review artifacts belong in `design/`; agent instructions are not site content. Do not copy internal instructions, private logs, or credentials into published assets.

For implementation changes, run an Eleventy build (`npx @11ty/eleventy`) and check relevant rendered pages at desktop and phone widths. Verify real navigation/resource destinations, keyboard focus, image alternatives, readable type, overflow, and theme behavior. Run `npm test` for rendered-page, article-content, and theme regression checks. Browser checks are still required for visual and interactive changes; passing build-level tests alone does not validate layout or accessibility.

For documentation/skill-only changes, validate skill discovery/frontmatter and referenced paths; no image generation is needed. Report checks actually performed and anything not validated.
