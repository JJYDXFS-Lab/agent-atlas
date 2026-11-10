---
title: Multiverse analysis
---

# Multiverse analysis

**Multiverse analysis**, as proposed by Steegen, Tuerlinckx, Gelman, and Vanpaemel (2016), starts with one set of raw observations and several reasonable ways to prepare it for a specified statistical analysis. Each valid combination of coding, transformation, and exclusion choices produces an analysis dataset. These combinations can be understood as paths through an analysis decision space. The researcher runs the analysis across the datasets, presents the results, and examines which choices account for their variation. A list of possible paths becomes a multiverse analysis through this execution and comparison. (pp. 702–703, 706–707)[^1]

## From choices to results

In the paper's example, a relationship-status response, “dating or involved with only one partner,” could be coded as single, coded as in a relationship, or excluded as ambiguous. Combined with other reasonable choices about fertility classification, cycle-day estimation, and exclusions, each option changes which dataset is analyzed. The authors discard inconsistent combinations: they do not pair exclusion by reported cycle length with next-onset estimation by computed length, or exclusion by computed length with estimation by reported length. The resulting worked multiverses contain 120 datasets in Study 1 and 210 in Study 2, rather than all 180 and 270 initially enumerated combinations. (Table 1, p. 705; p. 706)[^1]

For each outcome, the authors apply the original study's analysis—ANOVA or logistic regression examining the fertility × relationship-status interaction—to every valid dataset. For Study 2 social political attitudes, coding the ambiguous response as single generally yields a significant interaction, while coding it as in a relationship yields nonsignificant interactions; excluding it makes results vary with the other processing choices. Figure 2 maps these results back to their choices. The authors present their reanalysis as a hypothetical illustration covering a subset of possible processing choices, which could differ from the original researchers' own multiverse. (pp. 704–705, 707–708)[^1]

## Scope and interpretation

What counts as a reasonable alternative depends on the design, question, and substantive judgment. Incompatible combinations are excluded, while the authors recommend including all plausible construction alternatives, including those considered less preferable. (pp. 706–707, 709)[^1] The paper's principal aim is transparency about fragility and consequential choices, not a formal test of selective reporting, a single evidence score, or a universal robustness cutoff. The authors do discuss averaging p values as a possible step toward a more formal summary when all processing choices seem plausible; they do not require it as the method's output. (pp. 709–710)[^1]

The 2016 demonstration holds the analysis choices largely fixed while varying data construction. The authors expressly suggest extending the exercise to reasonable choices of statistical model and possibly crossing a model multiverse with the data multiverse; that extension should not be mistaken for what their worked example already did. (p. 710)[^1]

As an Atlas interpretation, paths derived from the same observations are not independent replications, and the fraction passing a significance threshold is not the probability that a claim is true.

## Agent application and related concepts

An Atlas application is a data-analysis agent that records each preprocessing choice and its reason, enforces dependencies between choices, executes the valid analyses, and connects each result to the decisions that produced it for human scrutiny. Several answers from an agent or several random runs are not automatically a multiverse: the alternatives must address defensible analysis decisions on shared data, and their outcomes must be compared. [[problem-representation|Problem representation]] concerns how a task's representation shapes available operations; here the represented alternatives are explicitly executed and compared. [[decision-premises|Decision premises]] concerns the factual and value commitments from which a decision is reached; recording premises may clarify why a path was admitted without making the concepts equivalent. [[agent|Agent]] supplies the broader agent context, not evidence that Steegen and colleagues proposed an agent implementation.

[^1]: Steegen, Sara, Francis Tuerlinckx, Andrew Gelman, and Wolf Vanpaemel. “Increasing Transparency Through a Multiverse Analysis.” _Perspectives on Psychological Science_ 11, no. 5 (2016): 702–712. [DOI](https://doi.org/10.1177/1745691616658637); [author-hosted published paper](https://sites.stat.columbia.edu/gelman/research/published/multiverse_published.pdf). Inspected printed pp. 702–710, including Table 1 (p. 705) and Figures 1–2 (pp. 706–708).
