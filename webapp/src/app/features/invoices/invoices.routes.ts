import { Routes } from '@angular/router';
import { InvoiceTemplate } from './invoice-template/invoice-template';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./invoices-list/invoices').then((m) => m.Invoices),
  },
  { path: 'invoice-template', component: InvoiceTemplate },
];
