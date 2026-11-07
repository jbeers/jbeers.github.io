# Site style: bold editorial

This is the canonical aesthetic direction for Jacob Beers's site. The design phase is approved; implementation has not yet been completed. Existing CSS is not the target design. Preserve existing content and functionality while applying this direction.

## The impression

**Clear, useful, interesting.** An independent technical publication authored by an engineer you would want to work with—not a résumé wall, SaaS landing page, or developer-themed playground.

Visitors should understand Jacob's expertise, encounter concrete evidence, and find an obvious next step. Priorities are **conference speaking, employment opportunities, then consulting**. Client work must remain prominent; programming-language work distinguishes Jacob but should not make him appear narrowly specialized.

Use the positioning “I build software, from runtimes to production.” as the approved design starting point, not permission to invent project results or availability.

## Visual language

| Role | Direction |
| --- | --- |
| Canvas | Warm ivory, starting at `#F6F3EB` |
| Text / linework | Near-black ink, starting at `#18211E` |
| Accent / links | Restrained vermilion, starting at `#CF472A` |
| Headlines | Bold, expressive editorial serif |
| Body | Readable, clean sans-serif |
| Metadata | Small, sparingly used monospace |
| Structure | Thin rules, generous whitespace, deliberate asymmetry |
| Artwork | Scientific/editorial print character, fine linework, selective grain |

Colors are art-direction starting values, not sampled pixel matches. Validate contrast for the implemented tokens. The implementation uses self-hosted Fraunces 700 for the bold editorial headlines and clean system sans-serif for body text, with Georgia/serif fallback. The SIL Open Font License is included in `res/fonts/`. Verify font loading/fallbacks rather than introducing a large font library.

- Make one thing dominant within each section. Avoid equal-weight card grids and competing calls to action.
- Prefer confident descriptive text links over button clutter. Links should clearly communicate their destinations; use visible underlines or another non-color cue.
- Use rules and spacing for structure, not nested cards, large radii, gradients, and hover shadows.
- Keep paper behind text visually quiet. Confine most grain and texture to illustrations.
- Personality comes from typography, images, writing, and actual work—not gimmicks or emotional marketing language.

## Imagery: character plus explanation

Decorative identity artwork can be abstract: orbital spheres, restrained geometry, ink, and vermilion. Give the home hero real visual presence, including on mobile. Do not repeat the same planet in every section.

Informative images must communicate their subject or relationships. Retain editorial treatment while borrowing the explanatory clarity of the field-notes concept:

- Multi-Messenger: multiple observatories feeding scientific data aggregation/warehousing.
- MatchBox: a Rust VM with WebAssembly and ESP32 runtime targets, not three equivalent stacked layers.
- Developer tools: recognizable editing/debugging cues.
- Articles: subject-specific images and varied treatments, not interchangeable thumbnails.

Conceptual art is not verified architecture. Use genuine approved screenshots/photography when evidence is required; never fabricate client interfaces, portraits, stage photos, endorsements, metrics, or functionality.

For production briefs, generation, image review, and handoff, read [the image guide](design/editorial-images.md) and the relevant project skill listed in AGENTS.md.

## Layout and hierarchy

- **Home:** introduction and clear talk/work links; speaking; selected engineering work with USRA visibly represented alongside MatchBox and BoxLang tooling; curated writing; contact.
- **Articles index:** one clear feature, then varied illustrations and scannable text-led listings. Do not force every post into an identical card.
- **Article detail:** comfortable reading column (roughly 60–70 characters on desktop), clear headings, code blocks, figures/captions, and related content. Body sections should not suddenly expand to full desktop width.
- **About / Work with me:** explain the breadth through concrete work, including cloud/on-prem deployments, Kubernetes, and team leadership. Make speaking, employment, and consulting contact paths obvious without a skills inventory.
- **Talks:** speaker introduction and organizer contact, featured talks, then selected appearances. Use aligned conference/year metadata and a wider title/resource column, thin rules, and generous row padding. Only show resource links that actually exist.

## Responsive behavior and accessibility

Mobile is a deliberate single-column composition, not a scaled desktop screenshot.

- Start around 17–18px body text with comfortable line height (approximately 1.6–1.7), 20–24px side gutters, and 56–72px between major sections. These are practical starting points; validate with real content.
- Leave space around headings, paragraphs, figures, code, and touch links. Let pages grow vertically. The approved mobile rasters still compress their lower sections; do not reproduce that limitation.
- Give the home hero an identifiable illustration beneath the introduction/links. It should support the identity without obscuring destinations or overwhelming speaking.
- Use visible, comfortably spaced navigation; the mockups use the name above a simple nav row. Reflow rather than clip links on narrow screens.
- Stack project artwork and text when necessary. Put article contents inline on mobile rather than in a sidebar. Reflow talk metadata above its title when columns no longer fit.
- Preserve live HTML headings, copy, and links. Do not bake page text into images.
- Maintain semantic heading order, keyboard operation, visible focus, WCAG AA contrast, zoom/reflow support, useful image alternatives, and reduced-motion preferences.
- Contain wide code/table overflow without making the entire page scroll horizontally. Give detailed diagrams an accessible explanation and full-size link.
- Dark mode has no approved mockup yet. Preserve existing theme functionality unless explicitly changed; make any implemented dark treatment readable and consistent rather than silently removing it.

## Approved references and their limits

- [Desktop home](design/mockups/bold-editorial/home.png)
- [Articles index](design/mockups/bold-editorial/articles.png)
- [Article detail](design/mockups/bold-editorial/article-detail.png)
- [About v2](design/mockups/bold-editorial/about-v2.png)
- [Talks v2](design/mockups/bold-editorial/talks-v2.png)
- [Mobile home v2](design/mockups/bold-editorial/home-mobile-v2.png)
- [Mobile article v2](design/mockups/bold-editorial/article-mobile-v2.png)
- [Gallery and review notes](design/mockups/README.md)

The bold editorial direction and listed revisions are approved. Structured field notes is an exploration reference, not an alternate theme to implement. Its useful contributions are clearer explanatory relationships and the appearances column structure—not its grid, teal/ochre palette, or sans-serif headline system.

Mockups guide composition and character, not literal pixel matching. Embedded text is draft, diagrams are conceptual, body sizing and whitespace need browser validation, and raster buttons/links do not demonstrate working features.

## Reject these regressions

Generic SaaS styling; dense equal-weight grids; résumé/skill-pill walls; terminal-themed navigation; glossy 3D; neon/glow; decorative noise behind text; fake proof of impact; tiny mobile text; oversized page margins that squeeze reading width; decorative diagrams that conceal meaning; resource buttons without real destinations.
