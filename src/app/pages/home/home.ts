import { afterNextRender, Component, ElementRef, viewChildren } from '@angular/core';
import { activeSection } from '../../core/scroll-state';
import { About } from '../../sections/about/about';
import { Experience } from '../../sections/experience/experience';
import { Hero } from '../../sections/hero/hero';
import { Projects } from '../../sections/projects/projects';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    Experience,
    Projects
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
private sections = viewChildren<ElementRef>('sectionRef');

  constructor() {
    afterNextRender(() => {
      this.initScrollObserver();
    });
  }

  private initScrollObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.set(entry.target.id);
        }
      });
    }, observerOptions);

    this.sections().forEach((section) => {
      observer.observe(section.nativeElement);
    });
  }
}
