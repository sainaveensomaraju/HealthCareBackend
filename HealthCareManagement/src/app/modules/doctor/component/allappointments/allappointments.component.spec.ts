import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllappointmentsComponent } from './allappointments.component';

describe('AllappointmentsComponent', () => {
  let component: AllappointmentsComponent;
  let fixture: ComponentFixture<AllappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllappointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
