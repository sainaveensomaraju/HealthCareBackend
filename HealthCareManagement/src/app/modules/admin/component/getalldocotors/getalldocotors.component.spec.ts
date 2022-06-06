import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldocotorsComponent } from './getalldocotors.component';

describe('GetalldocotorsComponent', () => {
  let component: GetalldocotorsComponent;
  let fixture: ComponentFixture<GetalldocotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalldocotorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalldocotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
