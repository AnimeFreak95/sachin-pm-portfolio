# Case Study: Identity Verification (KYC) at 150M+ Scale & Shared Wallet Infrastructure
## Scaling Frictionless FinTech Compliance & Multi-Product Monetization

**Role:** Product Manager (Transactions: KYC, Compliance & Withdrawals)  
**Company:** Junglee Games India Pvt. Ltd.  
**Domain:** FinTech Infrastructure, Automated KYC/AML Compliance, Multi-Product Growth  
**Timeline:** 2023 – 2026  
**Primary Impact:** 40% KYC Automation | 35% CAC Reduction (D0 Conv: 2.7% ➔ 4.8%) | 38% Revenue Growth via Shared Wallet  

---

### 1. Executive Summary

In India's highly regulated real-money gaming sector, identity verification (KYC) is a mandatory legal gate before a user can transact or withdraw funds. However, KYC is historically the single highest-friction funnel step in consumer fintech—every manual document upload or verification failure triggers severe customer drop-off and inflates Customer Acquisition Costs (CAC).

As owner of the **Transactions Charter (KYC, Compliance, and Withdrawals)** across Junglee's entire product portfolio, I spearheaded the transformation of the KYC engine for a **150M+ user base**. By re-architecting the onboarding journey with **Aadhaar Lite, PAN Plus, DigiLocker 2.0, OCR fallback orchestration**, and introducing **Shared Wallet & Shared KYC** across fantasy apps, we slashed verification TAT, boosted automation by 40%, and reduced CAC by 35%.

```
      [ User Enters Verification ]
                   │
                   ▼
     ┌───────────────────────────┐
     │  Smart Route Selector     │
     │  (Aadhaar Lite / PAN Plus)│
     └─────────────┬─────────────┘
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
 ┌──────────────┐      ┌──────────────┐
 │  DigiLocker  │      │ OCR + Edge   │
 │  2.0 Unified │      │ Case Handler │
 └──────┬───────┘      └──────┬───────┘
        │                     │
        └──────────┬──────────┘
                   ▼
     ┌───────────────────────────┐
     │ Multi-Vendor Orchestrator │◄─── Hyperverge & Idfy APIs
     │ (Fallback Routing)        │     (25% TAT Reduction)
     └─────────────┬─────────────┘
                   │ Success
                   ▼
     ┌───────────────────────────┐
     │ Shared KYC & Wallet Token │────► Instant D0 Access Across
     │ (150M+ Scalable Identity) │      Portfolio (38% Revenue Growth)
     └───────────────────────────┘
```

---

### 2. The Problem & Business Friction

#### Funnel Bottlenecks
1. **Severe Onboarding Drop-off:** Initial Day-0 (D0) onboarding conversion was stuck at **2.7%**, with users abandoning during manual document photograph uploads and blurry capture errors.
2. **High CAC Burn:** High marketing spends were wasted because acquired users bounced before completing regulatory verification.
3. **Manual Verification TAT:** Edge-case documents fell into manual review queues, taking hours or days and causing user churn.
4. **Product Siloes:** A user verified in one fantasy/casual game had to repeat KYC and deposit funds separately when downloading another app in Junglee's ecosystem.

#### Strategic Objectives
* Automate verification for the majority of users via government APIs (UIDAI/DigiLocker/NSDL).
* Introduce smart fallbacks to handle edge cases without dropping into manual queues.
* Create a unified identity and wallet layer across the gaming ecosystem to unlock cross-sell potential.

---

### 3. Solution & Product Execution

#### A. Aadhaar Lite & PAN Plus Onboarding Flows
* Replaced heavy document upload steps with OTP-based, zero-friction verification gateways.
* Introduced **PAN Plus**, enabling instant NSDL database verification with minimal input fields.
* Scaled **D0 conversion from 2.7% to 4.8%** (+77% relative lift) and reduced **CAC by 35%**.

#### B. Vendor Orchestration (Hyperverge & Idfy)
* Integrated strategic third-party verification APIs with dynamic fallback logic: if one provider suffered latency or downtime, traffic automatically rerouted to the alternative.
* Reduced manual processing Turnaround Time (TAT) by **25%**, ensuring the optimal balance between compliance rigor and user velocity.

#### C. DigiLocker 1.0 & 2.0 Unified Verification
* **Phase 1 (DigiLocker + OCR):** Implemented OCR edge-case handling for blurred captures and alternate IDs, increasing the verification success rate by **24%** and improving **D14 retention by 0.2pp**.
* **Phase 2 (DigiLocker 2.0):** Executed a unified single-consent verification flow, boosting overall verification by **12%** and elevating **D14 retention by 0.35pp**.

#### D. Cross-Product Shared Wallet & Shared KYC
* Architected a portfolio-wide tokenized KYC and wallet state. Once verified on any Junglee property, the user was instantly recognized and verified across the fantasy product lineup.
* Advanced **D0 cross-sell conversion by 18%** and unlocked **38% overall top-line revenue growth**.

---

### 4. Measurable Business Outcomes

| Metric | Baseline | Post-Implementation | Business Impact |
| :--- | :--- | :--- | :--- |
| **KYC Workflow Automation** | Standard manual review | **40% Gain in Automation** | Slashed operational overhead across 150M+ user base |
| **Day-0 (D0) Onboarding Conversion** | 2.7% | **4.8% (+77% relative lift)** | Transformed initial onboarding through Aadhaar Lite & PAN Plus |
| **Customer Acquisition Cost (CAC)** | Baseline | **35% Reduction** | Massive marketing efficiency gain on paid acquisition channels |
| **Top-Line Revenue Growth** | Baseline | **38% Overall Revenue Growth** | Direct result of cross-product Shared Wallet & Shared KYC |
| **D0 Cross-Sell Conversion** | Baseline | **+18% Advance** | Seamless portfolio adoption without repeated onboarding |
| **Manual Processing TAT** | Standard queue | **25% Reduction** | Driven by Hyperverge & Idfy API integration & fallbacks |
| **Verification Success Rate** | Baseline | **+24% Increase** | Delivered via DigiLocker & OCR edge-case pipeline |
| **D14 Retention Improvement** | Baseline | **+0.35pp Lift** | Driven by DigiLocker 2.0 unified verification workflow |

---

### 5. Technical & Leadership Takeaways

1. **Compliance as a Conversion Engine:** Regulatory hurdles are often treated as blockers, but streamlining them into single-tap experiences creates an enormous competitive moat.
2. **Fallback Orchestration is Non-Negotiable at Scale:** Relying on a single government or third-party API at 150M+ user scale is disastrous. Automated health checks and dynamic fallbacks protect conversion rates during outages.
3. **Ecosystem Thinking Drives Compounding Growth:** Shared KYC and Shared Wallets turned individual app silos into a unified player network, unlocking 38% revenue growth with zero extra acquisition cost.
