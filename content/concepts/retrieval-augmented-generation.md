---
title: Retrieval-augmented generation
---

# Retrieval-augmented generation

**Retrieval-augmented generation (RAG)** combines retrieval from an external knowledge source with a generative language model: retrieved material supplies additional information for producing an output. In a common LLM workflow, relevant passages are retrieved and included with the user's question in the model's context. (§II, Fig. 2)[^3]

The language model can remain fixed. REPLUG, for example, prepends retrieved documents to the input of a frozen black-box language model; its LSR variant trains the retriever using that model's scores. Additional task-specific training is therefore an implementation choice, and a frozen generator does not imply a frozen retriever. (§§3–4)[^2]

Retrieval can use lexical matching, dense vectors, or hybrid methods. Lewis and colleagues compare dense retrieval with BM25; later systems also combine retrieval methods. (§4.5; §II-C.2)[^1][^3] Retrieval can also happen during generation: FLARE uses a tentative upcoming sentence as a query and retrieves material to regenerate it when low-confidence tokens occur.[^4]

## The original RAG models (2020)

Lewis and colleagues combine a pretrained sequence-to-sequence generator (parametric memory) with a neural retriever accessing a dense vector index of Wikipedia passages (non-parametric memory). The generator conditions on the input and a retrieved passage. RAG-Sequence assigns a whole output sequence a probability under each retrieved passage, then sums these probabilities weighted by the retriever's distribution over the top-K passages. RAG-Token instead marginalizes over passages at each output token. (§§2–2.3, pp. 2–3)[^1] During fine-tuning, the query encoder and BART generator are updated jointly, while the document encoder and index remain fixed. (§2.4, pp. 3–4)[^1]

## Evidence in the original paper

The paper evaluates these models on open-domain question answering, generation, and fact verification. In its Jeopardy question-generation study, human evaluators judged RAG-Token more factual than BART in 42.7% of 452 paired comparisons and BART more factual in 7.1%. Here, factuality means that a statement can be corroborated by trusted external sources. These results support improved factuality in that evaluation setting. (§§3.3, 4.3, pp. 5–6)[^1]

## Boundary example

A model answering solely from fixed parameters is not retrieval-augmented in this sense. A retrieved passage can supply evidence for an answer, and its date can matter: in the paper’s index-swapping experiment, answering about 2018 world leaders with a 2016 Wikipedia index achieved 4% accuracy, compared with 68% using the 2018 index. (§4.5, pp. 7–8)[^1] Assessing factual accuracy and source support therefore requires checking both the retrieved material and the answer’s use of it.

## Relations

- **Distinct from:** a [[belief-state|Belief state]] is a distribution over hidden states in a specified decision model; a set of retrieved passages is not that distribution.
- **Possible modeling bridge:** retrieval _could_ be modeled as an [[action|Action]] whose result is an [[observation|Observation]] in a separately designed partially observable task. This is an analogy, not an identification made by Lewis and colleagues.
- **Distinct from:** a [[policy|Policy]] in a POMDP chooses actions with a sequential decision objective; RAG-Sequence and RAG-Token specify how retrieved passages condition output generation.

Related reading: [[agent-memory|Agent memory]] compares parametric and non-parametric memory with other storage architectures; [[context-window|Context window]] distinguishes available input from external storage.

[^1]: Lewis, Patrick, et al. “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.” 2020. _Advances in Neural Information Processing Systems_ 33. [https://arxiv.org/abs/2005.11401v4](https://arxiv.org/abs/2005.11401v4) (version 4; inspected §§2–2.4, 3.3, 4.3, 4.5, pp. 2–8). [https://doi.org/10.48550/arXiv.2005.11401](https://doi.org/10.48550/arXiv.2005.11401).

[^2]: Shi, Weijia, Sewon Min, Michihiro Yasunaga, Minjoon Seo, Rich James, Mike Lewis, Luke Zettlemoyer, and Wen-tau Yih. “REPLUG: Retrieval-Augmented Black-Box Language Models.” 2023. [arXiv:2301.12652v3](https://arxiv.org/abs/2301.12652v3), version 3, 22 May 2023; §§3–4. First submitted 30 January 2023.

[^3]: Gao, Yunfan, et al. “Retrieval-Augmented Generation for Large Language Models: A Survey.” [arXiv:2312.10997v5](https://arxiv.org/abs/2312.10997v5), version 5, 27 March 2024; §II, Fig. 2, §II-C.2. First submitted 18 December 2023.

[^4]: Jiang, Zhengbao, et al. “Active Retrieval Augmented Generation.” 2023. In _Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing_, 7969–7992. [ACL Anthology](https://aclanthology.org/2023.emnlp-main.495/). [DOI](https://doi.org/10.18653/v1/2023.emnlp-main.495). The description here is supported by the paper's abstract.
