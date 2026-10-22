---
title: Means–ends analysis
---

# Means–ends analysis

In Simon's discussion of the General Problem Solver (GPS), **means–ends analysis** connects differences between a current situation and a desired situation with actions relevant to reducing those differences. It requires representations of states, differences, and available actions, together with associations between differences and actions. (Chapter 5, printed pp. 121–122)[^1]

## Uses and boundaries

GPS illustrates a selective search process. Since a goal may require a sequence of actions and an attempted action may fail, the system must detect progress and try alternative paths. Difference reduction alone does not guarantee that a solution exists or that a particular action will succeed. (Chapter 5, printed p. 122)[^1]

The relation to [[action|Action]] is procedural: means–ends analysis helps choose actions during search. It is not identical to a [[policy|Policy]], and does not require the belief-state formalism used in that entry. Nor is an organizational hierarchy of goals by itself a GPS procedure: a hierarchy does not specify how differences are detected or operators selected.

## Operational example

For a file-editing agent, a desired state might be a document with every required heading present. Compare the current document against that state, select an edit for a missing heading, apply it, and inspect the result before continuing. Track unresolved differences and failed edits. This is an illustrative application; reducing a visible formatting difference does not establish that the document's substantive content is correct.

[^1]: Simon, Herbert A. _The Sciences of the Artificial_. Third edition. MIT Press, 1996. ISBN 9780262193740 (hardcover). [Publisher page, paperback ISBN 9780262691918](https://mitpress.mit.edu/9780262691918/the-sciences-of-the-artificial/). Inspected Chapter 5, printed pp. 121–122 (PDF pp. 133–134).
