import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { ClerkAuthGuardService } from 'ngx-clerk';

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
    ],
  },
];
