---
title: Execution monitoring
---

# Execution monitoring

In AIMA's discussion of planning and acting, **execution monitoring** checks whether execution remains compatible with successful action and plan achievement. Different levels of monitoring ask different questions about the next action, the remaining plan, and the goals being pursued. (§11.5, pp. 390–392)[^a]

## Action, plan, and goal monitoring

**Action monitoring** checks whether the next action's preconditions hold. **Plan monitoring** checks whether the remaining plan is still expected to succeed. **Goal monitoring** asks whether there is a better set of goals the agent could try to achieve. A failure may require repairing the plan, revising an incorrect action model, or reconsidering what is achievable; a favorable unexpected state can also make part of a plan unnecessary. (pp. 390–392)[^a]

The levels matter because repairing a local precondition need not rescue the whole plan. AIMA distinguishes insufficient paint that can doom a remaining plan, an empty can that retries cannot fix without a better model or different repair, and a depleted battery that can leave an agent in an unrecoverable dead end. These are different limits on local monitoring and replanning. Monitoring provides evidence for deciding what to do next; it does not guarantee successful recovery. (pp. 390–392)[^a]

## Boundaries and application

[[means-ends-analysis|Means–ends analysis]] concerns selecting operators through differences; monitoring concerns whether action remains appropriate during execution. [[contextual-control-model|Contextual Control Model (COCOM)]] describes patterns and conditions of control rather than supplying this planning algorithm. Recovery also depends on the access and competence discussed in [[function-allocation|Function allocation and function congruence]].

In an Atlas example, an assistant checks that an input file exists, that the full analysis can still meet its constraints, and that the requested output remains wanted. The last check may require asking the task owner. Goal monitoring in a formal planning account does not authorize a software agent to replace a user's goals; [[organizational-authority|Organizational authority]] addresses a different issue.

[^a]: Russell, Stuart J., and Peter Norvig. _Artificial Intelligence: A Modern Approach_. Fourth edition, Global Edition. Pearson Education Limited, 2022. [Official edition page](https://aima.cs.berkeley.edu/global-index.html). Locators refer to this Global Edition.
