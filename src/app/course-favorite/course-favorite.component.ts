import { Course } from './../course/course.service';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'course-favorite',
  templateUrl: './course-favorite.component.html',
  styleUrls: ['./course-favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CourseFavoriteComponent {
  @Input('course') course: Course
  @Output('favoriteClick') favoriteButton = new EventEmitter();

  favoriteClick(){
    this.course.isFavorite = !this.course.isFavorite;
    this.favoriteButton.emit(this.course);
  }

}
