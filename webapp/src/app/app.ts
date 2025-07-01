import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClerkService } from '@bhebb/ngx-clerk';
import { TranslateService } from '@ngx-translate/core';
import { enUS, frFR } from '@clerk/localizations';

@Component({
  selector: 'frinay-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  protected title = 'invoice-generator';
  translate = inject(TranslateService);
  langInStorge = 'fr';

  constructor(private _clerk: ClerkService) {
    this.langInStorge = (localStorage.getItem('lang') as 'fr' | 'en') || 'fr';

    this._clerk.__init({
      publishableKey: 'pk_test_ZXhjaXRlZC1vd2wtMTMuY2xlcmsuYWNjb3VudHMuZGV2JA',
      localization: this.langInStorge === 'fr' ? frFR : enUS,
    });
  }

  ngOnInit(): void {
    this.translate.setDefaultLang(this.langInStorge || 'fr');
    // Use the current language or fallback to French
    this.translate.use(this.langInStorge || 'fr');
  }
}
