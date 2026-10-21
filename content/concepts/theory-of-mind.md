---
title: Theory of mind
---

Theory of mind (ToM) concerns attributing mental states, such as beliefs, desires, and intentions, to oneself or others. In computational research, the term also labels tasks that test whether a system can reason about such states. Success on a task is evidence about that tested behavior, not a demonstration of consciousness or a complete human-like capacity.

## Beliefs can differ from reality

In a hypothetical false-belief scenario, a person leaves a key in a drawer and does not see someone move it to a shelf. Reasoning about where the person believes the key is requires separating their information from the actual location. A second-order question asks what one person believes another person believes.

This is a different use of “belief” from a POMDP [[belief-state|Belief state]], which is a probability distribution over specified hidden states. A model of another person's beliefs could be incorporated into a decision problem, but it requires additional modeling choices.

## A computational example

Wilf and colleagues' **SimToM** (2024) [1] separates perspective-taking from question answering. First, a language model filters a story to events the relevant character knows about; then it answers a question using that filtered account. This is a concrete implementation of perspective-taking for the paper's benchmarks, not a general definition of ToM.

The paper evaluates ToMI and BigTOM story-based tasks. Results do not establish that the same procedure reliably infers a real user's unspoken expectations. In an assistant interaction, “the user knows the system cannot see the file” is a hypothesis about the user's beliefs; actual file access is a separate system property. [[conversational-grounding|Grounding]] can supply conversational evidence about that hypothesis, while [[common-ground|Common ground]] concerns what participants take to be shared.

## Sources

[1] Wilf, Alex, Sihyun Shawn Lee, Paul Pu Liang, and Louis-Philippe Morency. “Think Twice: Perspective-Taking Improves Large Language Models' Theory-of-Mind Capabilities.” 2024. _ACL 2024_, 8292–8308. See §§1–4 for the conceptual framing, first- and second-order tasks, and the two-stage method. [Paper and publication record](https://aclanthology.org/2024.acl-long.451/), [full text](https://aclanthology.org/2024.acl-long.451.pdf).
