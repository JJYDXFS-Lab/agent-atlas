---
title: Action
---

# Action

**Scope:** An agent's choice in a partially observable Markov decision process (POMDP), as formulated by Kaelbling, Littman, and Cassandra (1998) [1]. This is not a definition of every physical or computational action.

In the broader [[agent|agent]] framework, actions are how an agent acts on its environment. [2] The transition probabilities in this entry belong to the specified POMDP, rather than to the general definition of an agent.

## In the POMDP model

An action is one of the choices available to the decision-maker. The model specifies how the selected action and the current (possibly hidden) state affect the distribution of the next state; the agent then receives an [[observation]]. The action is the choice, not the resulting state change or the evidence subsequently received. A useful one-step shorthand is $s \xrightarrow{a} s'$: $s$ is the state before the step, $a$ the selected action, and $s'$ the state afterward. The arrow represents a possible transition, **not** a deterministic guarantee. The paper treats action choices, transition probabilities, observations, and rewards as parts of a planning problem, not interchangeable labels.

## Boundary example

A robot choosing _move north_ has selected an action even if it slips and stays in place. Its later sensor report is an observation, not a second action. Conversely, deciding to consult a document collection can be modeled as an action in a _separately specified_ decision process, but retrieval alone is not automatically an action in the particular POMDP defined by this paper.

## Relations

- **Chosen by:** a [[policy]] specifies which action to take using the information available to the agent.
- **Informs:** the distribution of the next [[observation]] depends on the action as well as the resulting state.
- **Updates:** an action and a subsequent observation jointly constrain the next [[belief-state|belief state]].
- **Contrast:** [[retrieval-augmented-generation|retrieval-augmented generation]] incorporates retrieved text into generation; describing that retrieval as an action requires an explicit decision model beyond the original RAG formulation.

## Sources

[1] Kaelbling, Leslie Pack, Michael L. Littman, and Anthony R. Cassandra. “Planning and Acting in Partially Observable Stochastic Domains.” 1998. _Artificial Intelligence_ 101 (1–2): 99–134. [https://doi.org/10.1016/S0004-3702(98)00023-X](<https://doi.org/10.1016/S0004-3702(98)00023-X>). Author-hosted [paper PDF](https://www.cassandra.org/arc/papers/aij98.pdf).

[2] Russell, Stuart J., and Peter Norvig. _Artificial Intelligence: A Modern Approach_. Fourth edition, Global Edition. Pearson Education Limited, 2022. Chapter 2, §2.1, pp. 54–56. [Official edition page](https://aima.cs.berkeley.edu/global-index.html).
