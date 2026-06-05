import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  skills = [
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Angular',
    'TypeScript',
    'TailwindCSS',
    'Redux',
    'REST API Integration',
    'Authentication (JWT, OAuth)',
    'UI Development',
    'Dashboard Design',
    'Git & Version Control',
  ];

  stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Built' },
    { number: '10+', label: 'Technologies' },
  ];

  experience = [
    {
      year: 'Jan 2026 - Apr 2026',
      role: 'Frontend Developer Intern',
      company: 'Tesseract Innovation Inc.',
      desc: 'Worked on building responsive UI components, improving frontend performance, and integrating APIs in modern web applications using React and NEXT.',
    },
    {
      year: '2025 - Present',
      role: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      desc: 'Developing full-stack web applications including dashboards, e-commerce platforms, and custom business solutions using MERN stack technologies.',
    },
    {
      year: '2024 - 2025',
      role: 'Frontend Developer (Personal Projects)',
      company: 'Independent',
      desc: 'Built multiple responsive web applications and UI dashboards focusing on React and modern frontend architecture.',
    },
  ];
}
