import { Routes } from '@angular/router';
import { Settings } from './settings-page/settings';
import { InvoiceTemplate } from './invoice-template/invoice-template';
import { EmailTemplate } from './email-template/email-template';
import { SettingsDetails } from './settings-details/settings-details';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./settings-page/settings').then((m) => m.Settings),
  },
  { path: 'invoice-template', component: InvoiceTemplate },
  { path: 'email-template', component: EmailTemplate },
  { path: 'other', component: SettingsDetails },
];
