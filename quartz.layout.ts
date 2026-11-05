import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import type { Options as ExplorerOptions } from "./quartz/components/Explorer"

// Explorer functions are serialized into the browser, so keep them self-contained.
// Lift topic links for display without changing their canonical slugs.
const explorerMap: ExplorerOptions["mapFn"] = (node) => {
  if (node.slug === "concepts/index") node.displayName = "Concepts"
  if (node.slug === "index") {
    node.children = node.children.flatMap((child) =>
      child.slug === "topics/index" ? child.children : [child],
    )
  }
}

const explorerSort: ExplorerOptions["sortFn"] = (a, b) => {
  const readingOrder = [
    "topics/agent-foundations",
    "topics/memory-and-information",
    "topics/communication-and-interpretation",
    "topics/design-and-organizational-decision-making",
    "topics/collaboration-across-people-and-artefacts",
    "references",
    "concepts/index",
  ]
  const aRank = readingOrder.indexOf(a.slug)
  const bRank = readingOrder.indexOf(b.slug)
  if (aRank !== -1 || bRank !== -1) {
    return (
      (aRank === -1 ? readingOrder.length : aRank) - (bRank === -1 ? readingOrder.length : bRank)
    )
  }

  if (a.isFolder === b.isFolder) {
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  }
  return a.isFolder ? -1 : 1
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({ mapFn: explorerMap, sortFn: explorerSort }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({ mapFn: explorerMap, sortFn: explorerSort }),
  ],
  right: [],
}
