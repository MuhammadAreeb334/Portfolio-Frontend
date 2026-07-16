import { Component, HostListener, signal, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnDestroy {
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);
  activeSection = signal('home');

  navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    const scrollY = window.scrollY + 80;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  scrollTo(id: string) {
    this.isMobileMenuOpen.set(false);

    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu() {
    const isOpen = !this.isMobileMenuOpen();

    this.isMobileMenuOpen.set(isOpen);

    document.documentElement.style.overflow = isOpen ? 'hidden' : '';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
  ngOnDestroy() {
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}
}
