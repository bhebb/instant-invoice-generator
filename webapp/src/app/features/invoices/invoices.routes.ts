import { Routes } from '@angular/router';
import { Invoices } from './invoices-list/invoices';

export const ROUTES: Routes = [
  {
    path: 'invoices',
    loadComponent: () =>
      import('./invoices-list/invoices').then((m) => m.Invoices),
  },
];
