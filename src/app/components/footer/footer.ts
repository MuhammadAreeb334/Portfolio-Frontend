import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUp,
  Heart,
} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Twitter = Twitter;
  readonly Mail = Mail;
  readonly ArrowUp = ArrowUp;
  readonly Heart = Heart;

  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  socials = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/MuhammadAreeb334' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/muhammad-areeb-334aaac' },
    { icon: Mail, label: 'Email', link: 'mailto:muhammadareeb334@gmail.com' },
  ];

  services = [
    'Frontend Development',
    'MERN Stack Development',
    'Backend & API Development',
    'Dashboard Development',
    'E-Commerce Solutions',
    'Website Maintenance',
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
