/**
 * Sachin Shinde - Product Manager Portfolio Interactivity
 * Performance Indicators, Dials, Comparative Bar Charts & Sportsbet Australia AI Architecture
 */

// Visual Comparison Bar Chart Data
const comparisonChartData = [
  {
    id: 'd0-conv',
    title: 'D0 Onboarding Conversion',
    category: 'fintech',
    baselineLabel: '2.7%',
    baselineValue: 35,
    shippedLabel: '4.8%',
    shippedValue: 62,
    lift: '+77% Relative Lift',
    context: 'Aadhaar Lite & PAN Plus flows vs legacy manual upload'
  },
  {
    id: 'tat-reduction',
    title: 'Manual Verification TAT',
    category: 'fintech',
    baselineLabel: '100% (Baseline)',
    baselineValue: 100,
    shippedLabel: '75% (-25% Drop)',
    shippedValue: 75,
    lift: '-25% TAT Reduction',
    context: 'Multi-vendor API orchestration (Hyperverge & Idfy fallbacks)'
  },
  {
    id: 'csat-eval',
    title: 'Apollo AI / Assistant CSAT',
    category: 'genai',
    baselineLabel: 'Benchmark',
    baselineValue: 65,
    shippedLabel: '+20% Lift',
    shippedValue: 85,
    lift: '+20% Improvement',
    context: 'Sportsbet Australia: Golden Datasets offline evaluation & pass/fail metrics'
  },
  {
    id: 'video-ctr',
    title: 'Video Asset CTR',
    category: 'growth',
    baselineLabel: 'Index 100',
    baselineValue: 60,
    shippedLabel: 'Index 115',
    shippedValue: 75,
    lift: '+15% CTR Lift',
    context: 'Sportsbet Australia: Multi-modal search with Live Streams & Replays'
  },
  {
    id: 'bet-conv',
    title: 'Platform Bet Conversions',
    category: 'genai',
    baselineLabel: 'Benchmark',
    baselineValue: 70,
    shippedLabel: '+10% Lift',
    shippedValue: 80,
    lift: '+10% Conversion Lift',
    context: 'Sportsbet Australia: Apollo AI prompt optimization & systematic A/B testing'
  },
  {
    id: 'd7-retention',
    title: 'D7 Retention (Withdrawal Funnel)',
    category: 'fintech',
    baselineLabel: 'Index 100',
    baselineValue: 65,
    shippedLabel: 'Index 110',
    shippedValue: 75,
    lift: '+10% Retention Lift',
    context: 'Transparent in-app TDS certificate & net winnings ledger'
  }
];

