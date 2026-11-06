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

## Decomposition and interaction between steps

Simon qualifies when a problem can be factored into subproblems: an action that removes one difference can affect others, and its preconditions can require additional work. Keeping alternative paths matters when those interactions defeat a simple sequence of local improvements. (Chapter 5, printed pp. 123–124)[^1] A list of subtasks is not evidence that each can be solved independently.

[[problem-representation|Problem representation]] concerns how states and operations are structured; [[execution-monitoring|Execution monitoring]] distinguishes checks during action. The recursive why/what/how analysis in [[function-allocation#recursive-goalsmeans-analysis|Function allocation and function congruence]] shares the goals–means principle, which Hollnagel and Woods explicitly connect to GPS, while applying it to functional analysis rather than prescribing the GPS search procedure. (pp. 129–133)[^j]

[^1]: Simon, Herbert A. _The Sciences of the Artificial_. Third edition. MIT Press, 1996. ISBN 9780262193740 (hardcover). [Publisher page, paperback ISBN 9780262691918](https://mitpress.mit.edu/9780262691918/the-sciences-of-the-artificial/). Inspected Chapter 5, printed pp. 121–124 (PDF pp. 133–136).

[^j]: Hollnagel, Erik, and David D. Woods. _Joint Cognitive Systems: Foundations of Cognitive Systems Engineering_. CRC Press, 2005. [Publisher DOI](https://doi.org/10.1201/9781420038194). Locators are printed pages; this is _Foundations_, not the companion _Patterns_ volume.
