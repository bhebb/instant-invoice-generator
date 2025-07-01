import { computed, Injectable, Signal, signal } from '@angular/core';
import { UserModel } from '../user/models/user-model';
import { ClerkService, UserResource } from '@bhebb/ngx-clerk';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private _user = signal<UserModel | null>(null);

  constructor(private clerk: ClerkService) {
    this.clerk.user$.subscribe((user) => {
      if (user) {
        this._user.set(user);
      } else {
        this._user.set(null);
      }
    });
  }

  readonly user: Signal<UserModel | null> = computed(() => this._user());
  readonly isSignedIn = computed(() => !!this._user());
  async getToken(): Promise<string | null> {
    const session = await firstValueFrom(this.clerk.session$);
    return session?.getToken() ?? null;
  }
}
