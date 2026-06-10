import { Component, signal, computed, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements AfterViewInit {

  filterTabs = ['All', 'Frontend', 'Full Stack', 'Backend', 'Dashboard'];

  activeFilter = signal('All');

  hoveredProject: number | null = null;

  private observer!: IntersectionObserver;

  projects = [
    {
      title: 'Nexus Dashboard',
      cat: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      desc: 'Enterprise analytics platform with real-time data visualization and role-based access control for 200k+ users.',
      tags: ['Angular', 'D3.js', 'Node.js'],
      filter: 'Dashboard',
      link: '#'
    },
    {
      title: 'ShopFlow E-Commerce',
      cat: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
      desc: 'Full-stack e-commerce platform with Stripe payments, product management, cart system and order tracking.',
      tags: ['React', 'Node.js', 'MongoDB'],
      filter: 'Full Stack',
      link: '#'
    },
    {
      title: 'DevConnect API',
      cat: 'Backend',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
      desc: 'RESTful API with JWT authentication, role-based permissions, rate limiting and full documentation.',
      tags: ['Node.js', 'Express', 'PostgreSQL'],
      filter: 'Backend',
      link: '#'
    },
    {
      title: 'Portfolio Builder',
      cat: 'Frontend',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
      desc: 'Drag-and-drop portfolio builder with live preview, custom themes, and one-click deployment.',
      tags: ['Angular', 'TailwindCSS', 'TypeScript'],
      filter: 'Frontend',
      link: '#'
    },
    {
      title: 'TaskFlow SaaS',
      cat: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80',
      desc: 'B2B project management SaaS with Kanban boards, time tracking, invoicing and team collaboration.',
      tags: ['React', 'NestJS', 'PostgreSQL'],
      filter: 'Full Stack',
      link: '#'
    },
    {
      title: 'Analytics Pro',
      cat: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      desc: 'Business intelligence dashboard with interactive charts, custom reports and real-time data streaming.',
      tags: ['Angular', 'Chart.js', 'WebSocket'],
      filter: 'Dashboard',
      link: '#'
    },
  ];

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'All'
      ? this.projects
      : this.projects.filter(p => p.filter === f);
  });

  setFilter(tab: string) {
    this.activeFilter.set(tab);
    this.hoveredProject = null;

    setTimeout(() => this.observeCards(), 0);
  }

  setHovered(index: number | null) {
    this.hoveredProject = index;
  }

  ngAfterViewInit() {
    this.initObserver();
  }

  initObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observeCards();
  }

  observeCards() {
    this.observer.disconnect();

    const elements = document.querySelectorAll('.port-reveal');

    elements.forEach(el => this.observer.observe(el));
  }
}