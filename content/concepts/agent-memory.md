---
title: Agent memory
---

In LLM agent systems, “memory” can refer to several mechanisms for retaining and making information available across steps or interactions. A useful description specifies what is stored, where it is stored, how it is updated, and how it is retrieved. The term alone does not identify one architecture or imply human-like recollection.

## Two documented uses

**MemGPT** [^1] separates the current prompt from external storage. Its working context is editable text inside the prompt; recall storage retains messages, while archival storage holds additional text outside the immediate input. Function calls move or edit information across these tiers. Thus, persistent storage and the [[context-window|Context window]] have different roles even when both participate in a memory system.

The original [[retrieval-augmented-generation|RAG]] paper [^2] instead calls the pretrained generator's parameters **parametric memory** and its indexed passage collection **non-parametric memory**. This distinction concerns where knowledge is represented and accessed. A passage index is not necessarily a record of an agent's own experiences, and these labels do not map one-to-one onto MemGPT's tiers.

## Retention is not successful recall

A hypothetical assistant might save a revised project deadline but retrieve an older note on the next turn. Storage succeeded; selecting current, relevant information did not. A memory description should therefore distinguish retention, retrieval, and the use of retrieved material. Summaries and stored statements may also be incomplete or wrong.

Neither stored text nor model parameters are automatically a POMDP [[belief-state|Belief state]]. And an agent's records do not by themselves establish [[common-ground|Common ground]] with its user: the user may have different expectations about what the system remembers.

[^1]: Packer, Charles, et al. _MemGPT: Towards LLMs as Operating Systems_. arXiv:2310.08560v2, 2024, §2 and Figure 3. [Record](https://arxiv.org/abs/2310.08560v2), [full text](https://arxiv.org/pdf/2310.08560v2).

[^2]: Lewis, Patrick, et al. “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.” 2020. _Advances in Neural Information Processing Systems_ 33, §2. [Paper](https://arxiv.org/abs/2005.11401v4).
