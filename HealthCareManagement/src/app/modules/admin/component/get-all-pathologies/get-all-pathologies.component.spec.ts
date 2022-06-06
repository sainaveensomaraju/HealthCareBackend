import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPathologiesComponent } from './get-all-pathologies.component';

describe('GetAllPathologiesComponent', () => {
  let component: GetAllPathologiesComponent;
  let fixture: ComponentFixture<GetAllPathologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPathologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPathologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
