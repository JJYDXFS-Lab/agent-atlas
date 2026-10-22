---
title: Near decomposability
---

# Near decomposability

A **nearly decomposable system**, in Simon's account, has interactions between subsystems that are weak relative to interactions within them, but not negligible. Its short-run subsystem behavior is approximately independent; over longer periods, the behavior of a subsystem depends on the others in an aggregate way. (Chapter 8, printed pp. 197–199)[^1]

## Uses in the literature

Simon illustrates this with heat exchange: temperatures equilibrate quickly among cubicles within a room and more slowly between rooms. After the fast internal adjustment, room-level temperatures can describe the slower behavior. This is a claim about interaction strengths and timescales, not simply about drawing boxes around components. (Chapter 8, printed pp. 198–200)[^1]

## Boundaries and related concepts

Exact decomposability neglects cross-component interaction; near decomposability retains it as a weaker effect. Simon's own account is positive. At least some hierarchic systems can be approximated this way, and near decomposability is generally prominent in social systems such as formal organizations. In those organizations, most communication, including channels beyond formal authority, reaches only a limited set of associates. He also notes that the property is a strong one, and how many systems have it depends on how close an approximation is demanded. (Chapter 8, printed pp. 197, 200–201)[^1] The caution for software is our own empirical one, not Simon's: a modular codebase or an agent role hierarchy should be measured for weak coupling rather than assumed to meet the condition.

The relation to [[artifact-interface|Artifact interface]] is a possible basis for abstraction: internal details may sometimes be replaced by an aggregate description. The relation to [[organizational-authority|Organizational authority]] is conditional; an authority hierarchy alone is insufficient evidence of weak coupling.

## Operational example

For a team of agents, measure how often one worker's intermediate changes force others to revise their work. Separately test whether occasional summaries suffice for coordination. These are illustrative diagnostics, not a proof: frequent shared-state conflicts would count against treating the workers as nearly decomposable, even if they have separate role names.

[^1]: Simon, Herbert A. _The Sciences of the Artificial_. Third edition. MIT Press, 1996. ISBN 9780262193740 (hardcover). [Publisher page, paperback ISBN 9780262691918](https://mitpress.mit.edu/9780262691918/the-sciences-of-the-artificial/). Inspected Chapter 8, printed pp. 197–201 (PDF pp. 208–212). Pagination in this portion differs from the earlier chapters; PDF indexes are not printed page numbers.
