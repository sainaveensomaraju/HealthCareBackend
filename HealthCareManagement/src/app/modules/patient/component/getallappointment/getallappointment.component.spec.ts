import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallappointmentComponent } from './getallappointment.component';

describe('GetallappointmentComponent', () => {
  let component: GetallappointmentComponent;
  let fixture: ComponentFixture<GetallappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
