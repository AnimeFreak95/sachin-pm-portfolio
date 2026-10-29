# Case Study: Multi-Modal Search & UGC Moderation Scalability
## Transforming Discovery & Content Quality at Sportsbet Australia

**Role:** Product Manager (AI, Search & Engagement)  
**Company:** Sportsbet Australia / Junglee Games  
**Domain:** Discovery Systems, Content Classification, Feed Moderation, Video Engagement  
**Timeline:** 2024 – 2026  
**Primary Impact:** +15% Video Asset CTR | +7% Bet Conversion Lift | Automated UGC Moderation at Scale  

---

### 1. Executive Summary

As sports gaming platforms shift towards social, creator, and media-driven content, static match listings no longer satisfy high-intent sports fans. Users crave real-time insights, expert tipster commentary, live video streams, and bite-sized replays directly in their discovery flow. However, introducing user-generated content (UGC) and open feeds brings massive moderation risks and latency bottlenecks.

Leading AI, Search, and Engagement initiatives for **Sportsbet Australia**, I spearheaded two core transformations:
1. Re-imagining **Rich Content Search** from a plain text event-listing index into a **multi-modal discovery engine** combining User Profiles, Live Streams, and Replay cards.
2. Architecting the **GGWP content classification system** and feed moderation PRD to automatically filter, categorize, and verify UGC bet descriptions at scale while optimizing conversion-focused feed UX.

```
      [ Search Query / Feed Scroll ]
                     │
                     ▼
       ┌───────────────────────────┐
       │ Multi-Modal Search Engine │
       └─────────────┬─────────────┘
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
  ┌───────────┐┌───────────┐┌───────────┐
  │ Live Video││  Creator  ││ Replays & │
  │  Streams  ││ Profiles  ││ Highlights│
  └─────┬─────┘└─────┬─────┘└─────┬─────┘
        │            │            │
        └────────────┼────────────┘
                     ▼
       ┌───────────────────────────┐
       │   GGWP UGC Classification │────► Streamlined Moderation &
       │  (NLP Bet Description ML) │      Scalable Backend Logic
       └─────────────┬─────────────┘
                     │
                     ▼
      [ +15% Video CTR | +7% Bet Conversion Lift ]
```

---

### 2. The Problem & Market Dynamics

#### Core Challenges
1. **Low Engagement on Video Assets:** High-value live video streams and expert replay clips were hidden behind deep menu trees, leading to underutilized broadcasting rights.
2. **Text-Only Discovery Limitations:** Search results were rigid tabular match-times with zero contextual storytelling or tipster proof-of-performance.
3. **UGC Moderation Bottleneck:** User-generated bet descriptions and shared slips grew exponentially. Manual review could not keep up with real-time sporting kick-offs, threatening platform scalability and community guidelines.

---

### 3. Solution & Product Execution

#### A. Multi-Modal 'Rich Content Search'
* Redesigned the search information architecture to prioritize multi-format media cards:
  * **Live Stream Badges:** Promoted currently live matches with instant inline preview clips.
  * **Creator & User Profiles:** Surfaced verified tipsters, track records, and top community punters.
  * **Replay Cards:** Highlighted key match moments, turning historical game events into re-engagement hooks.
* **Outcome:** Drove a **15% lift in video-asset CTR**, turning search from an administrative lookup tool into an active discovery channel.

#### B. GGWP Content Classification System
* Architected the backend classification logic to inspect, tokenize, and categorize user-generated bet descriptions and feed posts in real time.
* Applied classification models to flag compliance violations, toxic banter, and fraudulent tip claims without degrading submission latency.
* Streamlined moderation queues by auto-approving 80%+ safe content, drastically improving backend scalability.

#### C. Feed Moderation PRD & Targeted UX Optimizations
* Led end-to-end user research to understand what information users need before tailing a shared bet.
* Designed modular bet cards that surfaced essential contextual badges (e.g., form indicators, odds fluctuations) while hiding noise.
* Optimized feed ranking to prioritize high-quality moderated discussions, yielding a **7% increase in bet conversion rates**.

---

### 4. Measurable Business Outcomes

| Metric | Baseline | Post-Launch | Business Impact |
| :--- | :--- | :--- | :--- |
| **Video Asset CTR** | Tabular listing | **+15% Lift in CTR** | Significant monetization of media assets & live stream viewership |
| **Bet Conversion Rate** | Static feed baseline | **+7% Increase** | Delivered via targeted UX optimizations & moderated high-intent feeds |
| **UGC Moderation Scalability** | Manual bottleneck | **Automated via GGWP** | Enhanced backend logic & unlocked frictionless user-generated bet sharing |

---

### 5. Strategic Learnings

1. **Search is a Discovery Surface, Not Just an Index:** Users rarely know the exact technical title of what they want; surfacing rich media and social signals generates serendipitous conversion.
2. **Community Trust Drives Conversion:** Moderation is not merely a risk mitigation function—it directly drives revenue. High-signal, low-spam feeds increased user trust, leading to higher bet conversion rates (+7%).
