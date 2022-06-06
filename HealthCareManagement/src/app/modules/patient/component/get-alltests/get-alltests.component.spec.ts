import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlltestsComponent } from './get-alltests.component';

describe('GetAlltestsComponent', () => {
  let component: GetAlltestsComponent;
  let fixture: ComponentFixture<GetAlltestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAlltestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAlltestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
