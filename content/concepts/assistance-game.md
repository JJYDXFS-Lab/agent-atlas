---
title: Assistance game
---

# Assistance game

In AIMA's account, an **assistance game** models a human and a robot with identical payoffs, where the human has information about preferences that the robot lacks. The robot's objective is assistance under uncertainty about those preferences, rather than optimizing an independently fixed objective. (§17.2.5, pp. 613–615)[^a]

## Information and strategic interaction

The human's actions can convey information about preferences. Because both participants act in an interaction, a human may choose an action partly to teach the robot, rather than greedily maximizing immediate payoff. A pedagogic signal should therefore not automatically be read as a direct revelation of the action the human most prefers in isolation. (pp. 613–615)[^a]

A shared payoff does not itself select a shared plan. AIMA's earlier discussion of multiagent planning distinguishes agents choosing their own plans from benevolent actors following an assigned plan; compatible individual choices and coordination remain problems even when objectives agree. (§17.1, pp. 589–595)[^a]

## Deference and the off-switch example

AIMA's restricted off-switch example illustrates how uncertainty about human utility can make asking or allowing intervention instrumentally useful. Its result depends on the human decision and robot uncertainty assumptions in the example; it is not a universal claim that any observed permission is reliable. (§15.7, pp. 545–546)[^a]

## Boundaries and application

The shared-payoff and information assumptions are part of the formal model. They do not establish whose preferences should govern a real system, whether affected people agree, or whether an instruction is legitimate. [[organizational-authority|Organizational authority]] concerns acceptance of another's decision; [[fact-value-distinction|Fact–value distinction]] separates evidence about consequences from preferred ends. Neither posterior confidence nor instrumental deference constitutes consent.

For an illustrative assistant, uncertainty about a user's travel preferences can motivate a clarifying question, but a learned preference does not authorize a purchase. Distinguish beliefs about preferences, premises accepted for this task, and action permission. See [[belief-state|Belief state]] for a particular probabilistic formulation and [[decision-premises|Decision premises]] for what structures a choice. This is an Atlas application, not an empirical claim about current LLM alignment or a theorem that greater intelligence guarantees better assistance.

[^a]: Russell, Stuart J., and Peter Norvig. _Artificial Intelligence: A Modern Approach_. Fourth edition, Global Edition. Pearson Education Limited, 2022. [Official edition page](https://aima.cs.berkeley.edu/global-index.html). Locators refer to this Global Edition.
