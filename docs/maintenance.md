# Maintaining Agent Atlas

## Contributing sources

Use the concept template and keep definitions scoped to the cited literature. Use native GFM footnotes: place `[^1]`, `[^2]`, etc. beside checked source-specific attributions and define each work once with `[^1]: Full bibliographic entry`. Reuse the same identifier for repeated citations; Quartz generates clickable superscript numbers and return links. Identifiers are article-local; displayed numbers follow first citation order. Do not add a separate Sources heading: the native renderer produces one Footnotes section.

Include author(s), title, venue or publisher, verified year/edition/version, and a stable original or DOI link. Add section/page locators only when inspected. Keep claim-specific locators beside the marker, for example `(§2.1)[^1]`, as well as the bibliographic coverage in the definition. Omit unknown metadata and do not attach citations to unsupported claims. Check rendered numbering, every citation target and return link, repeated references and source URLs before publication. This uses the existing GitHubFlavoredMarkdown transformer; no bibliography database or Citations transformer is required.

## Concept titles

Use sentence case for concept titles and full-title link labels: capitalize the first word, preserve proper names and acronyms (for example, Agent memory, Theory of mind, Bayesian, and LLM), and match frontmatter, any article H1, and navigation labels. Keep grammatical short aliases and bibliographic titles in their intended form; do not rename slugs or URLs.

## Article update dates

“Last updated” is the latest Git commit that changed the article’s Markdown file, including formatting and source-reference edits; it is not a separate review date. Use a clone with full history and keep the deployment checkout at `fetch-depth: 0`. Dates update automatically when article changes are committed; do not add manual `modified` frontmatter. Changes to site configuration do not change an untouched article’s date.

## Updating the site

Edit the Markdown in `content/`, then run `npm run check` and `npm run quartz -- build`. Check rendered source numbers, links and any equations before publishing. For date-related changes, compare generated `<time datetime>` values against `git log -1 --format=%cI -- content/path/to/article.md` for files with different histories. Push approved changes to `main`, confirm the GitHub Pages workflow succeeds for that commit, and check representative live pages.

## Graph labels

The local graph and Global Graph each have an independent **Labels** button (accessible name: “Show node labels”). Both start off; enabling one displays all existing node titles without changing graph layout or forces. Turning it off restores native hover/zoom label visibility. Labels can overlap in dense graphs. The choice lasts for that view only: navigation and reopening Global Graph reset it; redrawing the local graph after a theme change also resets it. No preference is stored.

Released on 2026-10-30 in [b2f2377](https://github.com/JJYDXFS-Lab/agent-atlas/commit/b2f23778ee2da8f28fc787fa39cad668cd1bc659); the [Pages deployment](https://github.com/JJYDXFS-Lab/agent-atlas/actions/runs/41025223045) succeeded. The [live site](https://jjydxfs-lab.github.io/agent-atlas/) was checked in desktop and 390px mobile viewports: label visibility, independent controls, modal reopen and local theme reset, and node navigation passed smoke checks. Pan/zoom responded to dispatched browser events; physical touch gestures were not tested. Dense labels can overlap or clip within a small graph. Existing renderer and view lifecycle are retained.

The label control uses a compact rounded pill with a text icon, theme-aware neutral/teal states, and a keyboard-only focus ring. Its 44px hit target and modal inset are preserved on mobile.
