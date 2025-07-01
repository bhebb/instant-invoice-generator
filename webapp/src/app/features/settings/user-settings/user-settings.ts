import { Component } from '@angular/core';
import { ClerkUserButtonComponent } from '@bhebb/ngx-clerk';

@Component({
  selector: 'frinay-user-settings',
  imports: [ClerkUserButtonComponent],
  templateUrl: './user-settings.html',
  styleUrl: './user-settings.scss',
})
export class UserSettings {}
