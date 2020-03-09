import { Component } from '@angular/core';
import { Category, Course } from '../services/course.service';

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
