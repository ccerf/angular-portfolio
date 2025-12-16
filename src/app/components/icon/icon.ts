// icon.component.ts
import { Component, Input, ElementRef, OnInit, inject } from '@angular/core';
import { SvgIconService } from '../../core/svg-icon.service';

@Component({
  selector: 'app-icon',
  template: ``,
})
export class IconComponent implements OnInit {
  @Input() name!: string;
  @Input() fill = 'currentColor';
  @Input() stroke = 'currentColor';

  private host = inject(ElementRef<HTMLElement>);
  private svgService = inject(SvgIconService);
  
  ngOnInit() {
    this.svgService.loadSvg(this.name).subscribe((svg) => {
      const patchedSvg = svg
        // Supprime width / height fixes
        .replace(/width="[^"]*"/g, '')
        .replace(/height="[^"]*"/g, '')

        // Supprime TOUT style inline de couleur
        .replace(/style="[^"]*(fill|stroke)[^"]*"/g, '')

        // Supprime fill / stroke inline
        .replace(/fill="[^"]*"/g, '')
        .replace(/stroke="[^"]*"/g, '')

        // Supprime <style> internes
        .replace(/<style[^>]*>[\s\S]*?<\/style>/g, '')

        // Force le SVG à hériter de currentColor
        .replace(
          '<svg',
          `<svg fill="${this.fill}" stroke="${this.stroke}" class="w-full h-full"`
        );
      
      this.host.nativeElement.innerHTML = patchedSvg;
    });
  }
}
