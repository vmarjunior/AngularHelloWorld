import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcourseFormbuilderReactiveComponent } from './newcourse-formbuilder-reactive.component';

describe('NewcourseFormbuilderReactiveComponent', () => {
  let component: NewcourseFormbuilderReactiveComponent;
  let fixture: ComponentFixture<NewcourseFormbuilderReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcourseFormbuilderReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcourseFormbuilderReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
