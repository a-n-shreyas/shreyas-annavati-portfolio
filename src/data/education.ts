export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  range: string;
  emphasis?: boolean;
  detail?: { label: string; value: string };
  modules?: string[];
}

export const education: EducationEntry[] = [
  {
    degree: 'MSc Advanced Computer Science',
    institution: 'University of Birmingham',
    location: 'United Kingdom',
    range: '2024 — 2025',
    emphasis: true,
    detail: {
      label: 'Dissertation',
      value: 'Lightweight Transformer for Real-Time ICS Anomaly Detection (F1-score: 0.935)',
    },
  },
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Dayananda Sagar Academy of Technology and Management',
    location: 'India',
    range: '2018 — 2022',
  },
];
