import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyselfComponent } from './edit-myself.component';

describe('EditMyselfComponent', () => {
  let component: EditMyselfComponent;
  let fixture: ComponentFixture<EditMyselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
