import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  translate = inject(TranslateService);

  get currentLang(): 'fr' | 'en' {
    return (
      (localStorage.getItem('lang') as 'fr' | 'en') ||
      this.translate.currentLang ||
      'fr'
    );
  }

  setLang(lang: 'fr' | 'en') {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    location.reload();
  }
}
