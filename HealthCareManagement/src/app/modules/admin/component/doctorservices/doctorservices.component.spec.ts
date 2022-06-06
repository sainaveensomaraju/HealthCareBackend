import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorservicesComponent } from './doctorservices.component';

describe('DoctorservicesComponent', () => {
  let component: DoctorservicesComponent;
  let fixture: ComponentFixture<DoctorservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
