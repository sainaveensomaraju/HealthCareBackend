import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindApmntComponent } from './find-apmnt.component';

describe('FindApmntComponent', () => {
  let component: FindApmntComponent;
  let fixture: ComponentFixture<FindApmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindApmntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindApmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
