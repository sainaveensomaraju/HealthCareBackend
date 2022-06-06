import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDoctorByIdComponent } from './find-doctor-by-id.component';

describe('FindDoctorByIdComponent', () => {
  let component: FindDoctorByIdComponent;
  let fixture: ComponentFixture<FindDoctorByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDoctorByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDoctorByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
