import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallpatientComponent } from './viewallpatient.component';

describe('ViewallpatientComponent', () => {
  let component: ViewallpatientComponent;
  let fixture: ComponentFixture<ViewallpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
