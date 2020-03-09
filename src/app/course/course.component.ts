
import { Component } from '@angular/core';
import { Course, CoursesService } from '../services/course.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent  {
  courses: Course[];

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  favoriteClick(course: Course){
    let t = this.courses.find(o => o.id === course.id);
    t = course;

    console.log(course);
  }

  likeClick(course: Course){
    let t = this.courses.find(o => o.id === course.id);
    t = course;

    console.log(course);
  }

}
