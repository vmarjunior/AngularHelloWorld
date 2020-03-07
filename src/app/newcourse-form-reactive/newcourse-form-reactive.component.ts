import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "newcourse-form-reactive",
  templateUrl: "./newcourse-form-reactive.component.html",
  styleUrls: ["./newcourse-form-reactive.component.css"]
})
export class NewcourseFormReactiveComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl){
    let topicIndex = this.topics.controls.indexOf(topic);
    this.topics.removeAt(topicIndex);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

}
