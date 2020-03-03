import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFavoriteComponent } from './course-favorite.component';

describe('CourseFavoriteComponent', () => {
  let component: CourseFavoriteComponent;
  let fixture: ComponentFixture<CourseFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
