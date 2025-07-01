import { Routes } from '@angular/router';
import { Settings } from './settings-page/settings';
import { InvoiceTemplate } from '../invoices/invoice-template/invoice-template';
import { EmailTemplate } from './email-template/email-template';
import { SettingsDetails } from './settings-details/settings-details';
import { UserSettings } from './user-settings/user-settings';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./settings-page/settings').then((m) => m.Settings),
  },
  { path: 'email-template', component: EmailTemplate },
  { path: 'user-settings', component: UserSettings },
  { path: 'other', component: SettingsDetails },
];
