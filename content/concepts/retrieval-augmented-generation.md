---
title: Retrieval-augmented generation
---

# Retrieval-augmented generation

**Scope:** The retrieval-augmented generation (RAG) models introduced by Lewis and colleagues (2020) [1], not a claim that every later system called RAG shares the paper's architecture.

## In the original paper

Lewis and colleagues combine a pretrained sequence-to-sequence generator (parametric memory) with a neural retriever accessing a dense vector index of Wikipedia passages (non-parametric memory). Retrieved passages condition the generation of an output from an input. Their RAG-Sequence formulation conditions on the same retrieved passage for the whole output sequence, while RAG-Token permits a different passage to be used for each generated token. These are model formulations tested on knowledge-intensive natural-language tasks, not a general theorem that retrieved material is correct.

Retrieval supplies selected external context, not necessarily a verified citation, a correct answer, or an independently maintained memory of past interactions. The paper reports evaluations against baselines on open-domain question answering and generation tasks; performance in that experimental scope does not establish reliability for every corpus or deployment. Its abstract explicitly frames updating knowledge and providing provenance as motivating challenges rather than problems proved solved by every generated answer.

## Boundary example

A model answering solely from fixed parameters is not retrieval-augmented in this sense. A model supplied with a passage found at inference time _may_ use retrieval-conditioned generation, but copying a plausible yet incorrect passage still produces an incorrect answer. Retrieval is an information-access mechanism, not a guarantee of grounding.

## Relations

- **Distinct from:** a [[belief-state|Belief state]] is a distribution over hidden states in a specified decision model; a set of retrieved passages is not that distribution.
- **Possible modeling bridge:** retrieval _could_ be modeled as an [[action|Action]] whose result is an [[observation|Observation]] in a separately designed partially observable task. This is an analogy, not an identification made by Lewis and colleagues.
- **Distinct from:** a [[policy|Policy]] in a POMDP chooses actions with a sequential decision objective; RAG-Sequence and RAG-Token specify how retrieved passages condition output generation.

Related reading: [[agent-memory|Agent memory]] compares parametric and non-parametric memory with other storage architectures; [[context-window|Context window]] distinguishes available input from external storage.

## Sources

[1] Lewis, Patrick, et al. “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.” 2020. _Advances in Neural Information Processing Systems_ 33. [https://arxiv.org/abs/2005.11401v4](https://arxiv.org/abs/2005.11401v4) (author abstract and paper, version 4). [https://doi.org/10.48550/arXiv.2005.11401](https://doi.org/10.48550/arXiv.2005.11401).
