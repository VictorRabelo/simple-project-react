export interface Project {
  title: string;
  description: string;
  tech: string[];
  live: string;
  repo: string;
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A sample project showcasing frontend skills.',
    tech: ['React', 'TypeScript'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Project Two',
    description: 'Backend service built with modern technologies.',
    tech: ['C#', 'Oracle SQL'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Project Three',
    description: 'Mobile application demonstrating cross-platform development.',
    tech: ['Flutter'],
    live: '#',
    repo: '#',
  },
];
