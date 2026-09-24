export interface IndustryItem {
  id: string;
  name: string;
  tag: string;
  title: string;
  desc: string;
  stat1: string;
  stat1Label: string;
  stat2: string;
  stat2Label: string;
  imageUrl: string;
  locationCaption: string;
  highlights: string[];
}

export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  colorScheme: 'gold' | 'emerald';
  deliverables: string[];
  timeline: string;
  metric: string;
  metricLabel: string;
}

export interface ProgramItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  cohort: string;
  colorScheme: 'gold' | 'emerald';
  modules: string[];
}

export interface CaseStudyItem {
  id: string;
  sector: string;
  territory: string;
  title: string;
  challenge: string;
  approach: string;
  resultMetric: string;
  resultLabel: string;
  colorScheme: 'gold' | 'emerald';
  timeline: string;
}

export interface InsightArticle {
  id: string;
  category: 'AI & Automation' | 'Innovation' | 'Leadership' | 'Transformation' | 'Strategy';
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  author: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'corporate',
    name: 'Corporate',
    tag: 'Enterprise Blueprint',
    title: 'Global Corporate Conglomerates & Holdings',
    desc: 'We partner with boardrooms of Fortune 500 enterprises to break internal inertia, spin out exponential venture engines, and re-architect core tech infrastructure before market disruption forces distress.',
    stat1: '3.4x',
    stat1Label: 'Innovation Velocity',
    stat2: '$420M+',
    stat2Label: 'Value Unlocked',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1X91ddGGEASpvxOABX5RvX25xKky7RZf9Jqg8c5PLazrxTtK1I27szd1J0it5Hvt1aBGseahS0MSTOcofwWvoZoV7MLZZsBS_7aXk-AeyXuTmbj8D-QJhodOxMvjWyQ0T7yHQq3xJZqq4ur4m3pvcYlKzi2i8P-SADJpHx3QcR18zzU_MyIZGjyd16Vgn49L7HoactA7Ice88F3FJjf03GUWLCn_mKtuessx97dgeKowdCAg00YXjC3Yg',
    locationCaption: 'Strategic Governance Environment • Tokyo / Zurich / NY',
    highlights: ['Autonomous Growth Spinouts', 'Legacy Core De-risking', 'Algorithmic Capital Allocation']
  },
  {
    id: 'startups',
    name: 'Startups',
    tag: 'Scale Vector',
    title: 'High-Growth Series B+ Scale-Ups',
    desc: 'Accelerating early market traction into institutional category leadership. We optimize unit economics, expand overseas go-to-market channels, and institute repeatable engineering operating protocols.',
    stat1: '5.2x',
    stat1Label: 'Annual ARR Expansion',
    stat2: '14 Mo',
    stat2Label: 'To Market Dominance',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1X91ddGGEASpvxOABX5RvX25xKky7RZf9Jqg8c5PLazrxTtK1I27szd1J0it5Hvt1aBGseahS0MSTOcofwWvoZoV7MLZZsBS_7aXk-AeyXuTmbj8D-QJhodOxMvjWyQ0T7yHQq3xJZqq4ur4m3pvcYlKzi2i8P-SADJpHx3QcR18zzU_MyIZGjyd16Vgn49L7HoactA7Ice88F3FJjf03GUWLCn_mKtuessx97dgeKowdCAg00YXjC3Yg',
    locationCaption: 'Scale-Up War Room • London / San Francisco',
    highlights: ['Repeatable Revenue Architecture', 'Multi-Territory Licensing', 'Founding Team Leverage']
  },
  {
    id: 'academia',
    name: 'Academia',
    tag: 'IP Translation',
    title: 'Research Universities & Deep-Tech Institutes',
    desc: 'Commercializing fundamental laboratory breakthroughs into high-yield venture spinoffs, sovereign licensing structures, and industry-sponsored corporate consortiums.',
    stat1: '85+',
    stat1Label: 'Patents Commercialized',
    stat2: '$160M',
    stat2Label: 'Spinout Capital Raised',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1X91ddGGEASpvxOABX5RvX25xKky7RZf9Jqg8c5PLazrxTtK1I27szd1J0it5Hvt1aBGseahS0MSTOcofwWvoZoV7MLZZsBS_7aXk-AeyXuTmbj8D-QJhodOxMvjWyQ0T7yHQq3xJZqq4ur4m3pvcYlKzi2i8P-SADJpHx3QcR18zzU_MyIZGjyd16Vgn49L7HoactA7Ice88F3FJjf03GUWLCn_mKtuessx97dgeKowdCAg00YXjC3Yg',
    locationCaption: 'Deep-Tech Commercialization Council • Cambridge / Zurich',
    highlights: ['Lab-to-Market Roadmaps', 'Sovereign Tech Transfer', 'Dual-Use IP Structuring']
  },
  {
    id: 'schools',
    name: 'Schools',
    tag: 'Future Readiness',
    title: 'Pioneering Educational Systems & Networks',
    desc: 'Designing computational curricula, modern educator governance, and digital learning environments engineered for the cognitive demands of the 21st century.',
    stat1: '40k+',
    stat1Label: 'Students Empowered',
    stat2: '99.4%',
    stat2Label: 'Institutional Retention',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1X91ddGGEASpvxOABX5RvX25xKky7RZf9Jqg8c5PLazrxTtK1I27szd1J0it5Hvt1aBGseahS0MSTOcofwWvoZoV7MLZZsBS_7aXk-AeyXuTmbj8D-QJhodOxMvjWyQ0T7yHQq3xJZqq4ur4m3pvcYlKzi2i8P-SADJpHx3QcR18zzU_MyIZGjyd16Vgn49L7HoactA7Ice88F3FJjf03GUWLCn_mKtuessx97dgeKowdCAg00YXjC3Yg',
    locationCaption: 'Educational Architecture Lab • Stockholm / Singapore',
    highlights: ['Synthetic AI Literacy', 'Systems Dynamics Teaching', 'Adaptive Governance']
  },
  {
    id: 'students',
    name: 'Students',
    tag: 'Talent Acceleration',
    title: 'Next-Generation Founders & Strategic Fellows',
    desc: 'Intensive immersion programs delivering applied venture design, systems thinking, and technical literacy to build high-agency leaders capable of exponential execution.',
    stat1: '1,200+',
    stat1Label: 'Graduates Active',
    stat2: '92%',
    stat2Label: 'Venture Founding Rate',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1X91ddGGEASpvxOABX5RvX25xKky7RZf9Jqg8c5PLazrxTtK1I27szd1J0it5Hvt1aBGseahS0MSTOcofwWvoZoV7MLZZsBS_7aXk-AeyXuTmbj8D-QJhodOxMvjWyQ0T7yHQq3xJZqq4ur4m3pvcYlKzi2i8P-SADJpHx3QcR18zzU_MyIZGjyd16Vgn49L7HoactA7Ice88F3FJjf03GUWLCn_mKtuessx97dgeKowdCAg00YXjC3Yg',
    locationCaption: 'Vanguard Fellowship Hub • Oxford / MIT / INSEAD',
    highlights: ['Applied Venture Studios', 'Zero-to-One Validation', 'Direct Sovereign Mentorship']
  },
  {
    id: 'professionals',
    name: 'Professionals',
    tag: 'Executive Re-tooling',
    title: 'Mid-Career Leaders, Partners & Directors',
    desc: 'Equipping directors with applied agentic AI literacy, sovereign governance skills, and modern leadership frameworks necessary to direct strategic transformation.',
    stat1: '4,500+',
    stat1Label: 'Executives Certified',
    stat2: '98%',
    stat2Label: 'Board Endorsement',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1X91ddGGEASpvxOABX5RvX25xKky7RZf9Jqg8c5PLazrxTtK1I27szd1J0it5Hvt1aBGseahS0MSTOcofwWvoZoV7MLZZsBS_7aXk-AeyXuTmbj8D-QJhodOxMvjWyQ0T7yHQq3xJZqq4ur4m3pvcYlKzi2i8P-SADJpHx3QcR18zzU_MyIZGjyd16Vgn49L7HoactA7Ice88F3FJjf03GUWLCn_mKtuessx97dgeKowdCAg00YXjC3Yg',
    locationCaption: 'Executive Leadership Academy • Geneva / New York',
    highlights: ['C-Suite AI Playbooks', 'Macro Volatility Scenarios', 'Non-Linear Strategy']
  }
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'breakthrough',
    number: '01',
    title: 'Breakthrough Advantage',
    description: 'Conceive and scale sovereign business models, new software and platform products, and unassailable algorithmic IP.',
    icon: 'rocket_launch',
    colorScheme: 'gold',
    deliverables: ['Proprietary IP Blueprints', 'Market Entry War Gaming', 'Autonomous Venture Design'],
    timeline: '12–16 Weeks',
    metric: '+310%',
    metricLabel: 'New Market Velocity'
  },
  {
    id: 'customer',
    number: '02',
    title: 'Customer Experience',
    description: 'Design high-touch, hyper-personalized client ecosystems and frictionless omnichannel portals powered by proactive AI agents.',
    icon: 'psychology',
    colorScheme: 'emerald',
    deliverables: ['Autonomous Agent Concierges', 'Predictive Retention Workflows', 'Zero-Latency Onboarding'],
    timeline: '8–12 Weeks',
    metric: '4.9/5',
    metricLabel: 'Net Institutional CSAT'
  },
  {
    id: 'readiness',
    number: '03',
    title: 'Future Readiness',
    description: 'Equip leadership with quantitative foresight, macro scenario modeling, and organizational agility to withstand sovereign shocks.',
    icon: 'visibility',
    colorScheme: 'gold',
    deliverables: ['Sovereign Stress Test Matrices', 'Macro Scenario Engines', 'Dynamic Governance Dashboards'],
    timeline: '6–10 Weeks',
    metric: '100%',
    metricLabel: 'Risk Preemption Rate'
  },
  {
    id: 'scale',
    number: '04',
    title: 'Efficiency & Scale',
    description: 'Rationalize enterprise architectures, automate mission-critical workflows, and optimize cost bases for radical operating margin expansion.',
    icon: 'balance',
    colorScheme: 'emerald',
    deliverables: ['Legacy Decoupling Protocols', 'Agentic Workflow Synthesis', 'Gross Margin Optimization'],
    timeline: '10–14 Weeks',
    metric: '38%',
    metricLabel: 'Direct Cost Rationalized'
  }
];

