# Site redesign mockups

Open [index.html](index.html) in a browser for page-by-page, side-by-side comparison.

## Mobile revision 2

[Review mobile v2](index.html#mobile-v2).

- [Home v2](bold-editorial/home-mobile-v2.png): substantially more visible orbital hero beneath the introduction.
- [Article v2](bold-editorial/article-mobile-v2.png): more open paragraph/heading rhythm and a clearer conceptual workflow diagram.
- Exactly two additional native-tool generations, visually inspected and PNG-verified, both 724 × 2172. Briefs saved in `briefs/bold-editorial-home-mobile-v2.txt` and `briefs/bold-editorial-article-mobile-v2.txt`. Prior versions preserved.
- Limitation: despite an explicit longer-canvas request, outputs retained a 3:1 aspect ratio. The homepage's lower sections remain compressed and some body copy is too small at 390px display width. This revision successfully explores the stronger hero, but does not fully resolve vertical spacing. No automatic retry was made.
- Implement the agreed spacing independently of the raster: 17–18px body, comfortable line height, 56–72px section gaps, and adequate touch targets. Expect a longer actual page.
- Diagrams remain conceptual. No production site code or content changed.

## Mobile design studies

[View both mobile mockups](index.html#mobile).

- [Home](bold-editorial/home-mobile.png), PNG 724 × 2172: visible navigation, stacked speaking and selected-work sections, explanatory observatory/warehouse and runtime-target diagrams.
- [Article detail](bold-editorial/article-mobile.png), PNG 836 × 1881: inline contents instead of sidebar, abbreviated article, code and callout samples, related links.
- Exactly two native-tool images generated, visually inspected and format-verified. Source briefs are in `briefs/bold-editorial-home-mobile.txt` and `briefs/bold-editorial-article-mobile.txt`.
- These are raster composition studies, not proof of responsive behavior. At phone width, typography is more compact than the requested 17–18px body/40–48px headlines, especially in the article study. Implementation must use readable CSS sizing rather than scale these images literally.
- Article illustration retained more of the original abstract network motif than the explanatory brief intended; it is conceptual, not a technically validated network diagram. In implementation use the article's actual diagram with an accessible full-size link.
- No mobile interactions, overflow, touch targets or assistive technology behavior have been tested. Copy is abbreviated for the design study; no actual article content was changed.

## Revision 2 — Bold editorial

[Compare original and revised About and Talks](index.html#revisions).

- [About v2](bold-editorial/about-v2.png): editorial textures and palette with observatories → warehouse flow, MatchBox/Rust VM branching to WebAssembly and ESP32, and recognizable debugging imagery.
- [Talks v2](bold-editorial/talks-v2.png): aligned conference/year column, serif talk titles, and explicit session/resource links where existing destinations are known.
- Two additional native-tool images, both inspected and verified PNGs (897 × 1754). Briefs: `briefs/bold-editorial-about-v2.txt` and `briefs/bold-editorial-talks-v2.txt`.
- Original ten images remain unchanged. Diagrams are conceptual, not verified architecture. No production site files changed.
- Talks rows are clearer, but could use more vertical padding in implementation. Raster link labels are visual proposals, not interactive controls.

## Directions

- **A — Bold editorial:** warm ivory, ink, vermilion; strong serif headlines, thin rules, textured scientific illustrations.
- **B — Structured field notes:** near-white, charcoal, teal, ochre; faint grid, bold sans typography, line diagrams.

| Page | A | B |
| --- | --- | --- |
| Home | [Image](bold-editorial/home.png) | [Image](structured-field-notes/home.png) |
| Articles index | [Image](bold-editorial/articles.png) | [Image](structured-field-notes/articles.png) |
| Article detail | [Image](bold-editorial/article-detail.png) | [Image](structured-field-notes/article-detail.png) |
| About / Work with me | [Image](bold-editorial/about.png) | [Image](structured-field-notes/about.png) |
| Talks | [Image](bold-editorial/talks.png) | [Image](structured-field-notes/talks.png) |

## Source and scope

Ten desktop raster mockups generated with Codex CLI's native image-generation tool using ChatGPT subscription authentication, not a separately billed image API. Each homepage was inspected and then supplied as a style-only reference for its four secondary pages. All ten deliverables were visually inspected and verified as PNGs (897 × 1752). Individual prompts are preserved in `briefs/`; private worker logs remain outside the repository.

Only review artifacts were added. Site templates, styles, routes, and existing images were not modified. The original set covered desktop only; two mobile studies were subsequently added above. No dark-mode mockups have been generated.

## Review notes

- Compare positioning, hierarchy, typography, palette, imagery, and client-work prominence—not exact line breaks.
- These are full-page desktop compositions, not validated browser layouts. Text sizing, spacing, and responsiveness still need implementation-level validation.
- Copy is draft. Article bodies are abbreviated and include sample explanatory text; diagram illustrations are conceptual, not accurate infrastructure documentation.
- A's articles index omits “Why I don't Write”; B includes it. Both are layout proposals, not final content inventories.
- A uses its orbital motif repeatedly; consider whether this feels cohesive or too repetitive. B's line-art diagrams may feel more conventional.
- Article body widths need closer review: some lower sections expand beyond the intended narrow reading column.
- Generated button styling is more prominent than the text-link-first brief in a few places; that can be reduced during iteration.
- No fake portraits, testimonials, metrics, NASA logos, or client endorsements were used. Speaker copy and project claims require final editorial approval.
- No additional alternatives or regenerated images were produced.
