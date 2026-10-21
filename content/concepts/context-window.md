---
title: Context window
---

For a language model, a context window is the bounded span of token positions it can process in a model invocation. The context supplied on a particular call is the actual input; the window describes a capacity constraint. Whether a service's advertised limit includes both input and generated output depends on its interface.

## What is present on this call

In the MemGPT architecture [1], Packer and colleagues distinguish **main context**, the prompt tokens available to the LLM during inference, from **external context**, information stored outside that window. Their system explicitly moves selected external information into main context through function calls. Main context includes system instructions, working context, and a queue of messages; these are that architecture's components, not requirements for every agent.

A hypothetical assistant may retain last month's conversation in a database while receiving only today's messages. Retention does not imply that the old conversation is present in this invocation. Retrieving a relevant excerpt can change that; it does not make the entire database simultaneously visible to the model.

A larger window is a capacity, not a guarantee that the model will use every included fact correctly. [[agent-memory|Agent memory]] concerns mechanisms for retaining and accessing information across steps. [[retrieval-augmented-generation|Retrieval-augmented generation]] supplies selected external material. Neither should be equated with window size. In [[pragmatics]], “context” can refer to the wider communicative situation, not just model input tokens.

## Sources

[1] Packer, Charles, et al. _MemGPT: Towards LLMs as Operating Systems_. arXiv:2310.08560, version 2, 2024. See §1 and §§2.1–2.3 for the capacity constraint and main/external-context distinction. [Versioned record](https://arxiv.org/abs/2310.08560v2), [full text](https://arxiv.org/pdf/2310.08560v2).
