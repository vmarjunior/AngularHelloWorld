import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-like',
  templateUrl: './course-like.component.html',
  styleUrls: ['./course-like.component.css']
})
export class CourseLikeComponent {
  @Input('course') course
  @Output('likeClick') likeButton = new EventEmitter();

  likeClick(){
    this.course.isLiked = !this.course.isLiked;
    this.course.likeCount += this.course.isLiked ? +1 : -1;
    this.likeButton.emit(this.course);
  }

}
