import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ClerkService, UserResource } from 'ngx-clerk';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'frinay-header',
  imports: [AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  user$: ReplaySubject<UserResource> = new ReplaySubject(); // Replace 'any' with the appropriate type for user$

  clerkService = inject(ClerkService);

  ngOnInit(): void {
    this.user$ = this.clerkService.user$ as ReplaySubject<UserResource>;
  }
}
