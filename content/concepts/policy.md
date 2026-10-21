---
title: Policy
---

# Policy

**Scope:** A decision rule in the partially observable planning setting of Kaelbling, Littman, and Cassandra (1998) [1]; “policy” in governance or natural-language instructions has different meanings.

An [[agent|agent function]] describes behavior over percept histories. [2] The belief-state policy below instead uses a summary of the information available in the specified POMDP. [1] Their input descriptions differ, so the terms are not automatically interchangeable.

## In the POMDP model

A policy determines how to choose an [[action|Action]] from information available at decision time. Since the true state is hidden, a rule that chooses an action from the _true_ state cannot in general be implemented by this agent. A belief-state policy instead uses a distribution over possible states: symbolically, $\pi(b)=a$ means the rule $\pi$ selects action $a$ at [[belief-state|Belief state]] $b$. This shorthand is for a deterministic, stationary rule; history-dependent or stochastic rules are also possible, and the shorthand is not their universal definition. Planning evaluates such choices with the task's rewards and assumptions about future transitions and observations.

## Boundary example

“If certain of an obstacle, turn; otherwise inspect” can be a decision rule only once “certain,” “turn,” and “inspect” are specified within a model. A one-off turn after a noisy sensor reading is an action, not the whole policy. A document labeled “safety policy” is not automatically the mathematical action-selection rule considered here.

## Relations

- **Maps from:** a [[belief-state|Belief state]] can summarize action–observation history for planning in this setting.
- **Specifies:** a deterministic policy selects an [[action|Action]]; a stochastic policy specifies a probability distribution over actions.
- **Responds to:** [[observation|observations]] affect later choices through the updated belief state.
- **Contrast:** [[retrieval-augmented-generation|Retrieval-augmented generation]] describes a retrieval-conditioned generation architecture, not necessarily a policy optimizing sequential reward.

## Sources

[1] Kaelbling, Leslie Pack, Michael L. Littman, and Anthony R. Cassandra. “Planning and Acting in Partially Observable Stochastic Domains.” 1998. _Artificial Intelligence_ 101 (1–2): 99–134. [https://doi.org/10.1016/S0004-3702(98)00023-X](<https://doi.org/10.1016/S0004-3702(98)00023-X>). Author-hosted [paper PDF](https://www.cassandra.org/arc/papers/aij98.pdf).

[2] Russell, Stuart J., and Peter Norvig. _Artificial Intelligence: A Modern Approach_. Fourth edition, Global Edition. Pearson Education Limited, 2022. Chapter 2, §2.1, pp. 54–56. [Official edition page](https://aima.cs.berkeley.edu/global-index.html).
