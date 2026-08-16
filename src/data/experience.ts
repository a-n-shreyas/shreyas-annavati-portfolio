export interface ExperienceEntry {
  company: string;
  companyNote?: string;
  title: string;
  range: string;
  type: 'Full-time';
  project?: string;
  points: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Synthetic People AI',
    companyNote: 'Syntera Solutions Pvt. Ltd.',
    title: 'Software Engineer — Applications',
    range: 'Feb 2026 — Jul 2026',
    type: 'Full-time',
    project: 'Early-stage AI startup',
    points: [
      'Worked as the primary frontend developer on an AI-powered application, shipping 30+ pages/features and 30+ reusable React components.',
      'Built interfaces for AI-powered product functionality, working closely with backend services that integrated LLM capabilities.',
      'Connected React clients to backend REST APIs, translating fast-changing product requirements into working UI in a rapid, startup-paced environment.',
      'Owned frontend implementation end to end, from component architecture to styling with Tailwind CSS.',
    ],
    stack: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'AI/LLM Integration'],
  },
  {
    company: 'Accenture',
    title: 'Associate Software Engineer',
    range: 'Dec 2022 — Sep 2024',
    type: 'Full-time',
    project: 'Security Bank Corporation, Philippines',
    points: [
      'Built and maintained frontend features for an enterprise banking client using React.js, TypeScript and the broader MERN stack.',
      'Developed reusable UI components and REST API integrations as part of a full-stack JavaScript delivery team.',
      'Fixed bugs and shipped enhancements across customer-facing banking modules in an Agile/Scrum environment.',
      'Collaborated cross-functionally with QA and backend engineers, using Git for version control throughout the delivery lifecycle.',
    ],
    stack: ['React.js', 'TypeScript', 'JavaScript ES6+', 'Node.js', 'Express.js', 'REST APIs', 'Git'],
  },
];
