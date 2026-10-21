---
title: Observation
---

# Observation

**Scope:** The perceptual outcome in the POMDP formulation of Kaelbling, Littman, and Cassandra (1998) [1], rather than all uses of “observation” in science.

## In the POMDP model

The decision-maker does not directly know the underlying state. After taking an [[action]], it receives an observation drawn according to an observation model. An observation is therefore evidence about a state, not necessarily the state itself. In this model, writing $O(o\mid s',a)$ denotes the probability of receiving observation $o$ after action $a$ when the resulting state is $s'$. Here $O$ is the observation model, $o$ is one possible report, $s'$ is the resulting state, and $a$ is the chosen action; the notation presumes specified sets of states, actions, and observations and a probability distribution over reports. It does not assert that every sensor behaves this way in practice.

## Boundary example

If a navigation sensor says “wall nearby,” that report is an observation even if the wall is absent because of sensor noise. A map coordinate inferred from several such reports is an estimate, not another raw observation. Equating the report with the hidden location would discard the very uncertainty that partial observability models.

## Relations

- **Follows:** an [[action]] precedes the observation in the modeled step.
- **Conditions:** the new observation, together with the action, is used to update a [[belief-state|belief state]].
- **Guides indirectly:** a [[policy]] over belief states can use new evidence without equating a report to the true state.
- **Contrast:** text fetched by [[retrieval-augmented-generation|retrieval-augmented generation]] is retrieved context for a language model; calling it a POMDP observation additionally requires a defined hidden state and observation model.

Related reading: [[context-window|Context window]] distinguishes the input available to an LLM from information stored elsewhere.

## Sources

[1] Kaelbling, Leslie Pack, Michael L. Littman, and Anthony R. Cassandra. “Planning and Acting in Partially Observable Stochastic Domains.” 1998. _Artificial Intelligence_ 101 (1–2): 99–134. [https://doi.org/10.1016/S0004-3702(98)00023-X](<https://doi.org/10.1016/S0004-3702(98)00023-X>). Author-hosted [paper PDF](https://www.cassandra.org/arc/papers/aij98.pdf).
