import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInvoices } from './new-invoices';

describe('NewInvoices', () => {
  let component: NewInvoices;
  let fixture: ComponentFixture<NewInvoices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewInvoices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewInvoices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
