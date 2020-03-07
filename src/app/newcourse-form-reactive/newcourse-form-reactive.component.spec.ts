import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcourseFormReactiveComponent } from './newcourse-form-reactive.component';

describe('NewcourseFormReactiveComponent', () => {
  let component: NewcourseFormReactiveComponent;
  let fixture: ComponentFixture<NewcourseFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcourseFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcourseFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
