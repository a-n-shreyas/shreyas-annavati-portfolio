export interface Project {
  index: string;
  title: string;
  flagship?: boolean;
  status: 'Completed' | 'In Production';
  description: string;
  problem: string;
  stack: string[];
  github?: string;
  liveDemo?: string;
  metric?: { label: string; value: string };
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'Lightweight Transformer for Real-Time ICS Anomaly Detection',
    flagship: true,
    status: 'Completed',
    description:
      'My MSc dissertation: a compact Transformer-based model built to detect anomalies in Industrial Control Systems in real time, addressing the accuracy/latency trade-off that keeps most transformer-based detectors out of production ICS environments.',
    problem:
      'Industrial control systems need anomaly detection that runs in real time on constrained hardware — most transformer architectures are too heavy for that. This project explored how to shrink the model without losing detection quality, and used SMOTE to address class imbalance in attack/anomaly data.',
    stack: ['Python', 'PyTorch', 'Transformers', 'Machine Learning', 'SMOTE', 'Industrial Control Systems'],
    metric: { label: 'F1-Score', value: '0.935' },
  },
  {
    index: '02',
    title: 'StudySync',
    status: 'Completed',
    description:
      'A real-time collaborative learning platform, built as a hackathon-winning team project. Students study together in live sessions with synced state across all participants.',
    problem:
      'Group study tools tend to be either static (shared docs with no real-time presence) or heavyweight. StudySync focused on a lightweight, real-time collaborative session that stayed responsive as more students joined.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets'],
  },
  {
    index: '03',
    title: 'Bug Report Classification',
    status: 'Completed',
    description:
      'A machine-learning coursework project focused on automatically classifying software bug reports, built during my MSc.',
    problem:
      'Triaging bug reports by hand doesn\u2019t scale as a codebase and its issue tracker grow. This project explored a classification approach to route and label incoming bug reports automatically.',
    stack: ['Python', 'Machine Learning', 'Text Classification'],
  },
  {
    index: '04',
    title: 'AI-Powered Product Interfaces — Synthetic People AI',
    status: 'In Production',
    description:
      'Frontend work from my role at Synthetic People AI: building the React interfaces for an AI-powered application, including the UI layer for LLM-backed product functionality.',
    problem:
      'The product needed a frontend that could keep pace with fast-changing AI-driven features in a startup environment, without sacrificing structure or reusability as the surface area grew to 30+ pages.',
    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'AI/LLM Integration'],
  },
];
