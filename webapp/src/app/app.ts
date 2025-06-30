import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClerkService } from 'ngx-clerk';

@Component({
  selector: 'frinay-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'invoice-generator';

  constructor(private _clerk: ClerkService) {
    this._clerk.__init({
      publishableKey: 'pk_test_ZXhjaXRlZC1vd2wtMTMuY2xlcmsuYWNjb3VudHMuZGV2JA',
    });
  }
}
