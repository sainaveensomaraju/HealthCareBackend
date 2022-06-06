import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTestsComponent } from './get-all-tests.component';

describe('GetAllTestsComponent', () => {
  let component: GetAllTestsComponent;
  let fixture: ComponentFixture<GetAllTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