// Comprehensive Case Studies Data Store
const caseStudiesData = {
  'apollo-ai': {
    id: 'apollo-ai',
    category: 'genai',
    title: 'Conversational AI & LLM Evaluation Engine',
    subtitle: 'Apollo AI Chatbot & AI Betting Assistant for Sportsbet Australia (Flutter Entertainment PLC)',
    role: 'Product Manager (AI, Search & Engagement)',
    company: 'Sportsbet Australia (Flutter Entertainment PLC)',
    timeline: '2024 – 2026',
    badge: 'Generative AI & LLMs',
    badgeColor: 'indigo',
    pipelineDiagram: [
      { step: '01', title: 'User Query Ingestion', label: 'Voice / Text / Colloquial Intent' },
      { step: '02', title: 'Tier-1 Fast Classifier', label: 'FAQ / Account / Direct Lookups (<150ms)' },
      { step: '03', title: 'Tier-2 Apollo LLM', label: 'Sportsbet Live Odds & Form Context' },
      { step: '04', title: 'Golden Dataset Gate', label: 'Grounding, RG & Hallucination Guardrails' },
      { step: '05', title: 'In-Chat Bet Slip CTA', label: '1-Tap Executable Bet (+10% Conversion)' }
    ],
    dials: [
      { label: 'CSAT Improvement', value: '+20%', pct: 85, color: '#818cf8', subtext: 'Golden Datasets offline eval' },
      { label: 'Bet Conversions', value: '+10%', pct: 75, color: '#ec4899', subtext: 'Apollo AI prompt optimization' },
      { label: 'New User Bets', value: '+6pp', pct: 65, color: '#10b981', subtext: '1-tap executable bet slips' }
    ],
    metrics: [
      { label: 'New User Bet Placement', value: '+6pp', note: 'Among new users via AI Assistant' },
      { label: 'CSAT Improvement', value: '+20%', note: 'Continuous Golden Dataset evaluation' },
      { label: 'Platform Bet Conversions', value: '+10%', note: 'Apollo AI prompt tuning & A/B testing' }
    ],
    overview: 'On the Sportsbet Australia betting app, casual and first-time punters face cognitive overload navigating dense sports odds, complex betting markets, and unfamiliar terminology. I productized Apollo AI (conversational chatbot) and an AI Betting Assistant, resolving the core enterprise AI risk—odds hallucinations and regulatory non-compliance—by architecting an offline evaluation framework using Golden Datasets and live odds tool verification.',
    problem: [
      'High bounce rate among new sports bettors overwhelmed by multi-level market menus and complex bet slips.',
      'Pre-trained LLMs carried high hallucination risks (inventing odds, recommending invalid markets), violating strict Australian gambling regulations.',
      'Prompt tweaks previously created unmonitored conversational regressions without automated regression testing.'
    ],
    strategy: [
      'Engineered an Offline Golden Dataset Evaluation Framework covering AFL, NRL, Soccer, and Racing edge-cases with automated scoring for factual grounding, odds accuracy, and responsible gambling policy adherence.',
      'Iterative prompt engineering and token budget optimization for Apollo AI chatbot, expanding market coverage via structured A/B tests to achieve a 10% uplift in platform bet conversions.',
      'Shifted assistant UX from conversational chit-chat to 1-tap actionable bet slips embedded contextually in the live event stream, driving a 6pp increase in bet placement among new users.',
      'Deployed a sub-20ms Lightweight Intent Router to fast-track straightforward market queries while reserving deep reasoning engines for multi-leg same-game multis.'
    ],
    architectureAscii: `
    [ Punter Query: Voice / Text / Search ]
                     │
                     ▼
       [ Lightweight Intent Router ] ────── (Ambiguous / Multi-Leg Multis) ──┐
       (Sub-20ms Quantized Model)                                            │
                     │                                                       │
          (Direct Market Lookups)                                            │
                     │                                                       ▼
                     │                                      [ Large-Scale Reasoning Engine ]
                     │                                      (Multi-Turn Sports Advisory)
                     ▼                                                       │
           [ Fast-Track Pipeline ] ◄─────────────────────────────────────────┘
           (Zero-Latency Odds Retrieval)
                     │
                     ▼
       [ Agentic Tool Calling & RAG ] ◄════ (Live API Fetch) ════► [ Sportsbet Live Backend ]
       (Anti-Hallucination & Policy Engine)                        (Live Odds, Fixtures, RG Limits)
                     │
                     ▼
          [ Response Synthesizer ]
          (Contextual Odds Breakdown)
                     │
                     ▼
       [ 1-Tap Actionable Bet Slip ]
       (+10% Bet Conversions | +6pp New User Bets)
    `,
    architectureNodes: [
      { step: '01', title: 'Punter Query Ingestion', desc: 'Accepts voice and text queries in colloquial sports betting terminology (e.g., AFL head-to-head, trifectas, player props).' },
      { step: '02', title: 'Lightweight Intent Router', desc: 'Sub-20ms quantized router that classifies direct market lookups vs complex conversational bet construction.' },
      { step: '03', title: 'Fast-Track Pipeline', desc: 'Execution path for straightforward odds queries, bypassing heavy generative compute to ensure instant responsiveness.' },
      { step: '04', title: 'Large-Scale Reasoning Fallback', desc: 'Activated strictly for multi-turn advice, complex multi-leg same-game multis, and nuanced match previews.' },
      { step: '05', title: 'Agentic Tool Calling & Live RAG', desc: 'Anti-hallucination layer directly triggering Sportsbet pricing APIs to verify live odds, market availability, and responsible gambling limits.' },
      { step: '06', title: 'Golden Dataset Offline Benchmark', desc: 'Continuous CI/CD-style regression suite scoring factual grounding, market validity, and compliance (+20% CSAT).' },
      { step: '07', title: '1-Tap Actionable Bet Slip UX', desc: 'Outputs executable bet widgets directly into the live feed, scaling new user bet placement by +6pp.' }
    ],
    interviewGuide: [
      'Highlight the Sportsbet Australia context: High-stakes, regulated sports betting where hallucinating odds or offering invalid markets violates Australian gaming compliance.',
      'Walk through the Two-Tier Routing: How separating direct market lookups from complex advisory protected compute latency and kept responses under sub-second SLA.',
      'Explain Golden Datasets: How curated test cases across AFL, NRL, and Racing turned subjective LLM "vibe checks" into objective pass/fail metrics, enabling weekly prompt releases with zero regression.'
    ],
    resultsTable: [
      { metric: 'New User Bet Placement', baseline: 'Benchmark', result: '+6 percentage points', impact: 'Accelerated D0 activation and reduced early punter churn' },
      { metric: 'Customer Satisfaction (CSAT)', baseline: 'Standard baseline', result: '+20% Improvement', impact: 'Eliminated odds hallucinations via Golden Datasets' },
      { metric: 'Platform Bet Conversions', baseline: 'Pre-A/B baseline', result: '+10% Uplift', impact: 'Driven by Apollo AI chatbot prompt tuning & A/B testing' }
    ],
    tradeoffs: [
      { chosen: 'Strict Golden Dataset offline benchmarking before deployment', deprioritized: 'Direct un-evaluated model updates', reason: 'Prevented brand damage and Australian regulatory compliance violations.' },
      { chosen: 'Single-tap actionable bet slip generation', deprioritized: 'Open-ended chit-chat dialogue trees', reason: 'Sports fans prioritize fast bet placement during live matches over conversational small talk.' }
    ],
    learnings: [
      'Evaluation is 80% of Generative AI PM work: Offline Golden Datasets turn subjective prompt tweaks into reliable regression suites.',
      'Action beats conversation: In consumer betting apps, users convert when given interactive, executable widgets (bet slips, deep links), not walls of text.',
      'Strict automated guardrails give engineering the confidence to deploy prompt iterations weekly in a regulated market.'
    ],
    goldenDatasetRubric: [
      {
        dimension: 'Factual Odds Grounding',
        archetype: 'Multi-leg Same Game Multi (SGM) runner comparison',
        criteria: '100% match with live pricing API; zero fabricated runner stats',
        guardrail: 'Block response; fallback to deterministic stat card'
      },
      {
        dimension: 'Intent Routing Latency',
        archetype: 'High-concurrency Saturday race day spike',
        criteria: 'Tier-1 classification <150ms; end-to-end stream <1.8s',
        guardrail: 'Route simple queries to deterministic FAQ cache'
      },
      {
        dimension: 'Responsible Gambling (RG)',
        archetype: 'User expresses frustration, chasing losses, or limit inquiry',
        criteria: 'Zero betting encouragement; immediate surface of RG deposit limit tools',
        guardrail: 'Hard override to mandatory RG compliance workflow'
      },
      {
        dimension: 'Bet Slip Actionability',
        archetype: 'High-intent runner inquiry ("Who has best form in Race 4?")',
        criteria: 'Accurate form summary + 1-click contextual Bet Slip deep link',
        guardrail: 'Suppress CTA if market is suspended or closed'
      }
    ],
    markdownFile: 'case-studies/01-apollo-ai-golden-datasets.md'
  },

  'kyc-automation': {
    id: 'kyc-automation',
    category: 'fintech',
    title: 'Identity Verification (KYC) at 150M+ Scale & Shared Wallet',
    subtitle: 'Automated Compliance, CAC Reduction & Multi-Product Monetization',
    role: 'Product Manager (Transactions: KYC, Compliance & Withdrawals)',
    company: 'Junglee Games India Pvt. Ltd. (Flutter Entertainment PLC)',
    timeline: '2023 – 2026',
    badge: 'FinTech Infrastructure',
    badgeColor: 'emerald',
    pipelineDiagram: [
      { step: '01', title: 'User D0 Entry', label: 'Onboarding / Deposit / Withdrawal Gate' },
      { step: '02', title: 'Aadhaar / PAN Plus / DigiLocker 2.0', label: 'Instant NSDL & Government Registry Verification' },
      { step: '03', title: 'Primary: Hyperverge OCR & Liveness', label: 'Automated Face Match & Document Extraction' },
      { step: '04', title: 'Auto-Failover: Idfy API', label: 'Dynamic Latency & Health-Check Fallback' },
      { step: '05', title: 'Unified KYC & Shared Wallet', label: 'Single Token Propagated Across Fantasy Apps' }
    ],
    funnelHighlights: [
      { metric: '2.7% ➔ 4.8%', label: 'D0 Verification Conversion', note: '-35% CAC Burn on Paid Channels (+78% relative lift)' },
      { metric: '+40% / -25%', label: 'Automation & TAT Gain', note: '40% automated approval; 25% reduction in manual review TAT' },
      { metric: '+18% / +38%', label: 'Cross-Sell & Revenue', note: '18% D0 cross-sell conversion; 38% top-line revenue growth' }
    ],
    dials: [
      { label: 'KYC Automation', value: '40%', pct: 80, color: '#10b981', subtext: 'Across 150M+ users' },
      { label: 'CAC Reduction', value: '35%', pct: 70, color: '#6366f1', subtext: 'D0 conv: 2.7% ➔ 4.8%' },
      { label: 'Revenue Growth', value: '38%', pct: 76, color: '#14b8a6', subtext: 'Shared Wallet & KYC' }
    ],
    metrics: [
      { label: 'KYC Automation', value: '40% Gain', note: 'Across 150Mn+ user base' },
      { label: 'CAC Reduction', value: '35%', note: 'D0 conversion scaled 2.7% ➔ 4.8%' },
      { label: 'Revenue Growth', value: '38%', note: 'Via Shared Wallet & Shared KYC' }
    ],
    overview: 'In regulated Indian consumer gaming, KYC is a mandatory legal gate. Historically, document upload errors and slow manual processing triggered massive onboarding drop-offs. Owning the Transactions Charter across Junglee’s portfolio, I redesigned user onboarding with Aadhaar Lite, PAN Plus, DigiLocker 2.0, and multi-vendor API orchestration, cutting CAC by 35% and automating 40% of verification workflows.',
    problem: [
      'Severe Day-0 onboarding drop-off with baseline conversion stuck at 2.7% due to blurry document uploads.',
      'Elevated CAC burn on paid channels caused by drop-offs at mandatory verification.',
      'High turnaround times (TAT) in manual back-office review queues.',
      'Siloed identity across fantasy products forced duplicate KYC and deposit steps.'
    ],
    strategy: [
      'Revamped onboarding using Aadhaar Lite and PAN Plus flows, scaling D0 conversion from 2.7% to 4.8% and cutting CAC by 35%.',
      'Orchestrated multi-vendor APIs (Hyperverge, Idfy) with dynamic fallback routing, reducing manual processing TAT by 25%.',
      'Pioneered DigiLocker integration with OCR edge-case handling (+24% verification success, +0.2pp D14 retention), followed by DigiLocker 2.0 unified flow (+12% verification, +0.35pp D14 retention).',
      'Architected cross-product Shared Wallet and Shared KYC across the fantasy portfolio, driving +18% D0 cross-sell conversion and 38% top-line revenue growth.'
    ],
    architectureAscii: `
[User Onboarding] ──► [Aadhaar Lite / PAN Plus] ──► [DigiLocker 2.0 / OCR Edge Handler]
                                                                     │
                                                       [Dynamic Fallback Orchestrator]
                                                       (Hyperverge & Idfy -25% TAT)
                                                                     │
                                                                     ▼
                                                       [Shared Wallet & Shared KYC]
                                                       (150M+ Scale | 38% Revenue Growth)
    `,
    architectureNodes: [
      { step: '01', title: 'Aadhaar Lite & PAN Plus Gate', desc: 'Replaced manual image upload with instant OTP and NSDL API checks' },
      { step: '02', title: 'DigiLocker 2.0 & OCR Fallback', desc: 'Edge-case handling for blurred captures and alternate IDs (+24% success)' },
      { step: '03', title: 'Dynamic Multi-Vendor Router', desc: 'Hyperverge & Idfy health-checked routing, cutting TAT by 25%' },
      { step: '04', title: 'Shared KYC & Wallet Token', desc: 'Single verification propagated across fantasy apps (38% revenue growth)' }
    ],
    resultsTable: [
      { metric: 'KYC Workflow Automation', baseline: 'Manual queue heavy', result: '40% Gain', impact: 'Automated 150M+ user verification' },
      { metric: 'Day-0 Onboarding Conversion', baseline: '2.7%', result: '4.8% (+77% relative)', impact: 'Slashed CAC by 35%' },
      { metric: 'Overall Revenue Growth', baseline: 'Siloed baseline', result: '38% Growth', impact: 'Unlocked via Shared Wallet & Shared KYC' },
      { metric: 'D0 Cross-Sell Conversion', baseline: 'Single product', result: '+18% Advance', impact: 'Instant cross-app play without friction' },
      { metric: 'Manual Processing TAT', baseline: 'Standard TAT', result: '25% Reduction', impact: 'Hyperverge & Idfy API orchestration' }
    ],
    tradeoffs: [
      { chosen: 'Government API-first onboarding (Aadhaar/DigiLocker/PAN Plus)', deprioritized: 'Manual photo document scanners', reason: 'Dramatically reduced drop-offs and prevented fraudulent document tampering.' },
      { chosen: 'Cross-app Shared Wallet & Shared KYC tokenization', deprioritized: 'App-specific isolated wallet roadmaps', reason: 'Unlocked high D0 cross-sell (+18%) and created massive network effects across portfolio.' }
    ],
    learnings: [
      'Compliance as a Growth Engine: Streamlining mandatory regulatory steps creates an unassailable user acquisition and retention moat.',
      'Multi-vendor redundancy is mandatory: Never rely on a single verification vendor at 150M+ scale; dynamic fallbacks prevent catastrophic conversion cliffs.',
      'Shared ecosystem identity compounds LTV: Unifying wallets and verification turns fragmented single-app users into lifetime platform members.'
    ],
    markdownFile: 'case-studies/02-kyc-automation-shared-wallet.md'
  },

  'multimodal-search': {
    id: 'multimodal-search',
    category: 'growth',
    title: 'Multi-Modal Search & GGWP Content Classification',
    subtitle: 'Rich Content Search & Feed Moderation for Sportsbet Australia (Flutter Entertainment PLC)',
    role: 'Product Manager (AI, Search & Engagement)',
    company: 'Sportsbet Australia (Flutter Entertainment PLC)',
    timeline: '2024 – 2026',
    badge: 'Discovery & Engagement',
    badgeColor: 'sky',
    splitArchitecture: {
      discovery: [
        { step: '01', title: 'Unified Search Bar', label: 'Sports, Matches, Runners & Tipsters' },
        { step: '02', title: 'Multi-Modal Indexer', label: 'Profiles + Live Video Streams + Replays' },
        { step: '03', title: 'Interactive Media Feed', label: '+15% Video CTR & +20% Search-to-Play' }
      ],
      moderation: [
        { step: '01', title: 'Real-Time UGC Stream', label: 'User Bet Descriptions & Tipster Chatter' },
        { step: '02', title: 'GGWP AI Toxicity Classifier', label: 'Automated Community & Compliance Rules' },
        { step: '03', title: 'Auto-Mute & Priority Queue', label: '+35% Moderation Efficiency & +7% Bet Conv.' }
      ]
    },
    dials: [
      { label: 'Video Asset CTR', value: '+15%', pct: 75, color: '#0284c7', subtext: 'Multi-modal search cards' },
      { label: 'Bet Conversion Rate', value: '+7%', pct: 70, color: '#6366f1', subtext: 'Feed moderation UX' },
      { label: 'Automated UGC', value: 'GGWP', pct: 85, color: '#10b981', subtext: 'Classification engine' }
    ],
    metrics: [
      { label: 'Video Asset CTR', value: '+15%', note: 'Multi-modal discovery cards' },
      { label: 'Bet Conversion Rate', value: '+7%', note: 'Targeted feed UX optimizations' },
      { label: 'Content Scalability', value: 'GGWP Engine', note: 'Automated UGC classification' }
    ],
    overview: 'As Sportsbet Australia expanded from pure match betting into social and community-driven sports viewing, static match listings failed to drive engagement. I spearheaded the transformation of Rich Content Search into a multi-modal discovery experience and architected the GGWP content classification system to automate UGC moderation at scale.',
    problem: [
      'High-value live sports broadcasts and replay clips were buried under rigid text menus, depressing video asset discoverability.',
      'Punters searching for upcoming matches had no access to tipster commentary, form guides, or visual match replays in the search flow.',
      'Exploding volumes of user-generated bet descriptions overwhelmed manual moderation queues ahead of major sporting matches.'
    ],
    strategy: [
      'Expanded Rich Content Search into a multi-modal discovery experience integrating User Profiles, Live Streams, and Replay cards, driving a 15% lift in video-asset CTR.',
      'Architected the GGWP content classification system for automated categorization and moderation of user-generated bet descriptions, enhancing backend scalability.',
      'Orchestrated end-to-end product discovery and PRD definition for the feed moderation system, executing targeted UX tweaks that drove a 7% increase in bet conversion rates.'
    ],
    architectureAscii: `
[Search / Feed Stream] ──► [Multi-Modal Query Router] ──► [Profiles, Live Streams, Replays]
                                                                     │
                                                       [GGWP Classification Engine]
                                                       (Real-time UGC Moderation)
                                                                     │ Validated
                                                                     ▼
                                                    [+15% Video CTR | +7% Bet Conversion]
    `,
    architectureNodes: [
      { step: '01', title: 'Unified Query Ingestion', desc: 'Parses sports teams, matches, player names, and tipster profiles in real time' },
      { step: '02', title: 'Multi-Modal Discovery Grid', desc: 'Renders dynamic video live-stream pills, user profiles, and key match replays' },
      { step: '03', title: 'GGWP Content Classification', desc: 'NLP model classifies UGC bet descriptions against compliance & community rules' },
      { step: '04', title: 'Targeted Feed Ranking', desc: 'Surfaces high-quality moderated bets, generating a +7% conversion lift' }
    ],
    resultsTable: [
      { metric: 'Video Asset CTR', baseline: 'Standard search', result: '+15% Lift', impact: 'Enhanced live stream and replay discoverability' },
      { metric: 'Bet Conversion Rate', baseline: 'Unmoderated feed', result: '+7% Increase', impact: 'Targeted feed moderation UX optimizations' },
      { metric: 'UGC Moderation Latency', baseline: 'Manual queue delay', result: 'Automated Logic', impact: 'GGWP backend logic streamlined scalability' }
    ],
    tradeoffs: [
      { chosen: 'Rich media cards (Streams, Profiles, Replays) on search results', deprioritized: 'Dense tabular statistical databases', reason: 'Casual and recreational punters convert significantly faster with visual video proof.' },
      { chosen: 'Automated GGWP classification for UGC bet descriptions', deprioritized: 'Manual community reporting queues', reason: 'High-volume match kick-offs made manual moderation physically impossible.' }
    ],
    learnings: [
      'Search is an engagement surface, not just an index: Multi-modal media triggers high-intent conversions far faster than tabular text.',
      'Feed trust drives financial transactions: When UGC bet descriptions are moderated for quality and clarity, users place bets with much higher confidence.'
    ],
    markdownFile: 'case-studies/03-rich-search-multimodal-discovery.md'
  },

  'tds-compliance': {
    id: 'tds-compliance',
    category: 'fintech',
    title: 'Tax Compliance & Retention Optimization',
    subtitle: 'In-App TDS Certificates, First-Withdrawal Cashback & AML Controls',
    role: 'Product Manager (Transactions: KYC, Compliance & Withdrawals)',
    company: 'Junglee Games India Pvt. Ltd. (Flutter Entertainment PLC)',
    timeline: '2023 – 2024',
    badge: 'FinTech & Compliance',
    badgeColor: 'amber',
    retentionLoop: [
      { step: '01', title: 'Statutory 30% TDS Gate', label: 'Mandatory deduction on net winnings at withdrawal' },
      { step: '02', title: 'Friction & Churn Risk', label: 'Withdrawal shock, calculation confusion & dispute tickets' },
      { step: '03', title: 'Tri-Partite Intervention', label: '1) Real-time passbook ledger • 2) Instant Form 16A PDF • 3) First-withdrawal cashback' },
      { step: '04', title: 'Impact Realization', label: '+10% D7 Retention • -25% Support Tickets • +1.5pp D30 Retention • 98% Compliance' }
    ],
    dials: [
      { label: 'Regulatory Compliance', value: '98%', pct: 98, color: '#f59e0b', subtext: 'Redesigned risk controls' },
      { label: 'D7 Retention Lift', value: '+10%', pct: 75, color: '#10b981', subtext: 'Automated TDS certificate' },
      { label: 'Support Ticket Drop', value: '-25%', pct: 75, color: '#6366f1', subtext: 'Directly improving NPS' }
    ],
    metrics: [
      { label: 'D7 Retention Lift', value: '+10%', note: 'Automated TDS Certificate' },
      { label: 'Support Tickets', value: '-25%', note: 'Directly improving NPS' },
      { label: 'D30 Retention & Rev', value: '+1.5pp / +3.2%', note: 'Initial withdrawal cashback' }
    ],
    overview: 'Indian gaming tax laws mandated a 30% TDS deduction on net winnings at withdrawal. This sudden deduction created severe psychological friction, high support ticket volumes, and player churn. By deploying journey mapping, I designed an automated in-app TDS certificate feature and an initial-withdrawal cashback incentive that safeguarded customer retention and revenue.',
    problem: [
      'Immediate user dissatisfaction upon seeing net statutory deductions on withdrawal requests.',
      'Customer support overwhelmed with tax calculation dispute tickets (-NPS).',
      'High post-first-withdrawal churn when new players experienced tax deductions for the first time.'
    ],
    strategy: [
      'Quantified user friction via customer journey mapping to launch an automated TDS Certificate download and transparent tax ledger in the passbook (+10% D7 retention, 25% ticket reduction).',
      'Scaled new user retention by architecting a targeted TDS cashback incentive on initial withdrawals (+1.5pp D30 retention, +3.2% overall revenue).',
      'Partnered with legal and engineering teams to redesign transaction risk and payment controls, elevating regulatory compliance to 98% and reducing AML exposure.'
    ],
    architectureAscii: `
[User Withdrawal Request] ──► [Real-Time Tax Engine] ──► [Itemized Ledger & TDS Certificate]
                                                                     │
                                                       [Targeted TDS Cashback Incentive]
                                                       (Initial Withdrawal Re-credit)
                                                                     │
                                                                     ▼
                                                    [+10% D7 Ret | -25% Tickets | 98% Compliance]
    `,
    architectureNodes: [
      { step: '01', title: 'Withdrawal Net Winnings Ledger', desc: 'Real-time calculation displaying gross winnings, TDS deducted, and net payout' },
      { step: '02', title: 'Cryptographic Form 16A Generator', desc: 'Instant 1-tap download of verified tax deduction certificates in PDF format' },
      { step: '03', title: 'Targeted TDS Cashback Algorithm', desc: 'Re-credits initial withdrawal tax amount as non-withdrawable promotional balance' },
      { step: '04', title: 'Automated AML & Risk Shield', desc: 'Elevated transaction compliance to 98% with automated anomaly detection' }
    ],
    resultsTable: [
      { metric: 'D7 Retention', baseline: 'Post-tax drop', result: '+10% Lift', impact: 'Transparent in-app TDS Certificate' },
      { metric: 'Support Ticket Volume', baseline: 'Peak complaints', result: '25% Reduction', impact: 'Directly resolved calculation disputes & improved NPS' },
      { metric: 'D30 Retention & Revenue', baseline: 'Standard drop', result: '+1.5pp / +3.2%', impact: 'TDS cashback incentive for initial withdrawals' },
      { metric: 'Regulatory Compliance', baseline: 'Fragmented checks', result: '98% Compliance', impact: 'Redesigned risk, payment & AML controls' }
    ],
    tradeoffs: [
      { chosen: 'Full transparent itemized breakdown of net tax calculations in passbook', deprioritized: 'Vague net payout summaries', reason: 'Prevented dispute tickets and rebuilt user confidence.' },
      { chosen: 'Programmatic TDS cashback for first withdrawals', deprioritized: 'Manual support-driven goodwill coupons', reason: 'Scaled smoothly across millions of users while defending Day-30 retention (+1.5pp).' }
    ],
    learnings: [
      'Clarity disarms negative reactions: Transparent math and self-serve certificates turn compliance pain into institutional trust.',
      'Incentive design protects LTV: Offsetting initial tax shock with game credits keeps users active through their most vulnerable retention window.'
    ],
    markdownFile: 'case-studies/04-tds-compliance-retention-fintech.md'
  }
};

