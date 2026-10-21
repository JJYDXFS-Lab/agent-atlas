# Agent Atlas | 智能体概念图谱

Agent Atlas is a public-facing reference wiki for concepts associated with intelligent agents. Entries are grounded in published sources and distinguish documented uses, boundaries and relationships. It is a knowledge-level subsidiary of Atom KB, built and maintained independently. Content is edited in Markdown; Obsidian is optional.

Current stage: five sourced concept entries and a local Quartz preview. GitHub Pages deployment is not enabled.

## Local quickstart (mac-mini-atom)

Requires Node.js 22 or newer and npm 10.9.2 or newer; tested with Node.js v24.18.0 and npm 11.16.0. From the project root:

```sh
npm ci --cache /private/tmp/agent-atlas-npm-cache-20261021
npm run check
npm run quartz -- build
python3 -m http.server 8080 --bind 127.0.0.1 --directory public
```

Open `http://127.0.0.1:8080/` on the same computer; press Ctrl-C to stop the server. The Python server binds only to loopback. Quartz's `build --serve` mode is not used because it does not bind explicitly to loopback. No server is left running by the build. The temporary npm cache avoids the unwritable default npm cache on this Mac without changing global configuration.

- [Public landing page source](content/index.md)

`content/` is the sole Markdown input to the site. The unpublished `content/concepts/_template.md` is excluded from output. The base URL and future Pages path remain unset pending a separate publication decision. Quartz v4.5.2 is pinned to upstream commit `4923affa7722dfc751f1074348e6dad214fe0c08`; its MIT notice is in `LICENSE.txt`.
