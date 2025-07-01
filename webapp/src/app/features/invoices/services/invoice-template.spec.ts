import { TestBed } from '@angular/core/testing';

import { InvoiceTemplate } from './invoice-template';

describe('InvoiceTemplate', () => {
  let service: InvoiceTemplate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceTemplate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
