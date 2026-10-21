# Maintaining Agent Atlas

## Contributing sources

Use the concept template and keep definitions scoped to the cited literature. Each article’s Sources section uses [1], [2], etc., restarting at [1], with one entry per work. Include author(s), title, venue or publisher, verified year/edition/version, and a stable original or DOI link. Add section/page locators only when inspected, omit unknown metadata, and place matching [n] markers beside clear source-specific attributions. Check the rendered numbering and links before publication.

## Concept titles

Use sentence case for concept titles and full-title link labels: capitalize the first word, preserve proper names and acronyms (for example, Agent memory, Theory of mind, Bayesian, and LLM), and match frontmatter, any article H1, and navigation labels. Keep grammatical short aliases and bibliographic titles in their intended form; do not rename slugs or URLs.

## Article update dates

“Last updated” is the latest Git commit that changed the article’s Markdown file, including formatting and source-reference edits; it is not a separate review date. Use a clone with full history and keep the deployment checkout at `fetch-depth: 0`. Dates update automatically when article changes are committed; do not add manual `modified` frontmatter. Changes to site configuration do not change an untouched article’s date.

## Updating the site

Edit the Markdown in `content/`, then run `npm run check` and `npm run quartz -- build`. Check rendered source numbers, links and any equations before publishing. For date-related changes, compare generated `<time datetime>` values against `git log -1 --format=%cI -- content/path/to/article.md` for files with different histories. Push approved changes to `main`, confirm the GitHub Pages workflow succeeds for that commit, and check representative live pages.
