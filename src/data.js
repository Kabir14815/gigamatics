export const HERO_METRICS = [
  { value: '99.99%', label: 'Uptime' },
  { value: '100%', label: 'Audits passed' },
  { value: '6 wks', label: 'Time to value' },
];

export const HERO_PILLS = ['Consult', 'Implement', 'Operate'];

export const IMPACT_DEFS = [
  { to: 40, suffix: '%', dec: 0, label: 'Infrastructure Cost Reduction', desc: 'Cloud optimization delivers significant savings through right-sizing, reserved capacity and architectural efficiency.' },
  { to: 3, suffix: '×', dec: 0, label: 'Faster Time-to-Recovery', desc: 'With tested DR strategies, clients restore critical workloads three times faster than their previous approach.' },
  { to: 99.99, suffix: '%', dec: 2, label: 'Platform Uptime Delivered', desc: 'Managed operations maintain best-in-class availability across complex, multi-environment platforms.' },
  { to: 70, suffix: '%', dec: 0, label: 'Reduction in Manual Processes', desc: 'AI and automation free your teams from repetitive work to focus on what drives real value.' },
  { to: 100, suffix: '%', dec: 0, label: 'Compliance Audit Success', desc: 'Every client we’ve prepared for a regulatory or security audit has passed — first time, on time.' },
  { to: 6, suffix: ' wks', dec: 0, label: 'Average Time to Value', desc: 'From initial scoping to production deployment, our structured model gets you to measurable value fast.' },
];

export const FAQS = [
  { q: 'How does Gigamatics differ from a typical IT services company?', a: 'We operate on a consultant-led model — experienced specialists own your engagement end-to-end, not account managers who hand off to generic delivery teams. Every recommendation is based on what’s genuinely best for your business, not on what we’re incentivised to sell.' },
  { q: 'Do you work with small and mid-size businesses, or only enterprise?', a: 'We work across the spectrum — from scale-ups needing their first proper cloud architecture, to large enterprises requiring complex multi-cloud transformations. Our engagement models flex to match your size, budget and maturity.' },
  { q: 'What cloud platforms do you support?', a: 'We are fully multi-cloud and vendor agnostic — supporting AWS, Microsoft Azure and Google Cloud Platform, as well as hybrid and on-premise environments. We recommend what’s right for you, not what’s right for our partner margins.' },
  { q: 'How quickly can we get started?', a: 'Most engagements begin within 2–3 weeks of initial scoping. We offer rapid discovery workshops to understand your needs, then propose a phased approach that gets you to value as quickly as possible — often within 6–8 weeks.' },
  { q: 'Do you offer fixed-price or time-and-materials engagements?', a: 'Both. We offer fixed-scope, fixed-price engagements for well-defined projects, as well as retainer and managed service models for ongoing work. We recommend the commercial structure that best suits your risk appetite.' },
  { q: 'What does your Disaster Recovery consulting involve?', a: 'It covers the full lifecycle: current-state assessment, RTO/RPO definition, architecture design, implementation, tabletop exercises, live failover testing and annual review. We ensure your DR strategy is real and tested — not just documented.' },
];

export const MODEL = [
  { kicker: '01 · Consult', title: 'Strategy & Advisory', body: 'Assessments, architecture design, roadmaps and governance frameworks informed by deep domain expertise.' },
  { kicker: '02 · Implement', title: 'Execution & Delivery', body: 'Migration, deployment, configuration and optimization with structured accountability at every stage.' },
  { kicker: '03 · Operate', title: 'Managed Operations', body: 'Ongoing management of databases, cloud, security and performance governed by consulting-defined standards.' },
];

