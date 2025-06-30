import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'frinay-invoices',
  imports: [CommonModule],
  templateUrl: './invoices.html',
  styleUrl: './invoices.scss',
})
export class Invoices {
  invoices = [
    { customer: 'PepsiCo Inc.', id: 'DJ-003', amount: 345, status: 'Open' },
    { customer: 'UXDN Inc.', id: 'UX-045', amount: 1135, status: 'Due' },
    { customer: 'Coolclient AS', id: 'DJ-056', amount: 345, status: 'Void' },
    { customer: 'Perfectly Inc.', id: 'DJ-033', amount: 305, status: 'Open' },
  ];
}
