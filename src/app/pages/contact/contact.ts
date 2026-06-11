import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Send,
} from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Clock = Clock;
  readonly MessageCircle = MessageCircle;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly CheckCircle = CheckCircle;
  readonly AlertCircle = AlertCircle;
  readonly Send = Send;

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

  isSubmitting = signal(false);
  isSubmitted = signal(false);
  hasError = signal(false);

  contactInfo = [
    { icon: Mail, label: 'Email', value: 'muhammadareeb334@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Karachi, Pakistan' },
    { icon: Clock, label: 'Availability', value: 'Open to freelance & full-time' },
    { icon: MessageCircle, label: 'Response', value: 'Within 24 hours' },
  ];

  socials = [
    { icon: Github, label: 'GitHub', link: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com' },
  ];

  services = [
    'Frontend Development',
    'MERN Stack Development',
    'Backend & API Development',
    'Dashboard Development',
    'E-Commerce Solutions',
    'Website Maintenance',
    'Other',
  ];

  ngOnInit() {
    this.initRevealObserver();
  }

  initRevealObserver() {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.1 },
    );
    setTimeout(() => {
      document.querySelectorAll('.contact-reveal').forEach((el) => observer.observe(el));
    }, 100);
  }

  onSubmit() {
    if (!this.form.firstName || !this.form.email || !this.form.message) {
      this.hasError.set(true);
      setTimeout(() => this.hasError.set(false), 3000);
      return;
    }
    this.isSubmitting.set(true);
    this.hasError.set(false);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.resetForm();

      setTimeout(() => this.isSubmitted.set(false), 3000);
    }, 2000);
  }

  resetForm() {
    this.form = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    };
  }
}
