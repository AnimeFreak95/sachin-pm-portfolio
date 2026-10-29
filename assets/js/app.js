/**
 * Sachin Shinde - Product Manager Portfolio Interactivity
 * Advanced Visual Indicators, Dials, Interactive Charts, RICE Matrix Engine & Agentic AI Architecture
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
    title: 'Agentic AI / Assistant CSAT',
    category: 'genai',
    baselineLabel: 'Benchmark',
    baselineValue: 65,
    shippedLabel: '+20% Lift',
    shippedValue: 85,
    lift: '+20% Improvement',
    context: 'Sub-20ms Intent Routing + Agentic RAG live inventory validation'
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
    context: 'Multi-modal search integrating live streams & replay cards'
  },
  {
    id: 'bet-conv',
    title: 'Platform Conversions',
    category: 'genai',
    baselineLabel: 'Benchmark',
    baselineValue: 70,
    shippedLabel: '+10% Lift',
    shippedValue: 80,
    lift: '+10% Conversion Lift',
    context: 'Fast-track pipeline & zero-hallucination agentic tool execution'
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

// RICE Prioritization Matrix Data
const riceMatrixData = [
  {
    initiative: 'Lightweight Intent Router & Fast-Track RAG',
    domain: 'GenAI',
    reach: 'Millions of Users',
    impact: 'Massive (5/5)',
    confidence: '95%',
    effort: 'Medium',
    riceScore: '475',
    status: 'Shipped',
    statusColor: 'purple',
    tradeOff: 'Bypassed full 70B LLM generation for direct searches to preserve unit economics'
  },
  {
    initiative: 'Aadhaar Lite & PAN Plus Revamp',
    domain: 'FinTech',
    reach: '150M+ Users',
    impact: 'Massive (5/5)',
    confidence: '90%',
    effort: 'Medium',
    riceScore: '450',
    status: 'Shipped',
    statusColor: 'emerald',
    tradeOff: 'De-prioritized bank statement scraper to prioritize instant government APIs'
  },
  {
    initiative: 'Shared Wallet & Shared KYC',
    domain: 'FinTech / Growth',
    reach: 'All Fantasy Users',
    impact: 'Massive (5/5)',
    confidence: '85%',
    effort: 'High',
    riceScore: '354',
    status: 'Shipped',
    statusColor: 'teal',
    tradeOff: 'Postponed crypto payment options to unify identity across the core gaming apps'
  },
  {
    initiative: 'Multi-Modal Rich Search',
    domain: 'Discovery',
    reach: 'All Sports Fans',
    impact: 'High (4/5)',
    confidence: '80%',
    effort: 'Medium',
    riceScore: '320',
    status: 'Shipped',
    statusColor: 'sky',
    tradeOff: 'Postponed voice search to double down on live streams & replay cards'
  },
  {
    initiative: 'In-App TDS Certificate & Cashback',
    domain: 'Compliance',
    reach: 'All Withdrawing Users',
    impact: 'Medium (3/5)',
    confidence: '95%',
    effort: 'Low',
    riceScore: '285',
    status: 'Shipped',
    statusColor: 'amber',
    tradeOff: 'Replaced manual customer support refunds with automated programmatic cashback'
  }
];

// Comprehensive Case Studies Data Store
const caseStudiesData = {
  'apollo-ai': {
    id: 'apollo-ai',
    category: 'genai',
    title: 'Enterprise Agentic AI & Vernacular Intent Routing Architecture',
    subtitle: 'Sub-20ms Quantized Router, Fast-Track Pipeline, and Agentic RAG with Valmo Logistics',
    role: 'Product Manager (AI & Conversational Systems)',
    company: 'Sportsbet Australia / Consumer AI Systems',
    timeline: '2024 – 2026',
    badge: 'Generative AI Architecture',
    badgeColor: 'indigo',
    dials: [
      { label: 'Router Latency', value: '<20ms', pct: 95, color: '#818cf8', subtext: 'Quantized DistilBERT / Grok Fast' },
      { label: 'Token Cost (Fast Track)', value: '~0 Cost', pct: 99, color: '#10b981', subtext: 'Direct Catalog Search Bypass' },
      { label: 'CSAT / Accuracy', value: '+20%', pct: 85, color: '#ec4899', subtext: 'Agentic RAG Anti-Hallucination' }
    ],
    metrics: [
      { label: 'Intent Classification', value: '<20ms', note: 'Quantized sub-20ms routing' },
      { label: 'Token Economics', value: '~0 Cost', note: 'Bypasses heavy compute on fast path' },
      { label: 'CSAT Improvement', value: '+20%', note: 'Verified by live inventory tool checks' }
    ],
    overview: 'Scaling conversational AI for millions of users introduces two existential traps: exploding token compute costs that destroy unit economics on low-ticket orders, and hallucinations on live inventory, pricing, and pincode deliverability. I architected an enterprise two-tier intent routing pipeline with Agentic RAG and live backend tool calling.',
    problem: [
      'Raw LLM routing for every conversational request blows up compute costs and degrades response latency.',
      'Unstructured voice/text inputs in regional dialects (via Vani) cause generalist models to hallucinate prices and delivery timelines.',
      'Static RAG vector lookups fail when inventory levels and pincode serviceability change in real time.'
    ],
    strategy: [
      'Engineered a Lightweight Intent Router using a quantized model (DistilBERT / Grok Fast) operating at sub-20ms to bifurcate direct catalog queries from complex reasoning.',
      'Constructed a Fast-Track Pipeline for straightforward queries (e.g., "red cotton kurti"), keeping token costs near zero to protect gross margins.',
      'Deployed a Large-Scale Reasoning Engine (Llama 3 70B / Grok 4.7) strictly as a fallback for multi-turn or ambiguous inquiries.',
      'Implemented Agentic RAG & Live Tool Calling connecting directly to BharatMLStack, inventory databases, and Valmo logistics for pincode deliverability.'
    ],
    architectureAscii: `
    [ User Query (Voice/Text via Vani) ]
                     │
                     ▼
       [ Lightweight Intent Router ] ────── (Ambiguous / Conversational) ─────┐
       (Sub-20ms Quantized Model)                                             │
                     │                                                        │
          (Direct Catalog Search)                                             │
                     │                                                        ▼
                     │                                       [ Large-Scale Reasoning Engine ]
                     │                                       (Llama 3 70B / Grok 4.7 Fallback)
                     ▼                                                        │
           [ Fast-Track Pipeline ] ◄──────────────────────────────────────────┘
           (Near-Zero Token Overhead)
                     │
                     ▼
       [ Agentic RAG & Tool Calling ] ◄══════ (Data Fetch) ══════► [ Live Backend: Inventory, Pricing, Valmo ]
       (Core Anti-Hallucination Layer)                             (Tier 3/4 Pincode Deliverability)
                     │
                     ▼
          [ Response Synthesizer ]
          (JSON-to-Conversational Translator)
                     │
                     ▼
       [ Vernacular Output to User ]
       (Localized Regional Response)
    `,
    architectureMermaid: `graph TD
    A[User Query: Voice/Text] --> B{Lightweight Intent Router}
    B -->|Direct Catalog Search| C[Fast-Track Pipeline]
    B -->|Ambiguous/Conversational| D[Large-Scale Reasoning Engine]
    C --> E[Agentic RAG & Tool Calling]
    D --> E
    E --> F[(Live Backend: Inventory, Pricing, Valmo)]
    F --> E
    E --> G[Response Synthesizer]
    G --> H[Vernacular Output to User]`,
    architectureNodes: [
      { step: '01', title: 'User Query (Voice/Text via Vani)', desc: 'Entry point accommodating regional users, handling unstructured regional languages and voice inputs.' },
      { step: '02', title: 'Lightweight Intent Router', desc: 'Cost-efficient, highly quantized model (DistilBERT / Grok Fast) operating at sub-20ms latency to classify intent complexity.' },
      { step: '03', title: 'Fast-Track Pipeline', desc: 'Execution path for straightforward searches. Bypasses heavy compute entirely to keep token costs near zero and preserve margins.' },
      { step: '04', title: 'Large-Scale Reasoning Engine', desc: 'Heavy fallback model (Llama 3 70B / Grok 4.7) activated exclusively for multi-turn, nuanced, or ambiguous queries.' },
      { step: '05', title: 'Agentic RAG & Tool Calling', desc: 'Core anti-hallucination layer. Triggers backend functions to fetch verified facts rather than guessing from internal memory.' },
      { step: '06', title: 'Live Backend (Inventory, Pricing, Valmo)', desc: 'Direct integration with BharatMLStack and Valmo logistics network to confirm live stock, exact pricing, and Tier 3/4 pincode serviceability.' },
      { step: '07', title: 'Response Synthesizer & Vernacular Output', desc: 'Translates raw JSON data into warm, natural, localized conversational output.' }
    ],
    interviewGuide: [
      'Trace the path from the top: Emphasize the branching logic at the Lightweight Intent Router as the core PM decision that protects gross margins while preserving sub-second speed.',
      'Highlight Agentic RAG & Tool Calling as the structural guardrail against hallucinations: the system queries live inventory and Valmo logistics before committing to any answer.',
      'Explain unit economics: Why routing 100% of queries through a 70B model destroys consumer margin, and how two-tier routing solves it permanently.'
    ],
    resultsTable: [
      { metric: 'Intent Router Latency', baseline: '150ms+ (General LLM)', result: '<20ms (Sub-20ms)', impact: 'Sub-second real-time responsiveness' },
      { metric: 'Fast-Track Token Cost', baseline: '$0.02 - $0.05 / query', result: '~0 Token Overhead', impact: 'Protected gross margins on low-ticket orders' },
      { metric: 'Hallucination on Pricing/Stock', baseline: '12-18% in baseline LLM', result: '0% (Ground Truth Verified)', impact: 'Live database queries via Valmo & BharatMLStack' },
      { metric: 'User CSAT', baseline: 'Benchmark', result: '+20% Improvement', impact: 'Localized vernacular responses with zero incorrect inventory promises' }
    ],
    tradeoffs: [
      { chosen: 'Two-tier routing with sub-20ms quantized router', deprioritized: 'Routing all queries to a single monolithic reasoning model', reason: 'Prevented ballooning server costs on low-ticket consumer transactions.' },
      { chosen: 'Agentic tool-calling against live inventory and Valmo logistics', deprioritized: 'Static vector RAG embeddings', reason: 'Static vector search caused hallucinations on out-of-stock items and unserviceable pincodes.' }
    ],
    learnings: [
      'System Architecture is Product Strategy: The choice of routing logic dictates your product’s unit margins and operational viability.',
      'Live Tools Beat Pre-trained Weights: Never let an LLM guess pricing, inventory, or delivery dates—enforce hard database tool execution.',
      'Speed and Cost are UX Features: Sub-20ms intent routing creates a "Lightspeed" user feeling while preserving enterprise compute budgets.'
    ],
    markdownFile: 'case-studies/01-agentic-ai-vernacular-architecture.md'
  },

  'kyc-automation': {
    id: 'kyc-automation',
    category: 'fintech',
    title: 'Identity Verification (KYC) at 150M+ Scale & Shared Wallet',
    subtitle: 'Automated Compliance, CAC Reduction & Multi-Product Monetization',
    role: 'Product Manager (Transactions: KYC, Compliance & Withdrawals)',
    company: 'Junglee Games India Pvt. Ltd.',
    timeline: '2023 – 2026',
    badge: 'FinTech Infrastructure',
    badgeColor: 'emerald',
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
    title: 'Multi-Modal Search & UGC Moderation Scalability',
    subtitle: 'Rich Content Search & GGWP Content Classification System',
    role: 'Product Manager (AI, Search & Engagement)',
    company: 'Sportsbet Australia / Junglee Games',
    timeline: '2024 – 2026',
    badge: 'Discovery & Growth',
    badgeColor: 'sky',
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
    overview: 'As sports platforms evolve into social and creator-driven ecosystems, static event listings fail to engage modern fans. For Sportsbet Australia, I re-architected Rich Content Search into a multi-modal discovery experience and engineered the GGWP content classification system to automate UGC moderation at scale.',
    problem: [
      'High-value live video streams and match replays were buried under static text menus, hurting asset monetization.',
      'Search results lacked social proof, tipster track records, and video context.',
      'Exploding user-generated bet descriptions overwhelmed manual moderation queues ahead of major sporting matches.'
    ],
    strategy: [
      'Expanded Rich Content Search into a multi-modal experience integrating User Profiles, Live Streams, and Replay cards, driving a 15% lift in video-asset CTR.',
      'Architected the GGWP content classification system for automated categorization and moderation of user-generated bet descriptions, enhancing backend scalability.',
      'Conducted end-to-end user research and PRD definition for the feed moderation system, executing targeted UX tweaks that drove a 7% increase in bet conversion rates.'
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
    company: 'Junglee Games India Pvt. Ltd.',
    timeline: '2023 – 2024',
    badge: 'FinTech & Compliance',
    badgeColor: 'amber',
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

// Application State & Controller
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initComparisonChart('all');
  initRiceMatrix();
  initCaseStudyFilters();
  initModal();
  initCopyActions();
});

// Theme Management (Light/Dark mode)
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

// Visual Comparison Bar Chart Renderer
function initComparisonChart(categoryFilter) {
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

window.filterComparisonChart = function(category, btnElement) {
  const chartFilterBtns = document.querySelectorAll('.chart-filter-btn');
  chartFilterBtns.forEach(b => {
    b.classList.remove('bg-indigo-600', 'text-white', 'dark:bg-indigo-500');
    b.classList.add('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
  });

  btnElement.classList.add('bg-indigo-600', 'text-white', 'dark:bg-indigo-500');
  btnElement.classList.remove('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');

  initComparisonChart(category);
};

// RICE Prioritization Matrix Table Renderer
function initRiceMatrix() {
  const tableBody = document.getElementById('rice-matrix-tbody');
  if (!tableBody) return;

  tableBody.innerHTML = riceMatrixData.map(row => `
    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <td class="p-3.5 font-bold text-slate-900 dark:text-white">
        <div>${row.initiative}</div>
        <div class="text-[11px] text-slate-500 font-normal mt-0.5">${row.tradeOff}</div>
      </td>
      <td class="p-3.5 text-xs">
        <span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 font-mono">${row.domain}</span>
      </td>
      <td class="p-3.5 text-xs font-mono">${row.reach}</td>
      <td class="p-3.5 text-xs font-mono font-medium">${row.impact}</td>
      <td class="p-3.5 text-xs font-mono">${row.confidence}</td>
      <td class="p-3.5 text-xs font-mono">${row.effort}</td>
      <td class="p-3.5 text-sm font-mono font-extrabold text-indigo-600 dark:text-indigo-400">${row.riceScore}</td>
      <td class="p-3.5 text-xs">
        <span class="px-2.5 py-1 rounded-full font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          ${row.status}
        </span>
      </td>
    </tr>
  `).join('');
}

// Case Study Filtering
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

// Modal Interactivity with 4 Tab Views
function initModal() {
  const modal = document.getElementById('case-study-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-body');

  window.openCaseStudy = function(studyId) {
    const data = caseStudiesData[studyId];
    if (!data) return;

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
            <span><strong>Context:</strong> ${data.company}</span>
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
                <div class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase">${dial.label}</div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${dial.subtext}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Interactive Modal Tabs -->
        <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 text-xs font-semibold overflow-x-auto">
          <button onclick="switchModalTab('tab-overview', this)" class="modal-tab-btn px-3 py-1.5 rounded-lg bg-indigo-600 text-white transition-all">
            Executive Summary
          </button>
          <button onclick="switchModalTab('tab-architecture', this)" class="modal-tab-btn px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all">
            System Architecture & Flow
          </button>
          <button onclick="switchModalTab('tab-metrics', this)" class="modal-tab-btn px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all">
            Verified Results Table
          </button>
          <button onclick="switchModalTab('tab-tradeoffs', this)" class="modal-tab-btn px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all">
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
        <div id="tab-architecture" class="modal-tab-content hidden space-y-5">
          <!-- Flowchart Card -->
          ${data.architectureAscii ? `
            <div>
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">Visual Architecture Flowchart</h3>
                <span class="text-[11px] font-mono text-indigo-500 font-semibold">Sub-20ms Routing + Agentic RAG</span>
              </div>
              <pre class="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">${data.architectureAscii.trim()}</pre>
            </div>
          ` : ''}

          <!-- Step-by-Step Architecture Nodes -->
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

          <!-- Interview Guide Callout if present -->
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

  window.switchModalTab = function(tabId, btnElement) {
    const tabButtons = document.querySelectorAll('.modal-tab-btn');
    const tabContents = document.querySelectorAll('.modal-tab-content');

    tabButtons.forEach(b => {
      b.classList.remove('bg-indigo-600', 'text-white');
      b.classList.add('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
    });

    btnElement.classList.add('bg-indigo-600', 'text-white');
    btnElement.classList.remove('bg-slate-100', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');

    tabContents.forEach(c => {
      if (c.id === tabId) {
        c.classList.remove('hidden');
      } else {
        c.classList.add('hidden');
      }
    });
  };

  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

// Copy Action Feedback
function initCopyActions() {
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
}
