import { AsyncPipe } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClerkService, UserResource } from 'ngx-clerk';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'frinay-header',
  imports: [AsyncPipe, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnInit {
  user$: ReplaySubject<UserResource> = new ReplaySubject(); // Replace 'any' with the appropriate type for user$

  clerkService = inject(ClerkService);

  ngOnInit(): void {
    this.user$ = this.clerkService.user$ as ReplaySubject<UserResource>;
  }
}
