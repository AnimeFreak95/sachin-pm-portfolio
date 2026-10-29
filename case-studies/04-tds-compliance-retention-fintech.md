# Case Study: FinTech Tax Compliance & User Retention Optimization
## Turning Regulatory Mandates into Retention Engines (TDS Architecture)

**Role:** Product Manager (Transactions: KYC, Compliance & Withdrawals)  
**Company:** Junglee Games India Pvt. Ltd.  
**Domain:** FinTech Infrastructure, Tax Deduction at Source (TDS), Retention Optimization, AML Controls  
**Timeline:** 2023 – 2024  
**Primary Impact:** +10% D7 Retention | -25% Support Tickets | +1.5pp D30 Retention & +3.2% Revenue  

---

### 1. Executive Summary

Regulatory shifts in India's digital entertainment and gaming landscape mandated real-time 30% Tax Deducted at Source (TDS) on net winnings at the time of withdrawal. For users accustomed to receiving their entire balance, seeing a steep statutory deduction created immediate psychological shock, driving negative App Store reviews, surge in support tickets, and post-withdrawal churn.

To solve this, I conducted deep customer journey mapping to diagnose the friction points. I conceptualized and shipped two key product solutions:
1. **Automated In-App TDS Certificate & Breakdown Feature:** Providing transparent, real-time tax accounting that users could download for their official tax filings.
2. **Targeted TDS Cashback Incentive for Initial Withdrawals:** Reimbursing the tax deduction as bonus game credits on initial cashouts to protect user lifetime value (LTV).
3. **Risk & Payment Controls Redesign:** Elevated compliance to 98% while reducing Anti-Money Laundering (AML) risk.

---

### 2. Customer Journey Mapping & Friction Diagnosis

```
               [ User Requests Withdrawal ]
                            │
                            ▼
               [ Immediate Tax Shock! ]
       (Negative CSAT, Support Influx, Churn)
                            │
        ┌───────────────────┴───────────────────┐
        ▼                                       ▼
  [ Product Solution 1 ]                  [ Product Solution 2 ]
  Automated TDS Certificate &             TDS Cashback Incentive
  Itemized Net Winnings Ledger            (Initial Withdrawals)
        │                                       │
        ▼                                       ▼
  -25% Support Tickets                    +1.5pp D30 Retention
  +10% D7 Retention & Higher NPS          +3.2% Overall Revenue
```

#### Key Pain Points Uncovered
* **Lack of Transparency:** Users felt the platform was "stealing" funds because the gross-to-net winnings formula was complex and opaque.
* **Filing Inconvenience:** High-value players had no straightforward mechanism to claim their tax credits during annual income tax return (ITR) filings.
* **First-Withdrawal Cliff:** New players who experienced a deduction on their first withdrawal rarely deposited again.

---

### 3. Product Execution & Features

#### A. In-App TDS Certificate Generation & Transparent Ledger
* Designed a clean, itemized tax deduction statement accessible directly from the transaction passbook.
* Automated real-time TDS certificate generation with legal-grade cryptographic hashes, enabling users to download their official Form 16A in PDF format with 1 tap.
* **Impact:** Delivered a **10% lift in Day-7 (D7) retention** and a **25% reduction in support tickets**, directly boosting customer NPS.

#### B. First-Withdrawal TDS Cashback Incentive Model
* Designed and calibrated a retention-positive cashback algorithm: on a user's initial withdrawal, the deducted TDS amount was credited back into their account as non-withdrawable promotional game credits.
* Engineered backend controls to prevent gaming of the incentive system while preserving unit economics.
* **Impact:** Elevated **D30 retention by 1.5 percentage points** and drove a **3.2% increase in overall revenue**.

#### C. Comprehensive Risk, AML & Payment Controls Overhaul
* Partnered closely with legal and engineering stakeholders to overhaul the transaction risk engine.
* Integrated automated flag rules for suspicious velocity, multi-account collusion, and source-of-funds anomalies.
* Elevated regulatory compliance to **98%** and substantially mitigated AML vulnerability.

---

### 4. Measurable Business Outcomes

| Metric | Baseline | Post-Launch | Business Impact |
| :--- | :--- | :--- | :--- |
| **Day-7 (D7) Retention** | Baseline | **+10% Lift** | Eliminated deduction surprise via transparent tax ledgers |
| **Support Ticket Volume** | Surge peak | **25% Reduction** | Directly lowered customer support workload and resolved user confusion |
| **Day-30 (D30) Retention** | Baseline | **+1.5pp Increase** | Driven by first-withdrawal TDS cashback incentive |
| **Platform Revenue Growth** | Baseline | **+3.2% Revenue Increase** | Higher re-deposit rate and sustained player lifetime value |
| **Regulatory Compliance** | Fragmented | **98% Compliance** | Hardened controls against strict tax and AML regulations |

---

### 5. Core PM Reflection

* **Transparency Builds Trust:** Even bad news (mandatory taxes) is accepted by users if delivered with absolute mathematical clarity and utility (one-click certificates for tax filing).
* **Aligning Economics with Retention:** Treating regulatory tax friction as an opportunity to introduce smart cashback incentives generated positive ROI, turning a potential churn vector into a 3.2% revenue booster.
