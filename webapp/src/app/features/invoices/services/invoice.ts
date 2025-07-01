import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceModel } from '../model/invoice-model';

@Injectable({
  providedIn: 'root',
})
export class Invoice {
  private readonly apiUrl = 'http://localhost:8000/api/invoices'; // adjust if needed

  constructor(private http: HttpClient) {}

  getAll(): Observable<InvoiceModel[]> {
    return this.http.get<InvoiceModel[]>(this.apiUrl);
  }

  getById(id: string): Observable<InvoiceModel> {
    return this.http.get<InvoiceModel>(`${this.apiUrl}/${id}`);
  }

  create(invoice: Partial<InvoiceModel>): Observable<InvoiceModel> {
    return this.http.post<InvoiceModel>(this.apiUrl, invoice);
  }

  update(id: string, update: Partial<InvoiceModel>): Observable<InvoiceModel> {
    return this.http.put<InvoiceModel>(`${this.apiUrl}/${id}`, update);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
