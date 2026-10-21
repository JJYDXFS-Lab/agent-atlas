# Agent Atlas

Agent Atlas is a public reference wiki for concepts associated with intelligent agents. Entries distinguish documented uses, conceptual boundaries and relationships, with links to published sources. It is a knowledge-level subsidiary of Atom KB, built and maintained independently.

The first five entries cover action, observation, belief state and policy in the cited POMDP formulation, plus retrieval-augmented generation in its original language-model formulation. Their links aid navigation; they do not imply universal definitions or equivalence between these models.

## Local development

Requires Node.js 22 or newer and npm 10.9.2 or newer. From a clone of this repository:

```sh
npm ci
npm run check
npm run quartz -- build
python3 -m http.server 8080 --bind 127.0.0.1 --directory public
```

Open `http://127.0.0.1:8080/` locally and stop the server with Ctrl-C. `content/` is the Markdown input to the site; `content/concepts/_template.md` is not published. Quartz 4.5.2 is pinned to upstream commit `4923affa7722dfc751f1074348e6dad214fe0c08` and its MIT license is in `LICENSE.txt`.

## Contributing sources

Use the concept template and keep definitions scoped to the cited literature. Each article’s Sources section uses [1], [2], etc., restarting at [1], with one entry per work. Include author(s), title, venue or publisher, verified year/edition/version, and a stable original or DOI link. Add section/page locators only when inspected, omit unknown metadata, and place matching [n] markers beside clear source-specific attributions. Check the rendered numbering and links before publication.
