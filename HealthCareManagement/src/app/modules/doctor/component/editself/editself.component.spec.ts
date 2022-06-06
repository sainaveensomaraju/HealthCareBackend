import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditselfComponent } from './editself.component';

describe('EditselfComponent', () => {
  let component: EditselfComponent;
  let fixture: ComponentFixture<EditselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
