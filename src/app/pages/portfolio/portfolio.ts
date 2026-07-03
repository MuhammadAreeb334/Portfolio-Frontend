import { Component, signal, computed, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements AfterViewInit {
  filterTabs = ['All', 'Frontend', 'Full Stack', 'Dashboard']; //, 'Backend'

  activeFilter = signal('All');

  hoveredProject: number | null = null;

  private observer!: IntersectionObserver;

  projects = [
    {
      title: 'Shopper E-Commerce',
      cat: 'Full Stack',
      image:
        'https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWNvbW1lcmNlfGVufDB8fDB8fHww',
      desc: 'Full-stack e-commerce platform featuring secure JWT authentication, Stripe payment integration, shopping cart, and an admin dashboard for product management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      filter: 'Full Stack',
      link: 'https://shopper-clothings.vercel.app',
    },
    {
      title: 'DashMate',
      cat: 'Dashboard',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww',
      desc: 'Modern admin dashboard with interactive charts, analytics, responsive layouts, and a clean user interface for efficient data management.',
      tags: ['React', 'Tailwand', 'JavaScript'],
      filter: 'Dashboard',
      link: 'https://dash-mate-nu.vercel.app',
    },
    // {
    //   title: 'DevConnect API',
    //   cat: 'Backend',
    //   image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    //   desc: 'RESTful API with JWT authentication, role-based permissions, rate limiting and full documentation.',
    //   tags: ['Node.js', 'Express', 'PostgreSQL'],
    //   filter: 'Backend',
    //   link: '#'
    // },
    {
      title: 'FS Insurance Agency',
      cat: 'Frontend',
      image:
        'https://plus.unsplash.com/premium_photo-1661763036649-2c4c70e8a97b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGluc3VyYW5jZSUyMGFnZW50fGVufDB8fDB8fHww',
      desc: 'Modern and responsive insurance agency website featuring smooth animations, service pages, quote request forms, and an intuitive user experience.',
      tags: ['React', 'TailwindCSS', 'JavaScript'],
      filter: 'Frontend',
      link: 'https://fsinsurance.vercel.app',
    },
    {
      title: 'PAC Trading Automation',
      cat: 'Dashboard',
      image:
        'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D',
      desc: 'Developed a responsive trading dashboard with analytics, performance monitoring, interactive charts, and streamlined workflow management.',
      tags: ['React', 'Tailwand', 'JavaScript'],
      filter: 'Dashboard',
      link: 'https://pac-trading-automation-pink.vercel.app',
    },
    {
      title: 'LPMM Terminal',
      cat: 'Dashboard',
      image:
        'https://images.unsplash.com/photo-1689732888407-310424e3a372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      desc: 'Built a modern trading terminal featuring live market updates, performance analytics, responsive design, and an intuitive user interface.',
      tags: ['React', 'Tailwand', 'WebSocket'],
      filter: 'Dashboard',
      link: 'https://lpmm-terminal.netlify.app',
    },
  ];

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'All' ? this.projects : this.projects.filter((p) => p.filter === f);
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 },
    );

    this.observeCards();
  }

  observeCards() {
    this.observer.disconnect();

    const elements = document.querySelectorAll('.port-reveal');

    elements.forEach((el) => this.observer.observe(el));
  }
}
