import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTestByIdComponent } from './get-test-by-id.component';

describe('GetTestByIdComponent', () => {
  let component: GetTestByIdComponent;
  let fixture: ComponentFixture<GetTestByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTestByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTestByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
