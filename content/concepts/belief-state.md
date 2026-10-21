---
title: Belief state
---

# Belief state

**Scope:** The probabilistic state estimate used for planning under partial observability by Kaelbling, Littman, and Cassandra (1998) [1]; not a general claim about the contents of an agent's mind.

## In the POMDP model

A belief state assigns probabilities to possible hidden states given the available history of actions and observations. The paper turns a partially observed planning problem into one over these probability distributions: the planner need not pretend that the most recently reported state is certainly true. An action predicts possible next states; the next observation supplies evidence to revise their probabilities.

For a _finite-state, finite-observation_ POMDP with a specified transition model $T$ and observation model $O$, an illustrative Bayesian update is

$$
b_{t+1}(s') = \frac{O(o_{t+1}\mid s',a_t)\sum_{s\in S}T(s'\mid s,a_t)b_t(s)}{\sum_{u\in S}O(o_{t+1}\mid u,a_t)\sum_{s\in S}T(u\mid s,a_t)b_t(s)}.
$$

Here $S$ is the finite set of hidden states; $s$ and $u$ range over $S$, while $s'$ is the candidate next state. $b_t(s)$ is the probability assigned to $s$ at time $t$, and $b_{t+1}(s')$ is the updated probability. $a_t$ is the chosen [[action]]; $o_{t+1}$ is the received [[observation]]. $T(s'\mid s,a_t)$ is the probability of transitioning from $s$ to $s'$ under $a_t$, and $O(o_{t+1}\mid s',a_t)$ is the probability of that report given the resulting state and action. The denominator is the probability of the report under the predicted state distribution and must be positive. This update assumes the stated Markov transition and observation model; it is not a universal formula for all forms of belief or inference.

## Boundary example

After a noisy “door open” report, an agent may assign the door-open state higher probability without treating it as certain. A single label “open” with no uncertainty representation is a state estimate, not a probability-distribution belief state in this model.

## Relations

- **Updated by:** an [[action]] and [[observation]] under specified probability models.
- **Input to:** a belief-based [[policy]] can choose an action for each reachable distribution.
- **Contrast:** the retrieved passages in [[retrieval-augmented-generation|retrieval-augmented generation]] constitute external text, not by themselves a normalized distribution over hidden states.

Related reading: [[theory-of-mind|Theory of mind]] uses belief attribution in a different sense; [[agent-memory|agent memory]] describes storage and retrieval mechanisms.

## Sources

[1] Kaelbling, Leslie Pack, Michael L. Littman, and Anthony R. Cassandra. “Planning and Acting in Partially Observable Stochastic Domains.” 1998. _Artificial Intelligence_ 101 (1–2): 99–134. [https://doi.org/10.1016/S0004-3702(98)00023-X](<https://doi.org/10.1016/S0004-3702(98)00023-X>). Author-hosted [paper PDF](https://www.cassandra.org/arc/papers/aij98.pdf).
