import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SvgIconService {
  private cache = new Map<string, Observable<string>>();

  private http = inject(HttpClient);

  loadSvg(name: string): Observable<string> {
    const url = `/svg/${name}.svg`;
    if (!this.cache.has(url)) {
      const request$ = this.http
        .get(url, { responseType: 'text' })
        .pipe(shareReplay(1));
      this.cache.set(url, request$);
    }
    return this.cache.get(url)!;
  }
}
