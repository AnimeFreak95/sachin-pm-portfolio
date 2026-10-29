# Case Study: Operationalizing LLMs & Conversational AI at Scale
## Apollo AI & AI Betting Assistant Evaluation Engine

**Role:** Product Manager (AI, Search & Engagement)  
**Company:** Sportsbet Australia / Junglee Games  
**Domain:** Generative AI, Conversational Agents, LLM Evaluation Frameworks  
**Timeline:** 2024 – 2026  
**Primary Impact:** +6pp New User Bet Placement | +20% CSAT Improvement | +10% Bet Conversion Uplift  

---

### 1. Executive Summary

In high-stakes sports gaming and betting, user engagement hinges on rapid, contextual decision-making. However, new and casual users frequently face decision paralysis caused by complex odds, overwhelming market selections, and dense navigation hierarchies.

To solve this, I spearheaded the productization of **Apollo AI** (conversational chatbot) and an **AI Betting Assistant**. Crucially, the biggest challenge in deploying LLMs in regulated consumer tech is **model hallucination and reliability**. I architected an end-to-end **Offline Evaluation Framework using Golden Datasets** and rigorous pass/fail criteria, enabling continuous model refinement, token cost optimization, and safe production deployment.

```
       [ User Query / Context ]
                  │
                  ▼
      ┌─────────────────────────┐
      │   Apollo AI Prompt &    │◄──── Prompt Optimization &
      │   Context Injection     │      Token Economics
      └───────────┬─────────────┘
                  │
                  ▼
      ┌─────────────────────────┐
      │   Candidate LLM Output  │
      └───────────┬─────────────┘
                  │
     Offline / Continuous Eval
                  ▼
      ┌─────────────────────────┐
      │  Golden Dataset Engine  │────► Pass / Fail Metrics & Scoring
      │ (Factual, Policy, Bets) │      (CSAT +20%, Zero Hallucination)
      └───────────┬─────────────┘
                  │ Validated
                  ▼
      [ High-Converting Bet Slip / Advice ]
```

---

### 2. The Problem & User Discovery

#### Problem Statement
1. **Decision Friction for New Users:** New users had a high bounce rate before placing their first bet due to complex bet slips and market terminology.
2. **Hallucination & Compliance Risks:** Pre-trained LLMs frequently generated hallucinated odds or prohibited betting advice that violated strict Australian market regulations.
3. **Black-box Iterations:** Prompt modifications often caused regressions elsewhere in the conversation tree without engineering being aware until users complained.

#### Key Hypotheses
* *Hypothesis 1:* Providing an interactive, natural-language AI assistant to unpack betting markets in plain English will increase new-user confidence and first-bet placement.
* *Hypothesis 2:* Implementing an offline Golden Dataset evaluation pipeline will allow iterative prompt engineering with measurable regression testing, boosting answer quality and CSAT.

---

### 3. Product Strategy & Execution

#### A. Golden Dataset Offline Evaluation Framework
* **Dataset Construction:** Curated representative multi-turn conversations across high-frequency sports (AFL, NRL, Soccer, Racing), edge-case queries, and adversarial prompt injections.
* **Rubric & Pass/Fail Metrics:** Established automated scoring for:
  * **Factual Grounding:** Did the assistant cite verified platform odds and valid markets?
  * **Policy Adherence:** Did the response respect responsible gambling guidelines?
  * **Intent Resolution:** Did the response guide the user directly to a runnable bet slip?
* **Outcome:** Closed the loop between prompt engineering and production safety, driving a **20% improvement in user CSAT**.

#### B. Apollo AI Chatbot Optimization
* Performed systematic **A/B testing** on prompt variations, few-shot exemplars, and context injection window sizes.
* Optimized token usage to lower response latency without degrading recommendation accuracy.
* Expanded market coverage across long-tail sports leagues, achieving a **10% uplift in platform bet conversions**.

#### C. AI Betting Assistant UX for New Users
* Integrated context-aware recommendation chips directly into the live feed and event screens.
* Transitioned the assistant from open-ended chat to action-oriented widgets (1-tap bet slip addition).
* Resulted in a **6pp increase in bet placement among new users**.

---

### 4. Measurable Business Outcomes

| Metric | Baseline | Post-Launch | Business Impact |
| :--- | :--- | :--- | :--- |
| **New User Bet Placement** | Benchmark | **+6 percentage points** | Accelerated D0 activation and reduced early drop-off |
| **Customer Satisfaction (CSAT)** | Baseline | **+20% Improvement** | Verified via continuous model enhancement & golden dataset evaluation |
| **Platform Bet Conversions** | Baseline | **+10% Uplift** | Driven by Apollo AI chatbot prompt optimization & A/B testing |

---

### 5. Key Learnings & PM Takeaways

1. **Evaluation is 80% of Generative AI Product Management:** You cannot manage what you cannot benchmark. Golden datasets turn subjective "vibe checks" into objective regression suites.
2. **Action Beats Conversation:** Conversational bots that output conversational text create friction. Great AI products output interactive UI components (bet slips, filters, actionable deep-links).
3. **Guardrails Enable Agility:** Tight automated evaluation guardrails allowed the engineering team to iterate prompts and model versions weekly rather than waiting for monthly manual reviews.
