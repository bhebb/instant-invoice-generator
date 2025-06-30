import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDetails } from './settings-details';

describe('SettingsDetails', () => {
  let component: SettingsDetails;
  let fixture: ComponentFixture<SettingsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
