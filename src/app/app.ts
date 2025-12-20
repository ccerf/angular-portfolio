import { afterNextRender, Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { activeSection } from './core/scroll-state';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    About,
    Experience,
    Projects,
    Contact
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
