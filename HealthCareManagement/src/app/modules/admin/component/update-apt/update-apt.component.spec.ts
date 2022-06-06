import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAptComponent } from './update-apt.component';

describe('UpdateAptComponent', () => {
  let component: UpdateAptComponent;
  let fixture: ComponentFixture<UpdateAptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
