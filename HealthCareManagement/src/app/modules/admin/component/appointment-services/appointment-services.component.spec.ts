import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentServicesComponent } from './appointment-services.component';

describe('AppointmentServicesComponent', () => {
  let component: AppointmentServicesComponent;
  let fixture: ComponentFixture<AppointmentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
