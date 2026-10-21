---
title: Agent
---

# Agent

An **agent**, in Russell and Norvig's perception–action framework, is a system viewed in terms of receiving information from its environment through sensors and acting on that environment through actuators. These interfaces can be physical or software-based. The agent perspective is a tool for analyzing interaction, not an absolute division of everything into agents and non-agents. [1, §2.1]

## Percepts, behavior, and implementation

A **percept** is the content received through an agent's sensors; its **percept sequence** is its complete perceptual history. A percept need not reveal the full state of the environment. An **agent function** describes the action selected for each possible percept sequence. In the deterministic, sequence-based formulation, [1, §§2.1, 2.3.2]

$$
f: P^* \rightarrow A,
$$

where $P$ is the set of possible percepts, $P^*$ is the set of finite percept sequences, and $A$ is the set of available actions. This describes behavior; it does not require an implementation to store the entire history or a lookup table. Randomized behavior instead requires probabilities for the possible actions. [1, §2.1, including p. 55, note 1]

An **agent program** is a concrete implementation of an agent function. It runs on an **architecture** that supplies percepts and carries out actions. In AIMA's usual program skeleton, the program receives the current percept and returns an action; internal state can preserve information from earlier percepts. The function's history-based description and the program's immediate input are therefore different notions. [1, §§2.4–2.4.1]

## Rationality and autonomy

Being an agent does not imply being rational. A **rational agent** chooses an available action with the greatest expected performance, given its percept history and built-in knowledge. Rationality is relative to the performance measure, available actions, prior knowledge, and evidence; it does not imply omniscience or guaranteed success. A performance measure evaluates behavior, even when the agent does not explicitly represent that measure. [1, §§2.2.1–2.2.3]

In this account, **autonomy** concerns reliance on the agent's own percepts and learning rather than only its designer's prior knowledge. It is a matter of degree, and initial knowledge can help an agent survive long enough to learn. This use of autonomy should be distinguished from an engineering permission to operate without human approval. [1, §2.2.3]

## Environment and task specification

The **environment** is the part of the world relevant to the agent's perceptions and actions under the chosen boundary. For example, when a file-editing assistant is the agent, incoming messages and file contents can be sensory inputs, and displayed replies and file writes can be actions. Users and the files being edited belong to the environment in this example; the assistant's decision program and execution architecture belong to the agent. A software interface can mediate this boundary without making the entire operating system the boundary. [1, §§2.1, 2.4]

A **task environment** is described by **PEAS**: the performance measure, environment, actuators, and sensors. It specifies both how behavior is evaluated and how interaction occurs. Task environments can be partially observable, nondeterministic, dynamic, or continuous; the general agent framework does not require a POMDP. [1, §2.3]

AIMA's simple vacuum-world agent senses its location and local dirt, then moves or cleans. A reflex implementation can choose from the current percept alone. This illustrates why explicit planning, language, and an LLM are not requirements of the broad framework. [1, §§2.1, 2.4.2]

## Related concepts

- [[action|Action]] and [[observation|Observation]] describe a particular POMDP formulation, with additional assumptions about transitions and observations.
- [[policy|Policy]] is a related decision rule. The belief-state policy in that entry uses a [[belief-state|belief state]], while the agent function above uses percept history; the two descriptions should not be conflated.
- [[agent-memory|Agent memory]] concerns retained information. Memory can support history-dependent behavior, but a simple reflex agent need not use earlier percepts. [1, §2.4.2]

## Sources

[1] Russell, Stuart J., and Peter Norvig. _Artificial Intelligence: A Modern Approach_. Fourth edition, Global Edition. Pearson Education Limited, 2022. Chapter 2: §2.1, pp. 54–56; §2.2, pp. 57–60; §2.3, pp. 60–65; §§2.4–2.4.2, pp. 65–67. [Official edition page](https://aima.cs.berkeley.edu/global-index.html). Page numbers refer to this Global Edition.
