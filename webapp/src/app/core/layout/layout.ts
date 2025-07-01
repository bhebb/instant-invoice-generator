import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Auth } from '../auth/auth';

@Component({
  selector: 'frinay-layout',
  imports: [Footer, Header, Sidebar, RouterOutlet, AsyncPipe],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {
  auth = inject(Auth);
  isSignedIn = false;

  constructor() {
    this.isSignedIn = this.auth.isSignedIn();
  }
}
