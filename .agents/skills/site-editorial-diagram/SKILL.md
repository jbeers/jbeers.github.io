---
name: site-editorial-diagram
description: Create clear project and technical-flow diagrams for Jacob Beers's site while preserving its warm ivory, ink, and vermilion editorial illustration style. Use for architecture explanations, observatory data aggregation, MatchBox runtime targets, developer tooling, and readable desktop/mobile workflow images.
---

# Site editorial diagram

Read [the shared image direction](../../../design/editorial-images.md) completely. Inspect the approved About v2 illustration before composing a diagram. Resolve relative paths from this skill directory.

The goal is **editorial character with explanatory structure**, not decorative lines that look like architecture.

## Establish the meaning first

1. Read the actual article or project description. Write a small plain-text list of nodes and directed relationships before drawing anything.
2. Distinguish an illustrative overview from actual architecture. Confirm unknown relationships with the user; do not derive facts from the mockup or invent components to fill space.
3. Identify the one relationship the reader must understand. Keep only enough nodes, arrows, and labels to communicate it. Use recognizable objects and consistent direction, not crossing orbit lines.
4. State exact labels and their intended rendering. Prefer HTML captions/labels or an accessible text equivalent where feasible. If labels must be inside a generated raster, keep them short, readable, and proofread every character.
5. Determine the final narrow-screen reading size before generating. Reflow or simplify for mobile instead of scaling down a dense desktop flow.

## Project-specific guardrails

These are approved **conceptual subjects**, not a complete architecture specification:

- **USRA Multi-Messenger:** multiple observatories → aggregation / scientific data warehouse. Research use may be described generally; do not invent APIs, dashboards, downstream pipelines, real observatory names, performance numbers, or completed deployment. Jacob helped build the grant-winning prototype and is building the implementation for the National Research Platform. NASA sponsorship is not an endorsement or direct-client claim.
- **MatchBox:** MatchBox is a Rust VM with WebAssembly and ESP32 runtime support. Show MatchBox / Rust VM branching to those targets when useful. Rust, WebAssembly, and ESP32 are not three equivalent stacked layers or sequential processing stages.
- **BoxLang developer tools:** recognizable editor, language-assistance, and debugger cues. Do not invent protocol relationships, command sequences, or a real application screenshot.
- **Article workflows:** the article's verified source diagram and description take precedence over conceptual artwork. Do not replace a technically accurate diagram with a prettier but incorrect one.

## Pick the appropriate medium

For editorial raster illustrations, follow the shared guide and the installed `codex-imagegen` skill; never substitute SVG/code rendering for requested generated artwork. For a genuinely precise, maintainable, text-heavy diagram, propose the project's existing SVG approach instead and get agreement on that medium. Preserve the editorial palette and clarity either way; do not add a diagram library for a few nodes.

## Brief scaffold

```text
Use case: infographic-diagram
Asset type: [conceptual project illustration / verified workflow diagram]
Purpose: [one relationship the reader should understand]
Factual source: [approved description or repository source]
Nodes and directed edges: [explicit list]
Text verbatim: [only required labels; no extra text]
Style reference: approved About v2; editorial scientific print
Palette: ivory #F6F3EB, ink #18211E, vermilion #CF472A
Treatment: fine ink outlines, sparse textured fills, restrained grain;
           arrows clear and consistent, generous node spacing
Composition: [desktop/mobile dimensions and readable display size]
Constraints: preserve these relationships exactly; no extra nodes,
             fake UI, logos, decorative orbit paths or invented claims
Authorized count and output: [count, new filenames, destination]
```

## Acceptance

Apply the shared review/handoff checklist and compare the resulting image against the approved node/edge list, arrow by arrow.

- Can a nontechnical reader identify the inputs, transformation/system, and outputs without guessing?
- Are arrowheads, labels, and relationships correct, unambiguous, and readable at intended phone width?
- Does it retain the editorial palette/texture instead of reverting to teal stock icons?
- Are conceptual simplifications identified and the essential meaning available in nearby text?
- Are labels and informative text accessible without relying on color or the image alone?

Do not approve reversed arrows, invented architecture, illegible labels, or attractive abstractions that conceal the flow. Report failures rather than silently retrying. Save the approved node/edge list with the prompt for future revisions.

Example invocation after reloading skills:
`/skill:site-editorial-diagram Draft the nodes and prompt for one Multi-Messenger illustration; do not generate yet.`
