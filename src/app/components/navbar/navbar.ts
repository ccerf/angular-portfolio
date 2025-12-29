import { Component, DOCUMENT, inject, PLATFORM_ID } from '@angular/core';
import { activeSection } from '../../core/scroll-state';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { IOptions } from '../../models/common.models';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  activeSection = activeSection;
  sections = [
    {value: 'about', label: 'À propos'},
    {value: 'experience', label: 'Expériences'},
    {value: 'projects', label: 'Projets'}
  ];

  private document: Document = inject(DOCUMENT);
  private platformId: Object = inject(PLATFORM_ID);

  navigateToSection(section: IOptions): void {
    activeSection.set(section.value.toString());
    if (isPlatformBrowser(this.platformId)) {
      if (section.value === this.sections[0].value) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = this.document.getElementById(section.value.toString());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
}
