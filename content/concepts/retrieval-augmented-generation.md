---
title: Retrieval-augmented generation
---

# Retrieval-augmented generation

**Scope:** The retrieval-augmented generation (RAG) models introduced by Lewis and colleagues (2020) [^1], not a claim that every later system called RAG shares the paper's architecture.

## In the original paper

Lewis and colleagues combine a pretrained sequence-to-sequence generator (parametric memory) with a neural retriever accessing a dense vector index of Wikipedia passages (non-parametric memory). The generator conditions on the input and a retrieved passage. RAG-Sequence assigns a whole output sequence a probability under each retrieved passage, then sums these probabilities weighted by the retriever's distribution over the top-K passages. RAG-Token instead marginalizes over passages at each output token. (§§2–2.3, pp. 2–3)[^1]

The paper evaluates these models on open-domain question answering, generation, and fact verification. In its Jeopardy question-generation study, human evaluators judged RAG-Token more factual than BART in 42.7% of 452 paired comparisons and BART more factual in 7.1%. Here, factuality means that a statement can be corroborated by trusted external sources. These results support improved factuality in that evaluation setting. (§§3.3, 4.3, pp. 5–6)[^1]

## Boundary example

A model answering solely from fixed parameters is not retrieval-augmented in this sense. A retrieved passage can supply evidence for an answer, and its date can matter: in the paper’s index-swapping experiment, answering about 2018 world leaders with a 2016 Wikipedia index achieved 4% accuracy, compared with 68% using the 2018 index. (§4.5, pp. 7–8)[^1] Assessing factual accuracy and source support therefore requires checking both the retrieved material and the answer’s use of it.

## Relations

- **Distinct from:** a [[belief-state|Belief state]] is a distribution over hidden states in a specified decision model; a set of retrieved passages is not that distribution.
- **Possible modeling bridge:** retrieval _could_ be modeled as an [[action|Action]] whose result is an [[observation|Observation]] in a separately designed partially observable task. This is an analogy, not an identification made by Lewis and colleagues.
- **Distinct from:** a [[policy|Policy]] in a POMDP chooses actions with a sequential decision objective; RAG-Sequence and RAG-Token specify how retrieved passages condition output generation.

Related reading: [[agent-memory|Agent memory]] compares parametric and non-parametric memory with other storage architectures; [[context-window|Context window]] distinguishes available input from external storage.

[^1]: Lewis, Patrick, et al. “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.” 2020. _Advances in Neural Information Processing Systems_ 33. [https://arxiv.org/abs/2005.11401v4](https://arxiv.org/abs/2005.11401v4) (version 4; inspected §§2–2.3, 3.3, 4.3, 4.5, pp. 2–3, 5–8). [https://doi.org/10.48550/arXiv.2005.11401](https://doi.org/10.48550/arXiv.2005.11401).
