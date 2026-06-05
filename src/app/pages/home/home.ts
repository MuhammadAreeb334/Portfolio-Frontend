import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  stats = [
    { label: 'Projects Completed', target: 10, suffix: '+', current: 0 },
    { label: 'Years Coding', target: 3, suffix: '+', current: 0 },
    { label: 'Technologies', target: 10, suffix: '+', current: 0 },
    { label: 'Learning Mindset', target: 100, suffix: '%', current: 0 },
  ];

  ngOnInit() {
    setTimeout(() => this.animateCounters(), 1200);
    setTimeout(() => this.initRevealObserver(), 200);
  }

  animateCounters() {
    this.stats.forEach((stat) => {
      const duration = 1800;
      const startTime = performance.now();
      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        stat.current = Math.round(eased * stat.target);
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    });
  }

  initRevealObserver() {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