export const PILLARS = [
  { num: '01', title: 'Data Modernization & Analytics', body: 'Transform legacy data estates into intelligent, cloud-native platforms — data lakes, pipelines and BI that turn raw data into decisions.', to: '/services/data-modernization' },
  { num: '02', title: 'Cloud & Infrastructure', body: 'Assess, migrate, modernise and optimise your footprint across AWS, Azure, Oracle and GCP, with governance and cost optimisation.', to: '/services/cloud-infrastructure' },
  { num: '03', title: 'Security, Risk & Resilience', body: 'From threat modelling to compliance frameworks and Zero Trust architecture, we protect your systems, data and reputation.', to: '/services/security-risk-compliance' },
  { num: '04', title: 'Disaster Recovery & Continuity', body: 'Design, test and manage resilient DR strategies across on-premise, hybrid and multi-cloud — zero compromise on uptime.', to: '/services/disaster-recovery' },
  { num: '05', title: 'Platform Reliability & Performance', body: 'Proactive monitoring, capacity planning and optimization to keep enterprise platforms fast, stable and predictable.', to: '/services/platform-reliability' },
  { num: '06', title: 'AI & Intelligent Automation', body: 'Embed AI-driven workflows, predictive models and process automation — practical, scalable and aligned to outcomes.', to: '/services/ai-automation' },
];

export const DELIVER = [
  { h: 'Architecture-first approach', b: 'every solution is designed from structured assessment, not templates or assumptions.' },
  { h: 'Defined deliverables', b: 'from architecture blueprints to governance playbooks, every engagement produces tangible outputs.' },
  { h: 'Seamless execution', b: 'from design through deployment, we own the outcome alongside you with structured oversight.' },
  { h: 'Ongoing operational support', b: 'post-deployment management, optimization and governance as your platform evolves.' },
];

export const ADVANTAGES = [
  { num: '01', title: 'Senior-Led Engagements', body: 'Every engagement is led by experienced practitioners — not account managers or junior staff. Expertise is in the room, always.' },
  { num: '02', title: 'Founder Accountability', body: 'Our founder is directly involved in strategy, architecture and delivery governance. One point of accountability, start to finish.' },
  { num: '03', title: 'Architecture Before Execution', body: 'We define governance, standards and operating models before implementation begins. Clarity first, execution second.' },
  { num: '04', title: 'Full Lifecycle Ownership', body: 'From assessment through stable operations — strategy, implementation and managed services under one accountable roof.' },
];

export const MANAGED = [
  { title: 'Database Operations', body: 'Monitoring, performance tuning, patching, backup governance and platform stability across enterprise databases.', to: '/managed-services/database' },
  { title: 'Backup & Recovery', body: 'Automated, tested backup strategies with guaranteed recovery times and full audit trails for compliance.', to: '/managed-services/database' },
  { title: 'Security & Compliance Ops', body: 'Continuous posture monitoring, vulnerability management, access controls and governance alignment.', to: '/managed-services/security' },
  { title: 'Cloud & Infrastructure Ops', body: 'Operational oversight for cloud environments including cost governance, configuration and reliability.', to: '/managed-services/cloud' },
  { title: 'Platform Reliability Ops', body: 'Proactive performance monitoring, capacity planning, incident coordination and operational improvements.', to: '/managed-services/platform' },
  { title: 'Threat Detection & Response', body: 'Real-time threat detection, SIEM management and incident response to protect your environment around the clock.', to: '/managed-services/security' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Managed Services', href: '/managed-services' },
  { label: 'Contact', href: '/contact' },
];

export const INDUSTRIES = [
  { title: 'Banking & Financial', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85', body: 'High-availability platforms, security controls and audit readiness for transaction-critical systems.' },
  { title: 'Healthcare', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85', body: 'Secure data architectures, modernization and compliance-driven cloud and database operations.' },
  { title: 'Retail & eCommerce', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85', body: 'Scalable platforms for digital transactions, analytics and seasonal demand handling.' },
  { title: 'Education', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85', body: 'Modern data environments, cloud-native platforms and AI for improved learning outcomes.' },
  { title: 'Technology & SaaS', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85', body: 'Resilient, cloud-native platforms that scale reliably with performance and cost efficiency.' },
  { title: 'Logistics & Supply Chain', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85', body: 'Always-on infrastructure for integrations, tracking and real-time operational visibility.' },
];

export const TRUST_LOGOS = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle'];
