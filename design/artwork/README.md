# Production editorial artwork

Four approved standalone assets generated with Codex's subscription-backed native image tool, one call each, no extra alternatives or retries. Native PNG originals are kept here, outside the published site. Optimized transparent WebP counterparts and final briefs are in `images/`.

| Asset | Native dimensions | Use |
| --- | --- | --- |
| editorial-orbit | 1254 × 1254 | Decorative identity/hero |
| editorial-multimessenger | 1484 × 1060 | Three observatories → data warehouse |
| editorial-matchbox | 1774 × 887 | MatchBox / Rust VM → WebAssembly and ESP32 |
| editorial-developer-tools | 1774 × 887 | Abstract editor and debugging controls |

All originals and WebPs have real alpha transparency and were visually inspected. Diagram relationships and exact MatchBox labels were checked. The editor is a conceptual illustration, not a product screenshot. The generation dimensions are the native outputs, not the exact sizes requested in briefs; responsive markup uses their actual dimensions.

The initial orbital image was inspected before it became a style reference for the other three. Shared palette/character came from the approved desktop home and About v2 mockups. Prompt sidecars record those references, native output locations, and review notes. No private worker logs are checked in.

WebP files preserve native dimensions and transparency at quality 92, without regenerating artwork. Sources total about 5.6 MB; served images total about 1.23 MB. Integration was checked in Chromium at 1440/390/320px, including successful image decoding, readable diagram labels, stacked mobile hero, and side-by-side desktop hero. Dark mode uses CSS ink reversal with a hue rotation to keep accents warm and linework visible without paper-colored rectangles. It is not an independently generated dark artwork set.

The headline font is self-hosted Fraunces 700 from Google Fonts, with its SIL Open Font License in `res/fonts/Fraunces-OFL.txt`; clean system sans-serif remains the body font.
