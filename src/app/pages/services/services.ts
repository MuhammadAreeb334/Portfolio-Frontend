import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  services = [
    {
      num: '01',
      icon: '⬡',
      title: 'Frontend Development',
      desc: 'Building modern, responsive, and high-performance web applications using React.js, Angular, Tailwind CSS, and TypeScript.',
      items: ['React.js Applications', 'Angular Development', 'Responsive UI Design'],
    },
    {
      num: '02',
      icon: '◈',
      title: 'MERN Stack Development',
      desc: 'Developing complete full-stack web applications with MongoDB, Express.js, React.js, and Node.js.',
      items: ['Full-Stack Applications', 'Authentication Systems', 'API Integration'],
    },
    {
      num: '03',
      icon: '⬧',
      title: 'Backend & API Development',
      desc: 'Creating secure and scalable backend systems with RESTful APIs, JWT authentication, and database integration.',
      items: ['REST APIs', 'JWT Authentication', 'Database Management'],
    },
    {
      num: '04',
      icon: '◉',
      title: 'Dashboard Development',
      desc: 'Designing and developing interactive admin panels and business dashboards with charts, analytics, and data visualization.',
      items: ['Admin Dashboards', 'Analytics Panels', 'Data Visualization'],
    },
    {
      num: '05',
      icon: '◫',
      title: 'E-Commerce Solutions',
      desc: 'Building scalable e-commerce platforms with secure payments, product management, and user authentication.',
      items: ['Stripe Integration', 'Product Management', 'Order Management'],
    },
    {
      num: '06',
      icon: '⬠',
      title: 'Website Maintenance',
      desc: 'Providing ongoing support, bug fixes, feature enhancements, and updates to keep applications running smoothly.',
      items: ['Bug Fixes', 'Feature Updates', 'Technical Support'],
    },
  ];

  hoveredCard: number | null = null;

  ngOnInit() {
    this.initRevealObserver();
  }

  initRevealObserver() {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.15 },
    );
    setTimeout(() => {
      document.querySelectorAll('.svc-reveal').forEach((el) => observer.observe(el));
    }, 100);
  }

  setHovered(index: number | null) {
    this.hoveredCard = index;
  }
}
