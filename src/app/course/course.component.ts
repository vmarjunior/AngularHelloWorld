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

  favoriteClick(course){
    let t = this.courses.find(o => o.id === course.id);
    t = course;
    
    console.log(course);
  }

  likeClick(course){
    let t = this.courses.find(o => o.id === course.id);
    t = course;
    
    console.log(course);
  }

}
