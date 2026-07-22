export const CONTACT = {
  phone: '+91 925 0000 962',
  phoneHref: 'https://wa.me/+919250000962',
  email: 'info@gigamatics.com',
  emailHref: 'mailto:info@gigamatics.com',
  hours: 'Mon - Fri: 9:00 - 18:30',
  address: 'N101, Wellington Heights Extn, Sector-117, Mohali, Punjab 160055, India',
  addressShort: 'Mohali, Punjab, India — 160055',
  company: 'Gigamatics Global Technology LLP',
};

export const SERVICE_NAV = [
  { label: 'Overview', to: '/services' },
  { label: 'Data Modernization & Analytics', to: '/services/data-modernization' },
  { label: 'Cloud & Infrastructure', to: '/services/cloud-infrastructure' },
  { label: 'Risk, Security & Compliance', to: '/services/security-risk-compliance' },
  { label: 'Disaster Recovery & Business Continuity', to: '/services/disaster-recovery' },
  { label: 'Platform Reliability & Performance', to: '/services/platform-reliability' },
  { label: 'AI & Intelligent Automation', to: '/services/ai-automation' },
  { label: 'FinOps & Cloud Cost Optimisation', to: '/services/finops' },
];

export const MANAGED_NAV = [
  { label: 'Overview', to: '/managed-services' },
  { label: 'Managed Database Operations', to: '/managed-services/database' },
  { label: 'Cloud & Infrastructure Operations', to: '/managed-services/cloud' },
  { label: 'Managed Security & Compliance Operations', to: '/managed-services/security' },
  { label: 'Platform Reliability & Performance', to: '/managed-services/platform' },
];

export const MAIN_NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: SERVICE_NAV,
  },
  {
    label: 'Managed Services',
    to: '/managed-services',
    children: MANAGED_NAV,
  },
  { label: 'Contact', to: '/contact' },
];

export const FOOTER_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Managed Services', to: '/managed-services' },
  { label: 'Contact', to: '/contact' },
];
