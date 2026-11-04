---
title: Conversational grounding
---

Conversational grounding is the collaborative process through which participants establish that they have understood one another sufficiently for their current purposes. This entry follows Clark and Brennan's account of human communication (pp. 128–129).[^1]

## Grounding criterion

The criterion is that participants mutually believe that the partners have understood what the contributor meant well enough for current purposes; understanding can never be perfect. Clark and Brennan attribute this formulation to Clark and Schaefer (1989) and Clark and Wilkes-Gibbs (1986), discussed here through their chapter (p. 129).[^1] The criterion changes with collective purposes. Participants may also set different standards: one person's belief that they understand does not settle the other's doubts about that understanding (pp. 136, 140).[^1]

## Evidence of understanding

A contribution involves both a presentation phase and an acceptance phase. In acceptance, the partner gives evidence that they believe they understand, and the contributor must register that evidence as sufficient (p. 130).[^1] Both phases can contain further contributions: a clarification question and its answer can be embedded within the acceptance of the original utterance (pp. 129–131).[^1]

For all or part of an utterance, the chapter distinguishes a partner not noticing it, noticing it without correctly hearing it, correctly hearing it without understanding its intended meaning, and understanding that meaning (p. 130).[^1] These distinctions help explain why a missing reply is ambiguous across [[medium-constraints-on-grounding|different media]].

Participants seek positive evidence, rather than relying only on the absence of signs of misunderstanding. Common forms include acknowledgments, an appropriate next response, and continued attention. A next response counts only insofar as it shows the intended understanding. Continued attention in face-to-face talk can itself provide evidence; silence in email is much more ambiguous (pp. 131–134, 146).[^1] An explicit confirmation after every sentence is not required: a relevant next turn can both demonstrate understanding and carry the conversation forward (p. 133).[^1]

In a hypothetical scheduling exchange, “Friday at three?” followed by “Friday 3 pm Canberra time — I can't make that” helps establish a shared interpretation while declining the proposal. A generic “OK” may provide weaker evidence about the time zone. What is sufficient depends on the task and the communication medium.

## Purpose and techniques

As collective purposes change, so do the criterion for sufficient understanding and the techniques used to meet it (pp. 135–136).[^1] Identifying a referent and registering exact wording call for different techniques. For referential identity, Clark and Brennan describe alternative descriptions, pointing or other indicative gestures, referential installments, and trial references offered for confirmation. For verbatim content, they describe verbatim displays (repeating the content), repeatable installments, and spelling. These are purpose-specific techniques (pp. 136–140).[^1]

[[least-collaborative-effort|Least collaborative effort]] concerns the work both participants do from a contribution's initiation to its mutual acceptance; an extra exchange can sometimes reduce that combined work (pp. 134–135).[^1] [[medium-constraints-on-grounding|Medium constraints on grounding]] explain why the available techniques and their costs change across communication settings (pp. 140–147).[^1]

## Boundaries and agent interpretation

Grounding updates [[common-ground|Common ground]] and is studied within [[pragmatics|Pragmatics]]. It should be distinguished from _factual grounding_ in some AI discussions: attaching a source to an answer, or using [[retrieval-augmented-generation|Retrieval-augmented generation]], does not establish that a conversational partner understood the answer. Conversely, participants can understand an assertion while disagreeing about its truth.

The original account concerns human communication. The following agent implications are Atlas design interpretations, not findings about artificial agents in the chapter: seek evidence tied to the task, such as identifying the intended table or checking an exact value, and make repair possible when that evidence is inadequate. A fluent acknowledgment alone does not demonstrate reliable internal understanding. Understanding a plan and authorizing its execution are separate questions; evidence of grounding does not by itself supply permission to act.

## Suchman: repair opportunities and unequal access

Suchman's discussion of conversation analysis uses participants' opportunities to initiate repair to examine how understanding is displayed in sequences of interaction. Her copier study also shows how progress can continue despite unequal access to what an action means in the user's task. (Chapter 7, printed p. 98; Chapter 9, printed pp. 145–151)[^2] The accounts should not be treated as identical, but Clark and Brennan also discuss continuers as passing up opportunities for repair and treat acknowledgments, relevant next turns, and continued attention as possible positive evidence. The absence of repair alone does not guarantee sufficient mutual understanding for the current purpose. (Clark and Brennan, pp. 128–134)[^1]

[[asymmetric-access-to-interactional-resources|Asymmetric access to interactional resources (analyst term)]] develops the access problem. In an Atlas application, distinguish an appropriate next response from a generic success signal; neither should be treated as evidence of authorization. These comparisons do not establish that the historical copier and modern language agents have identical interactional limits.

[^2]: Suchman, Lucy. _Human–Machine Reconfigurations: Plans and Situated Actions_. Second edition. Cambridge University Press, 2007 (copyright year; the edition states first published in print in 2006). [Publisher DOI](https://doi.org/10.1017/CBO9780511808418). Chapters 2–10 retain the 1987 study with editorial changes and added notes; Chapters 1 and 11–15 belong to the expanded edition. Locators are printed pages.

[^1]: Clark, Herbert H., and Susan E. Brennan. “Grounding in Communication.” 1991. In _Perspectives on Socially Shared Cognition_, 127–149. Especially pp. 128–140 on the grounding criterion, contributions, evidence, collaborative effort, and purpose; pp. 145–147 on medium-dependent tradeoffs. [Author-hosted chapter](https://web.stanford.edu/~clark/1990s/Clark%2C%20H.H.%20_%20Brennan%2C%20S.E.%20_Grounding%20in%20communication_%201991.pdf).
