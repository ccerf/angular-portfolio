import { signal } from '@angular/core';

export const activeSection = signal<'hero'|'about'|'experience'|'projects'|'contact'>('hero');
