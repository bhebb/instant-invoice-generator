import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ClerkService } from '@bhebb/ngx-clerk';
import { from, of, switchMap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const clerk = inject(ClerkService);
  return from(
    clerk.session$.pipe(
      switchMap((session) => {
        if (!session) return of(null);
        return from(session.getToken());
      })
    )
  ).pipe(
    switchMap((token) => {
      if (token) {
        const authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next(authReq);
      }
      return next(req);
    })
  );
};