export const CHALLENGE_PHASES = [
  {
    phase: 'Phase 01',
    name: 'Diagnosis',
    title: 'The Challenge: Systemic Entrenchment',
    description: 'Isolating the root architectural constraints, misaligned governance gates, and legacy profit centers that quietly cannibalize future organizational velocity.',
    deliverable: 'Diagnostic Vulnerability Dossier',
    timeframe: 'Days 1–15',
    colorScheme: 'gold'
  },
  {
    phase: 'Phase 02',
    name: 'Reframing',
    title: 'The Insight: Latent White-Space',
    description: 'Surfacing unexploited data vectors, customer friction inflection points, and algorithmic leverage nodes across adjacent value chains.',
    deliverable: 'Asymmetric Opportunity Map',
    timeframe: 'Days 16–30',
    colorScheme: 'emerald'
  },
  {
    phase: 'Phase 03',
    name: 'Architecture',
    title: 'The Strategy: Asymmetric Positioning',
    description: 'Architecting high-conviction strategic roadmaps that bypass peer competition through novel operating frameworks and proprietary IP creation.',
    deliverable: 'Executive Strategic Architecture',
    timeframe: 'Days 31–50',
    colorScheme: 'gold'
  },
  {
    phase: 'Phase 04',
    name: 'Acceleration',
    title: 'The Execution: Agile Industrialization',
    description: 'Deploying embedded multidisciplinary pods to prototype, test, and integrate enterprise AI pipelines and modular operating architectures without friction.',
    deliverable: 'Production Prototype Sprints',
    timeframe: 'Days 51–75',
    colorScheme: 'emerald'
  },
  {
    phase: 'Phase 05',
    name: 'Compounding',
    title: 'The Impact: Sovereign Resiliency',
    description: 'Establishing self-sustaining innovation flywheels, exponential margin expansion, and executive leadership capable of preempting cyclical shock.',
    deliverable: 'Autonomous Value Engine',
    timeframe: 'Days 76–90',
    colorScheme: 'gold'
  }
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Innovation Strategy',
    tagline: 'High-Potential White-Space Markets',
    description: 'Systematic proprietary framework to identify, evaluate, and capitalize on high-potential white-space markets before incumbents react.',
    duration: '8 Weeks',
    cohort: 'Executive Committee & VPs',
    colorScheme: 'gold',
    modules: ['Market Discontinuity Signals', 'Venture Portfolio Construction', 'Capital Re-allocation Models']
  },
  {
    id: 'p2',
    number: '02',
    title: 'Leadership Catalyst',
    tagline: 'Exponential Mindset & Governance',
    description: 'High-intensity executive immersion into exponential mindset, AI governance, and decisive boardroom direction during macro shifts.',
    duration: '4 Weeks',
    cohort: 'Board of Directors & C-Suite',
    colorScheme: 'emerald',
    modules: ['Algorithmic Literacy for Boards', 'Stress-testing Strategy', 'Autonomous Team Orchestration']
  },
  {
    id: 'p3',
    number: '03',
    title: 'Scale-Up Accelerator',
    tagline: 'Enterprise Operating Rigor',
    description: 'Bridging hyper-growth venture traction into stable enterprise-scale operating protocols, repeatable revenue, and institutional rigor.',
    duration: '12 Weeks',
    cohort: 'Series B+ Founders & Leaders',
    colorScheme: 'gold',
    modules: ['Unit Economics Hardening', 'Global Territory Playbooks', 'Institutional Governance Systems']
  },
  {
    id: 'p4',
    number: '04',
    title: 'Future Skills Lab',
    tagline: 'Synthetic Intelligence Workflows',
    description: 'Upskilling leadership cohorts in synthetic intelligence workflows, systems dynamics, and computational strategic reasoning.',
    duration: '6 Weeks',
    cohort: 'Senior Directors & Department Heads',
    colorScheme: 'emerald',
    modules: ['Multi-Agent Workflow Modeling', 'Predictive Strategy Simulations', 'Human-in-the-Loop Safeguards']
  },
  {
    id: 'p5',
    number: '05',
    title: 'Digital Blueprint',
    tagline: 'Modernization Architecture',
    description: 'End-to-end modernization architectural roadmap defining core stack evolution, cloud transition, and agent orchestration frameworks.',
    duration: '10 Weeks',
    cohort: 'CTO, CIO & Chief Architects',
    colorScheme: 'gold',
    modules: ['Composable Enterprise Fabric', 'Legacy API Decoupling', 'Secure Zero-Trust Deployment']
  },
  {
    id: 'p6',
    number: '06',
    title: 'Market Readiness',
    tagline: 'Cross-Border Expansion',
    description: 'Cross-border expansion diagnostics and jurisdictional positioning masterclass for entering volatile global regulatory territories.',
    duration: '5 Weeks',
    cohort: 'Global Expansion & Legal Teams',
    colorScheme: 'emerald',
    modules: ['OECD Regulatory Harmonization', 'Foreign Entity IP Shielding', 'Cross-Border Capital Structuring']
  },
  {
    id: 'p7',
    number: '07',
    title: 'Applied Innovation Lab',
    tagline: '90-Day Prototyping Sprints',
    description: 'Rapid 90-day prototyping sprints turning theoretical IP into functional, customer-tested commercial pilots with revenue validation.',
    duration: '12 Weeks',
    cohort: 'Cross-functional Pods',
    colorScheme: 'gold',
    modules: ['Sandboxed Commercial Pilots', 'Customer Willingness-to-Pay', 'Fast-Track Venture Launch']
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'c1',
    sector: 'Financial Services',
    territory: 'Global Consortia',
    title: 'Global FinTech Consortia Modernization',
    challenge: 'Multigenerational core banking inertia limiting API velocity across 14 national jurisdictions.',
    approach: 'Decoupled microservices architecture, automated liquidity validation, and real-time risk orchestration.',
    resultMetric: '$420M',
    resultLabel: 'New Digital Revenue Line',
    colorScheme: 'gold',
    timeline: '18 Months'
  },
  {
    id: 'c2',
    sector: 'Energy & Infrastructure',
    territory: 'Cross-Border EU',
    title: 'Sovereign Clean Energy Grid Orchestration',
    challenge: 'Balancing intermittent renewable capacity across 4 interconnected national grids without brownout hazards.',
    approach: 'Autonomous predictive demand-dispatch model with sub-second latency and edge machine learning.',
    resultMetric: '38%',
    resultLabel: 'Peak Curtailment Reduced',
    colorScheme: 'emerald',
    timeline: '12 Months'
  },
  {
    id: 'c3',
    sector: 'Life Sciences',
    territory: 'Diagnostics Pioneer',
    title: 'HealthTech Regulatory Acceleration',
    challenge: 'Multi-jurisdiction clinical trial approvals stalling market debut by an average of 22 months.',
    approach: 'Algorithmic automated clinical evidence synthesis platform compliant with FDA and EMA standards.',
    resultMetric: '60%',
    resultLabel: 'Faster CE / FDA Clearance',
    colorScheme: 'gold',
    timeline: '9 Months'
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'art-1',
    category: 'AI & Automation',
    title: 'The Sovereign Enterprise: Navigating AI Agentic Economies in 2026 and Beyond',
    excerpt: 'How executive committees must reorganize internal reporting when autonomous multi-agent pipelines generate 70% of routine commercial decisions.',
    content: `The paradigm of human-directed software has reached an inflection point. In forward-looking conglomerates, software no longer merely logs transactions—it executes them autonomously.

When autonomous multi-agent architectures operate within core supply chains, procurement negotiations, and pricing dynamics, the traditional org chart dissolves. Reporting lines must transition from task management to policy guardrails and capital bounding boxes.

Our empirical observations across 30 enterprise deployments demonstrate that organizations establishing unified algorithmic governance councils experience 3.4x faster time-to-market while reducing operational tail risk by over 60%.`,
    readTime: '8 min read',
    date: 'Q3 2026',
    author: 'Dr. Elena Rostova'
  },
  {
    id: 'art-2',
    category: 'Innovation',
    title: 'Re-architecting Growth: Why Traditional Cost-Cutting Kills Future Optionality',
    excerpt: 'A financial dissection of balance-sheet shrinkage versus strategic capability retention during prolonged macroeconomic stagflation.',
    content: `When macroeconomic clouds gather, the instinctive institutional response is headcount rationalization and capital curtailment. Yet historical performance indices reveal that category leaders emerge not through defensive retreat, but through surgical capital reallocation.

By starving exploratory initiatives, enterprises inadvertently dismantle the institutional memory and research flywheels that took decades to build. The high-performance approach is capability-led restructuring: automating mundane operations to fund venture exploration.`,
    readTime: '6 min read',
    date: 'Q2 2026',
    author: 'David K. Mercer'
  },
  {
    id: 'art-3',
    category: 'Leadership',
    title: 'Decisive Governance: How High-Performing Boards Direct Strategic Volatility',
    excerpt: 'Empirical lessons from restructuring twelve conglomerate advisory panels to govern rapid venture deployment and algorithmic compliance.',
    content: `Boardrooms designed for quarterly cadence cannot effectively govern organizations operating at real-time compute speeds.

We evaluate how elite supervisory boards implement 'high-frequency governance'—leveraging predictive telemetry feeds, red-team simulation sessions, and independent technological fellows to stress-test enterprise posture continuously rather than retroactively.`,
    readTime: '11 min read',
    date: 'Q1 2026',
    author: 'David K. Mercer'
  },
  {
    id: 'art-4',
    category: 'Strategy',
    title: 'The Asymmetric Advantage: Cultivating Proprietary Algorithmic Moats',
    excerpt: 'Why off-the-shelf generative models create zero durable differentiation and how to capture sovereign IP value.',
    content: `Commoditized foundation models offer zero economic moat. When every competitor accesses identical APIs at identical marginal costs, margins compress toward zero.

Durable enterprise advantage requires proprietary data loops, custom fine-tuning upon proprietary domain telemetry, and tight architectural coupling with physical distribution assets. This analysis maps the four non-replicable vectors of enterprise value.`,
    readTime: '7 min read',
    date: 'Q3 2026',
    author: 'Dr. Elena Rostova'
  },
  {
    id: 'art-5',
    category: 'Transformation',
    title: 'Decoupling the Monolith: A Non-Disruptive Transition Strategy for Legacy Cores',
    excerpt: 'How tier-one financial institutions migrate off mainframe infrastructure without taking offline operational downtime.',
    content: `A complete rip-and-replace of core transactional systems is a multi-billion dollar liability with an unacceptably high failure rate. 

We present the 'Strangler Mesh' architecture: deploying an intelligent event-driven mediation layer that siphons workload volume away from legacy mainframes into composable cloud microservices over an 18-month staged timeline with zero customer interruption.`,
    readTime: '9 min read',
    date: 'Q2 2026',
    author: 'David K. Mercer'
  }
];

export const MARQUEE_PARTNERS = [
  'Vanguard Pacific',
  'Atlas Kinetics',
  'Meridian Sovereign',
  'Helios Bio-Labs',
  'Strata Quantum',
  'Valex Global',
  'Aura Mobility',
  'Novalux Holdings',
  'Aethelgard Capital'
];
