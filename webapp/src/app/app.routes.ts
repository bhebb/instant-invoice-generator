import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { ClerkAuthGuardService } from '@bhebb/ngx-clerk';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./core/layout/home/home').then((m) => m.Home),
      },
      {
        path: 'invoices',
        loadChildren: () =>
          import('./features/invoices/invoices.routes').then((m) => m.ROUTES),
        canActivate: [ClerkAuthGuardService],
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/settings/settings.routes').then((m) => m.ROUTES),
      },
    ],
  },
];
