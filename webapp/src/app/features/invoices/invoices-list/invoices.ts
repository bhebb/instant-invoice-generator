import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceModel } from '../model/invoice-model';
import { Invoice } from '../services/invoice';

@Component({
  selector: 'frinay-invoices',
  imports: [CommonModule],
  templateUrl: './invoices.html',
  styleUrl: './invoices.scss',
})
export class Invoices implements OnInit {
  invoices$: Observable<InvoiceModel[]> = new Observable<InvoiceModel[]>();

  constructor(private invoiceService: Invoice) {}

  ngOnInit(): void {
    this.invoices$ = this.invoiceService.getAll();
  }
}
