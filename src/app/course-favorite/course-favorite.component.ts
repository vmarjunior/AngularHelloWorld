import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-favorite',
  templateUrl: './course-favorite.component.html',
  styleUrls: ['./course-favorite.component.css']
})
export class CourseFavoriteComponent {
  @Input('course') course
  @Output('favoriteClick') favoriteButton = new EventEmitter();

  favoriteClick(){
    this.course.isFavorite = !this.course.isFavorite;
    this.favoriteButton.emit(this.course);
  }

}
