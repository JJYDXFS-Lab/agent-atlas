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

Local and global graphs each have an independent, default-off name toggle. The pill reads **Show names** when off and **Hide names** when on, with matching accessible names “Show node names” / “Hide node names” and `aria-pressed`. The earlier Aa icon has been removed. Enabling the toggle shows all node names; disabling it restores native hover/zoom label opacity. Every new view, global modal reopen, and theme redraw resets the toggle off and synchronizes its text and accessibility state. The existing themed pill styling and minimum 44px targets are preserved.

History (2026-10-30): the small label feature and pill polish were published through `0b166da230bc1b8f1eb57ab451edaf7b5640999a`, then reverted in `2fea15f7d9e7d3de13632d1dc9e10ab4ace4d146`. Following the owner’s clarification, the accepted polished implementation is restored with clearer action text. The rollback is historical; name toggles are active again. Prior release receipts remain retained.
