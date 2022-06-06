import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPatientbyIdComponent } from './find-patientby-id.component';

describe('FindPatientbyIdComponent', () => {
  let component: FindPatientbyIdComponent;
  let fixture: ComponentFixture<FindPatientbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPatientbyIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPatientbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
