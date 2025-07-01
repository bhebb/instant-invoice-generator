import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClerkUserButtonComponent } from '@bhebb/ngx-clerk';
import { Language } from '../../services/language';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'frinay-header',
  imports: [RouterModule, ClerkUserButtonComponent, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnInit {
  translate = inject(Language);
  currentLang = 'fr';

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang;
  }

  switchLang(newLang: 'fr' | 'en'): void {
    this.translate.setLang(newLang);
  }
}
