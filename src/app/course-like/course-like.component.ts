import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Course } from '../services/course.service';

@Component({
  selector: 'course-like',
  templateUrl: './course-like.component.html',
  styleUrls: ['./course-like.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CourseLikeComponent {
  @Input('course') course : Course
  @Output('likeClick') likeButton = new EventEmitter();

  likeClick(){
    this.course.isLiked = !this.course.isLiked;
    this.course.likeCount += this.course.isLiked ? +1 : -1;
    this.likeButton.emit(this.course);
  }

}
