// icon.component.ts
import { Component, Input, ElementRef, OnInit, inject } from '@angular/core';
import { SvgIconService } from '../../core/svg-icon.service';

@Component({
  selector: 'app-icon',
  template: ``,
})
export class IconComponent implements OnInit {
  @Input() name!: string;

  private host = inject(ElementRef<HTMLElement>);
  private svgService = inject(SvgIconService);
  
  ngOnInit() {
    this.svgService.loadSvg(this.name).subscribe((svg) => {
      const patchedSvg = svg
        .replace(/width="[^"]*"/g, '')
        .replace(/height="[^"]*"/g, '')
        .replace('<svg', '<svg class="w-full h-full"');

      this.host.nativeElement.innerHTML = patchedSvg;
    });
  }
}
