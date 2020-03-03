import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLikeComponent } from './course-like.component';

describe('CourseLikeComponent', () => {
  let component: CourseLikeComponent;
  let fixture: ComponentFixture<CourseLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
