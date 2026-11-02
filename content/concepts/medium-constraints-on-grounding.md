---
title: Medium constraints on grounding
---

In Clark and Brennan's framework, characteristics of a communication medium shape which techniques participants can use for [[conversational-grounding|Conversational grounding]] and what those techniques cost. The chapter compares two-way personal media, setting aside one-way broadcast media. Its prediction is that participants use available techniques that minimize their combined effort (p. 140).[^1] This is a scoped account of human communication, not a general theory of every technological affordance.

## Eight constraints

The chapter identifies eight characteristics affecting grounding (pp. 140–142).[^1]

| Constraint    | What the medium permits or preserves                                                                |
| ------------- | --------------------------------------------------------------------------------------------------- |
| Copresence    | Participants share the same physical surroundings.                                                  |
| Visibility    | Participants can see one another; this need not reveal everything the other is doing or looking at. |
| Audibility    | Participants communicate through speech, with cues such as intonation.                              |
| Cotemporality | A message is received roughly as it is produced.                                                    |
| Simultaneity  | Both participants can send and receive at once.                                                     |
| Sequentiality | Turns remain in sequence without intervening turns from other conversations.                        |
| Reviewability | A received message remains available to inspect again.                                              |
| Revisability  | A sender can revise a message privately before sending it.                                          |

Cotemporality and simultaneity are distinct: the chapter contrasts a keyboard program in which both parties' typing appears letter by letter at the same time with systems that transmit only after a carriage return, which are cotemporal but not simultaneous (p. 141).[^1] Reviewability concerns inspecting a message again; revisability concerns preparation before delivery, rather than repair afterward (p. 141).[^1] Its table characterizes particular media arrangements; the keyboard examples themselves vary, so the labels should not be treated as timeless specifications for all systems bearing those names (pp. 141–142).[^1]

## Costs and who bears them

Clark and Brennan describe eleven costs, which are not independent (pp. 142–145).[^1]

| Costs                                                               | Who bears them in the chapter's account |
| ------------------------------------------------------------------- | --------------------------------------- |
| Formulation; production                                             | Speaker                                 |
| Reception; understanding                                            | Addressee                               |
| Start-up; delay; asynchrony; speaker change; display; fault; repair | Both participants                       |

These are costs of communicative activity, not eleven properties of a medium. For example, understanding unfamiliar words or concepts can be costly regardless of medium, while missing contextual cues can compound that cost (p. 143).[^1] Asynchrony concerns loss of precise timing; delay costs concern postponing an utterance to plan, revise, or produce it more carefully (pp. 143–144).[^1]

The costs can trade off: extra formulation effort may prevent faults or repairs, and costly speaker changes may favor doing more within a turn. The chapter explains a reported telephone–keyboard instruction contrast through these differences; this is an application of the framework, not a universal experimental ranking of media (pp. 145–147).[^1] [[least-collaborative-effort|Least collaborative effort]] supplies the selection principle.

## Purpose and evidence

Medium and purpose interact. A reviewable record may serve scheduling or task assignment, while visibility and immediate attention may matter for other purposes, though participants sometimes prefer to avoid interrupting or to keep their reactions unseen; group participation can also change the costs. The chapter discusses reported preferences and predicts tradeoffs, rather than declaring one medium best for every activity (p. 147).[^1]

A missing email reply illustrates a distinct evidential problem: the sender may not know whether the message was received, attended to, or understood (p. 146).[^1] See the stages and positive evidence discussed in [[conversational-grounding#Evidence of understanding|Conversational grounding]]. Reviewability alone does not resolve that uncertainty.

## Atlas extensions to agents

Applying this framework to chat, streaming, or background agent work is an Atlas design interpretation. Inspect what a particular interface actually supports: simultaneous feedback, a reviewable transcript, and private revision are different capabilities. Storing a transcript in [[agent-memory|Agent memory]] or placing it in a [[context-window|Context window]] can make text available without establishing shared understanding. Assess interface choices against the evidence required for the task, and keep evidence of understanding separate from permission to act.

[^1]: Clark, Herbert H., and Susan E. Brennan. “Grounding in Communication.” 1991. In _Perspectives on Socially Shared Cognition_, 127–149. Inspected pp. 140–147 on media constraints, grounding costs, and their interaction with purpose. [Author-hosted chapter](https://web.stanford.edu/~clark/1990s/Clark%2C%20H.H.%20_%20Brennan%2C%20S.E.%20_Grounding%20in%20communication_%201991.pdf).