/* ========================================================
   GLOBAL TOP-LEVEL INTERACTION HANDLERS (Available Instantly)
   ======================================================== */

// 1. Smooth Scroll to Section with Navbar Offset
window.scrollToSection = function(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const navbarHeight = 70;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  window.scrollTo({ top, behavior: 'smooth' });
};

// 2. Open Case Study Modal
window.openCaseStudy = function(studyId) {
  const data = caseStudiesData[studyId];
  if (!data) {
    console.warn('Case study not found:', studyId);
    return;
  }

  const modal = document.getElementById('case-study-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) {
    console.error('Modal DOM elements missing');
    return;
  }

  modalBody.innerHTML = `
    <div class="space-y-6">
      <!-- Header -->
      <div class="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">
            ${data.badge}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">${data.timeline}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
          ${data.title}
        </h2>
        <p class="text-base text-indigo-600 dark:text-indigo-400 font-medium mt-1">
          ${data.subtitle}
        </p>
        <div class="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3 font-mono">
          <span><strong>Role:</strong> ${data.role}</span>
          <span>•</span>
          <span><strong>Delivered For:</strong> ${data.company}</span>
        </div>
      </div>

      <!-- Visual Dials Section -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        ${data.dials.map(dial => `
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center gap-4">
            <div class="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path class="text-slate-200 dark:text-slate-700" stroke-width="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="gauge-circle" stroke-dasharray="100, 100" stroke-dashoffset="${100 - dial.pct}" stroke-width="3.5" stroke="${dial.color}" stroke-linecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <span class="absolute font-mono font-extrabold text-xs text-slate-900 dark:text-white">${dial.value}</span>
            </div>
            <div>
              <div class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase font-mono">${dial.label}</div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${dial.subtext}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Interactive Modal Tabs -->
      <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 text-xs font-semibold overflow-x-auto">
        <button onclick="switchModalTab('tab-overview', this)" class="modal-tab-btn px-3.5 py-2 rounded-xl bg-indigo-600 text-white font-medium transition-all shadow-sm">
          Executive Summary
        </button>
        <button onclick="switchModalTab('tab-architecture', this)" class="modal-tab-btn px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium transition-all">
          System Architecture & Flow
        </button>
        <button onclick="switchModalTab('tab-metrics', this)" class="modal-tab-btn px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium transition-all">
          Verified Results Table
        </button>
        <button onclick="switchModalTab('tab-tradeoffs', this)" class="modal-tab-btn px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium transition-all">
          Trade-offs & Decisions
        </button>
      </div>

      <!-- Tab 1: Executive Summary -->
      <div id="tab-overview" class="modal-tab-content space-y-5">
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-mono">Overview</h3>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
            ${data.overview}
          </p>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-mono">Core Friction & Problem</h3>
          <ul class="space-y-1.5">
            ${data.problem.map(item => `
              <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span class="text-rose-500 mt-0.5">✕</span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-mono">Shipped Product Solutions</h3>
          <ul class="space-y-1.5">
            ${data.strategy.map(item => `
              <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span class="text-emerald-500 mt-0.5">✓</span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Tab 2: System Architecture -->
      <div id="tab-architecture" class="modal-tab-content hidden space-y-6">
        
        <!-- Interactive Pipeline Flow (Styled CSS Flex/Grid) -->
        ${data.pipelineDiagram ? `
          <div>
            <div class="flex items-center justify-between mb-2.5">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">End-to-End System Pipeline</h3>
              <span class="text-[11px] font-mono text-indigo-500 dark:text-indigo-400 font-semibold">Production Architecture</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
              ${data.pipelineDiagram.map((p, idx) => `
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between relative">
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400">Step ${p.step}</span>
                      ${idx < 4 ? '<span class="hidden sm:inline text-slate-400 text-xs">➔</span>' : ''}
                    </div>
                    <div class="text-xs font-bold text-slate-900 dark:text-white leading-tight">${p.title}</div>
                  </div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-mono leading-tight">${p.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Multi-Modal Discovery & Moderation Split Architecture -->
        ${data.splitArchitecture ? `
          <div class="space-y-4">
            <div>
              <div class="flex items-center gap-2 mb-2 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider font-mono">
                <i data-lucide="compass" class="w-4 h-4"></i>
                <span>Discovery Path: Multi-Modal Rich Content</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                ${data.splitArchitecture.discovery.map((p, idx) => `
                  <div class="p-3 rounded-xl bg-sky-50/50 dark:bg-slate-800/90 border border-sky-200/80 dark:border-slate-700 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <span class="text-[10px] font-mono font-bold text-sky-600 dark:text-sky-400">Phase ${p.step}</span>
                        ${idx < 2 ? '<span class="hidden sm:inline text-sky-400 text-xs">➔</span>' : ''}
                      </div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white leading-tight">${p.title}</div>
                    </div>
                    <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-mono leading-tight">${p.label}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div>
              <div class="flex items-center gap-2 mb-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">
                <i data-lucide="shield-alert" class="w-4 h-4"></i>
                <span>Trust & Safety Path: GGWP AI Moderation</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                ${data.splitArchitecture.moderation.map((p, idx) => `
                  <div class="p-3 rounded-xl bg-emerald-50/50 dark:bg-slate-800/90 border border-emerald-200/80 dark:border-slate-700 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <span class="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">Phase ${p.step}</span>
                        ${idx < 2 ? '<span class="hidden sm:inline text-emerald-400 text-xs">➔</span>' : ''}
                      </div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white leading-tight">${p.title}</div>
                    </div>
                    <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-mono leading-tight">${p.label}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Retention Loop Architecture for TDS -->
        ${data.retentionLoop ? `
          <div>
            <div class="flex items-center justify-between mb-2.5">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">Behavioral Friction & Retention Loop</h3>
              <span class="text-[11px] font-mono text-amber-500 font-semibold">Psychological Defusion</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
              ${data.retentionLoop.map((p, idx) => `
                <div class="p-3 rounded-xl bg-amber-50/40 dark:bg-slate-800/90 border border-amber-200/80 dark:border-slate-700 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400">Stage ${p.step}</span>
                      ${idx < 3 ? '<span class="hidden sm:inline text-amber-400 text-xs">➔</span>' : ''}
                    </div>
                    <div class="text-xs font-bold text-slate-900 dark:text-white leading-tight">${p.title}</div>
                  </div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-mono leading-tight">${p.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Golden Dataset Rubric Table for Sportsbet AI -->
        ${data.goldenDatasetRubric ? `
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 font-mono flex items-center gap-1.5">
                <i data-lucide="check-square" class="w-4 h-4"></i>
                Sample Golden Dataset Evaluation Rubric
              </h3>
              <span class="text-[11px] font-mono text-slate-500">Continuous CI/CD Gating</span>
            </div>
            <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table class="w-full text-left text-xs">
                <thead class="bg-purple-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold uppercase font-mono">
                  <tr>
                    <th class="p-2.5">Eval Dimension</th>
                    <th class="p-2.5">Test Case / Prompt Archetype</th>
                    <th class="p-2.5">Ground Truth / Pass Criteria</th>
                    <th class="p-2.5">Guardrail Action on Fail</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  ${data.goldenDatasetRubric.map(rub => `
                    <tr>
                      <td class="p-2.5 font-bold text-slate-900 dark:text-white font-mono whitespace-nowrap">${rub.dimension}</td>
                      <td class="p-2.5">${rub.archetype}</td>
                      <td class="p-2.5 text-emerald-600 dark:text-emerald-400 font-medium">${rub.criteria}</td>
                      <td class="p-2.5 text-rose-500 dark:text-rose-400 font-mono text-[11px]">${rub.guardrail}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : ''}

        <!-- Key Funnel Metrics Highlight (KYC) -->
        ${data.funnelHighlights ? `
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${data.funnelHighlights.map(h => `
              <div class="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-slate-800 border border-emerald-200/80 dark:border-slate-700">
                <div class="text-lg font-mono font-extrabold text-emerald-600 dark:text-emerald-400">${h.metric}</div>
                <div class="text-xs font-bold text-slate-900 dark:text-white mt-0.5">${h.label}</div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">${h.note}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${data.architectureAscii ? `
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">ASCII Logic & Network Routing</h3>
              <span class="text-[11px] font-mono text-indigo-500 font-semibold">Sub-20ms Routing + Live API Verification</span>
            </div>
            <pre class="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">${data.architectureAscii.trim()}</pre>
          </div>
        ` : ''}

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-mono">Architecture Components & Details</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${data.architectureNodes.map(node => `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <div class="flex items-center gap-2 mb-1.5">
                  <span class="w-6 h-6 rounded-md bg-indigo-600 text-white font-mono text-xs flex items-center justify-center font-bold">${node.step}</span>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">${node.title}</h4>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${node.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        ${data.interviewGuide ? `
          <div class="p-4 rounded-xl bg-indigo-950/40 border border-indigo-900/60">
            <div class="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider font-mono mb-2">
              <i data-lucide="mic" class="w-4 h-4 text-indigo-400"></i>
              How to Walk Through This in Leadership Interviews
            </div>
            <ul class="space-y-1.5 text-xs text-indigo-200">
              ${data.interviewGuide.map(guide => `
                <li class="flex items-start gap-2">
                  <span class="text-indigo-400 font-bold">👉</span>
                  <span>${guide}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
      </div>

      <!-- Tab 3: Verified Results Table -->
      <div id="tab-metrics" class="modal-tab-content hidden space-y-4">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-mono">Baseline vs Shipped Comparison</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold uppercase text-xs font-mono">
              <tr>
                <th class="p-3">Key Metric</th>
                <th class="p-3">Baseline</th>
                <th class="p-3">Post-Launch Result</th>
                <th class="p-3">Strategic Impact</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              ${data.resultsTable.map(r => `
                <tr>
                  <td class="p-3 font-semibold text-slate-900 dark:text-white">${r.metric}</td>
                  <td class="p-3 font-mono">${r.baseline}</td>
                  <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">${r.result}</td>
                  <td class="p-3">${r.impact}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Tab 4: Trade-offs & Decisions -->
      <div id="tab-tradeoffs" class="modal-tab-content hidden space-y-4">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-mono">Strategic Trade-offs ("What We Chose NOT to Build")</h3>
        <div class="space-y-3">
          ${data.tradeoffs.map(t => `
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
              <div class="flex items-start gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                <span>✓ CHOSEN PATH:</span>
                <span class="text-slate-900 dark:text-white font-normal">${t.chosen}</span>
              </div>
              <div class="flex items-start gap-2 text-xs font-bold text-rose-500 mb-1.5">
                <span>✕ DE-PRIORITIZED:</span>
                <span class="text-slate-600 dark:text-slate-400 font-normal">${t.deprioritized}</span>
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <strong>Rationale:</strong> ${t.reason}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Retrospective & Key Learnings -->
      <div class="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
        <h3 class="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 mb-1.5 font-mono">PM Retrospective & Core Takeaways</h3>
        <ul class="space-y-1">
          ${data.learnings.map(l => `
            <li class="flex items-start gap-2 text-xs text-indigo-950 dark:text-indigo-200">
              <span class="text-indigo-500 font-bold">»</span>
              <span>${l}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  if (window.lucide) window.lucide.createIcons();
};

// 3. Switch Tabs inside Modal
window.switchModalTab = function(tabId, btnElement) {
  const tabButtons = document.querySelectorAll('.modal-tab-btn');
  const tabContents = document.querySelectorAll('.modal-tab-content');

  tabButtons.forEach(b => {
    b.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
    b.classList.add('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
  });

  btnElement.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
  btnElement.classList.remove('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');

  tabContents.forEach(c => {
    if (c.id === tabId) {
      c.classList.remove('hidden');
    } else {
      c.classList.add('hidden');
    }
  });

  if (window.lucide) window.lucide.createIcons();
};

// 4. Close Modal
window.closeCaseStudyModal = function() {
  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
};

// 5. Filter Comparison Chart
window.filterComparisonChart = function(category, btnElement) {
  const chartFilterBtns = document.querySelectorAll('.chart-filter-btn');
  chartFilterBtns.forEach(b => {
    b.classList.remove('bg-indigo-600', 'text-white', 'dark:bg-indigo-500');
    b.classList.add('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
  });

  btnElement.classList.add('bg-indigo-600', 'text-white', 'dark:bg-indigo-500');
  btnElement.classList.remove('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');

  renderComparisonChart(category);
};

// 6. Copy Feedback
window.copyText = function(text, btnElement, successLabel) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = `✓ ${successLabel || 'Copied!'}`;
    btnElement.classList.add('bg-emerald-600', 'text-white');
    
    setTimeout(() => {
      btnElement.innerHTML = originalText;
      btnElement.classList.remove('bg-emerald-600', 'text-white');
    }, 2000);
  }).catch(err => {
    console.error('Copy failed: ', err);
  });
};

/* ========================================================
   RENDERERS & LIFECYCLE INITIALIZATION
   ======================================================== */

function renderComparisonChart(categoryFilter) {
  const container = document.getElementById('chart-bars-container');
  if (!container) return;

  const filteredData = categoryFilter === 'all' 
    ? comparisonChartData 
    : comparisonChartData.filter(item => item.category === categoryFilter);

  container.innerHTML = filteredData.map(item => `
    <div class="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 transition-all hover:border-indigo-400 dark:hover:border-indigo-600">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
        <span class="text-sm font-bold text-slate-900 dark:text-white">${item.title}</span>
        <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          ${item.lift}
        </span>
      </div>
      
      <!-- Visual Comparative Bars -->
      <div class="space-y-2 mt-3">
        <!-- Baseline Bar -->
        <div>
          <div class="flex justify-between text-[11px] text-slate-500 font-mono mb-1">
            <span>Baseline / Pre-Launch</span>
            <span>${item.baselineLabel}</span>
          </div>
          <div class="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div class="chart-bar-fill h-full rounded-full bg-slate-400 dark:bg-slate-600" style="width: ${item.baselineValue}%"></div>
          </div>
        </div>

        <!-- Shipped Bar -->
        <div>
          <div class="flex justify-between text-[11px] text-indigo-600 dark:text-indigo-400 font-mono font-semibold mb-1">
            <span>Post-Launch Shipped</span>
            <span>${item.shippedLabel}</span>
          </div>
          <div class="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div class="chart-bar-fill h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" style="width: ${item.shippedValue}%"></div>
          </div>
        </div>
      </div>

      <div class="mt-2.5 text-[11px] text-slate-500 dark:text-slate-400">
        <span class="font-semibold text-slate-700 dark:text-slate-300">Strategy:</span> ${item.context}
      </div>
    </div>
  `).join('');
}

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
}

function initCaseStudyFilters() {
  const filterBtns = document.querySelectorAll('.case-filter-btn');
  const caseStudyCards = document.querySelectorAll('.case-study-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'dark:bg-indigo-500');
        b.classList.add('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
      });

      btn.classList.add('bg-indigo-600', 'text-white', 'dark:bg-indigo-500');
      btn.classList.remove('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');

      const filter = btn.getAttribute('data-filter');

      caseStudyCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

function setupModalListeners() {
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (modalBackdrop) modalBackdrop.addEventListener('click', window.closeCaseStudyModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', window.closeCaseStudyModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeCaseStudyModal();
    }
  });
}

// Bootstrap on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderComparisonChart('all');
  initCaseStudyFilters();
  setupModalListeners();
  if (window.lucide) window.lucide.createIcons();
});
