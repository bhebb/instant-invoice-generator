import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ClerkService, ClerkSignInComponent } from '@bhebb/ngx-clerk';
import { TranslatePipe } from '@ngx-translate/core';
import { take } from 'rxjs';

@Component({
  selector: 'frinay-home',
  imports: [ClerkSignInComponent, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit {
  clerk = inject(ClerkService);
  router = inject(Router);

  ngOnInit(): void {
    this.clerk.user$.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.router.navigate(['/invoices']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
