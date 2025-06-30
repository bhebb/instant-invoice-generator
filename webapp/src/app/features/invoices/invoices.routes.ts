import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./invoices-list/invoices').then((m) => m.Invoices),
  },
];
