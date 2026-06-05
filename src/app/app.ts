import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';
import { Footer } from './components/footer/footer';
import { BackgroundEffects } from './components/background-effects/background-effects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Home, About, Services, Portfolio, Contact, Footer, BackgroundEffects],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Portfolio-Frontend';
}
