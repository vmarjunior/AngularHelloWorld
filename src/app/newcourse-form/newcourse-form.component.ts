import { Course, Category } from './../course/course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'newcourse-form',
  templateUrl: './newcourse-form.component.html',
  styleUrls: ['./newcourse-form.component.css']
})
export class NewcourseFormComponent {
  course: Course
  categories: Category[] = [
    {id: 1, description: 'Development'},
    {id: 2, description: 'Infrastructure'},
    {id: 3, description: 'DevOps'}
  ]


  submit(courseForm){
    console.log(courseForm);
  }
}
