export interface InvoiceTemplate {
  id: string;
  number: string;
  client: string;
  amount: number;
  currency: string;
  status: 'paid' | 'unpaid' | 'overdue';
  issuedAt: string; // ISO date string
}
