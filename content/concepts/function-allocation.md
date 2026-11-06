---
title: Function allocation and function congruence
---

# Function allocation and function congruence

In Hollnagel and Woods's cognitive systems engineering account, **function allocation** concerns distributing the functions needed for a system's goals. **Function congruence** adds overlap and the possibility of redistribution as capability and demand change, so that the ensemble can sustain control. These are related design ideas, not interchangeable names for fixed task assignment. (Chapter 6, pp. 121–129)[^j]

## Allocation principles

The authors contrast leaving humans whatever automation cannot perform, compensating for supposedly fixed human/machine strengths, and designing complementary capabilities. Congruence recognizes variation with circumstances and provides overlapping capabilities for adjustment. The book discusses Bainbridge's automation ironies, Grote and colleagues' complementarity, and Hollnagel's earlier congruence work; those works are represented here through this volume, not independently reviewed. (pp. 121–127)[^j]

Overlap has a cost and a condition: a nominal backup is of little use if it lacks knowledge, access, time, or the ability to diagnose and recover. Being able to perform a function, being assigned it, bearing responsibility, and being authorized are separate questions. Allocation need not transfer responsibility. (pp. 123–129)[^j] The authorization distinction in contemporary software is an Atlas application; see [[organizational-authority|Organizational authority]].

## Recursive goals–means analysis

Functional analysis asks why a function is needed, what it achieves, and how it is achieved, moving recursively between levels. Decomposition must stop at a level appropriate to the analysis and available knowledge; further detail is not automatically informative. Analyse functions before assigning tasks. (pp. 129, 131–133)[^j] Hollnagel and Woods explicitly connect this goals–means principle with GPS’s [[means-ends-analysis|Means–ends analysis]]. Here they develop recursive functional analysis, with an explicit stop rule; GPS uses differences between current and goal states to guide operator selection. The shared principle does not make these uses the same procedure. (pp. 129–133)[^j]

## Application and limits

An illustrative research assistant collects evidence while a person retains authority over the decision criterion. Recovery requires more than naming the person as reviewer: relevant sources must be accessible, missing evidence detectable, and reassignment possible within the deadline. Overlap can aid recovery while increasing coordination work or obscuring responsibility. These are design hypotheses, not measured staffing rules for LLM systems.

The book's historically situated human/machine capability contrasts should not be used as a current model-selection table. Evaluate actual capabilities and recovery costs. [[joint-cognitive-system|Joint cognitive system]] supplies the joint performance unit; [[execution-monitoring|Execution monitoring]] distinguishes what is checked during execution; [[contextual-control-model|Contextual Control Model (COCOM)]] concerns conditions of control.

[^j]: Hollnagel, Erik, and David D. Woods. _Joint Cognitive Systems: Foundations of Cognitive Systems Engineering_. CRC Press, 2005. [Publisher DOI](https://doi.org/10.1201/9781420038194). Locators are printed pages; this is _Foundations_, not the companion _Patterns_ volume.
