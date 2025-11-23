import { Component } from '@angular/core';
import { activeSection } from '../../core/scroll-state';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  activeSection = activeSection;
}
