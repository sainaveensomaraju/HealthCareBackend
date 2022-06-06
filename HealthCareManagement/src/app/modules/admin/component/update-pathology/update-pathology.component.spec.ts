import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePathologyComponent } from './update-pathology.component';

describe('UpdatePathologyComponent', () => {
  let component: UpdatePathologyComponent;
  let fixture: ComponentFixture<UpdatePathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePathologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
