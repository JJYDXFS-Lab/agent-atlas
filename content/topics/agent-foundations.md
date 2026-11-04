---
title: Agent foundations
---

What is an agent, and how can its interaction with an environment be described? Start with the general perception–action framework, then explore a specific model of decision-making under partial observability.

- [[agent|Agent]] — the perception–action framework, agent functions and programs, rationality, and task environments.
- [[action|Action]] — a choice available to a decision-maker.
- [[observation|Observation]] — evidence received about a state.
- [[belief-state|Belief state]] — a probability distribution over possible hidden states.
- [[policy|Policy]] — a rule for selecting actions from available information.

Read the scope of each entry: Action, Observation, Belief state, and Policy use a specific POMDP formulation. For a different meaning of belief, see [[theory-of-mind|Theory of mind]]. For how an LLM system supplies information to a decision step, continue to [[memory-and-information|Memory and information]].

For limits on deliberation, design, and the organization of decisions, continue to [[design-and-organizational-decision-making|Design and organizational decision-making]].

## Evaluating outcomes and choosing among alternatives

Three useful questions connect the entries above to the design of a task:

- **Which outcomes count as good performance?** AIMA's performance measure evaluates a sequence of environment states. Its vacuum example could award points for clean squares at each time step, making sustained cleanliness part of the assessment. (§2.2.1, p. 57)[^1]
- **What objective does the decision model optimize?** In the POMDP formulation used here, $R(s,a)$ gives expected immediate reward for an action in a state. Policy evaluation combines rewards over a specified horizon using a discount factor, which must be below 1 for the infinite-horizon model; under partial observability the objective remains expected discounted future reward. (§§2.1–2.2, 3.1, pp. 101–103, 105)[^2]
- **What makes a candidate acceptable during search?** Simon's [[satisficing|Satisficing]] seeks alternatives that meet standards of acceptability within practical search limits. Candidates are tested against these standards, whose level affects the expected length of search. (Chapter 5, pp. 119–121)[^3]

An illustrative cleaning task could assess cleanliness across a shift, encode cleanliness and energy costs in a planning model, and use minimum cleanliness and battery-life requirements to screen candidate designs. The connection depends on the chosen criteria, time horizon, and resource limits. Continue to [[bounded-rationality|Bounded rationality]] for the limits on deliberation and [[design-and-organizational-decision-making|Design and organizational decision-making]] for how goals and constraints shape decisions.

## From an individual agent to joint activity

Compare [[distributed-cognitive-system|Distributed cognitive system]] with [[joint-cognitive-system|Joint cognitive system]] before choosing the unit whose performance is evaluated: representational transformation and timely joint control answer different questions. [[execution-monitoring|Execution monitoring]] concerns acting with a plan; [[contextual-control-model|Contextual Control Model (COCOM)]] describes patterns of control without replacing the POMDP definitions above. [[assistance-game|Assistance game]] introduces a formal setting with shared payoffs and asymmetric preference information, whose assumptions need separate justification.

[^1]: Russell, Stuart J., and Peter Norvig. _Artificial Intelligence: A Modern Approach_. Fourth edition, Global Edition. Pearson Education Limited, 2022. §2.2.1, p. 57. [Official edition page](https://aima.cs.berkeley.edu/global-index.html).

[^2]: Kaelbling, Leslie Pack, Michael L. Littman, and Anthony R. Cassandra. “Planning and Acting in Partially Observable Stochastic Domains.” 1998. _Artificial Intelligence_ 101 (1–2): 99–134. §§2.1–2.2, 3.1, pp. 101–103, 105. [DOI](<https://doi.org/10.1016/S0004-3702(98)00023-X>), [author-hosted paper](https://people.csail.mit.edu/lpk/papers/aij98-pomdp.pdf).

[^3]: Simon, Herbert A. _The Sciences of the Artificial_. Third edition. MIT Press, 1996. Chapter 5, pp. 119–121. [Publisher edition](https://mitpress.mit.edu/9780262691918/the-sciences-of-the-artificial/).
