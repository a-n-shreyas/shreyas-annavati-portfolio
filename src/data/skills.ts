export interface SkillGroup {
  key: string;
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'frontend',
    label: 'Frontend Engineering',
    items: ['React.js', 'TypeScript', 'JavaScript ES6+', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    key: 'backend',
    label: 'Backend Engineering',
    items: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'REST APIs'],
  },
  {
    key: 'ai-ml',
    label: 'AI & Machine Learning',
    items: [
      'Generative AI',
      'LLM Applications',
      'OpenAI APIs',
      'Anthropic APIs',
      'LLM Integration',
      'Prompt Engineering',
      'RAG Concepts',
      'PyTorch',
      'Transformers',
      'Machine Learning',
    ],
  },
  {
    key: 'ai-tools',
    label: 'AI Tools',
    items: ['OpenAI', 'Claude', 'Gemini', 'ChatGPT'],
  },
  {
    key: 'databases',
    label: 'Databases',
    items: ['MongoDB', 'SQLite'],
  },
  {
    key: 'tools',
    label: 'Developer Tools',
    items: ['Git', 'Docker', 'CI/CD', 'Jest', 'Postman'],
  },
  {
    key: 'languages',
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
];
