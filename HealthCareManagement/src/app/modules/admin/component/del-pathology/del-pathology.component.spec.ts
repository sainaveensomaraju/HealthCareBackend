import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelPathologyComponent } from './del-pathology.component';

describe('DelPathologyComponent', () => {
  let component: DelPathologyComponent;
  let fixture: ComponentFixture<DelPathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelPathologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelPathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
