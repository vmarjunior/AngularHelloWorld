import { CoursesService } from './course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent  {
  courses;

  constructor(coursesService: CoursesService) { 
    this.courses = coursesService.getCourses();
  }

  onFavoriteChange(course){
    console.log(course);
    this.courses.find(o => o.id === course.id).isFavorite = course.isFavorite;
    console.log("Favorite Changed.", this.courses);
  }
}
