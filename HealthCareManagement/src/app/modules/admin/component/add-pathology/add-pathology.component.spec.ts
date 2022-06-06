import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPathologyComponent } from './add-pathology.component';

describe('AddPathologyComponent', () => {
  let component: AddPathologyComponent;
  let fixture: ComponentFixture<AddPathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPathologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
