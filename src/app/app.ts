import { afterNextRender, Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Contact } from './sections/contact/contact';
import { activeSection } from './core/scroll-state';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Contact,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-portfolio');

  constructor() {
    // Ce bloc ne s'exécute QUE sur le client (navigateur)
    afterNextRender(() => {
      this.initScrollObserver();
    });
  }

  private initScrollObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.set(entry.target.id);
        }
      });
    }, observerOptions);

    // Sélection des sections après le rendu
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
  }
}
