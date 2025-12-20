import { Component } from '@angular/core';
import { activeSection } from '../../core/scroll-state';
import { CommonModule } from '@angular/common';
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
    {value: 'experience', label: 'Expérience'},
    {value: 'projects', label: 'Projets'}
  ];

  navigateToSection(section: IOptions): void {
    activeSection.set(section.value.toString())
  }
}
