import { FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "newcourse-formbuilder-reactive",
  templateUrl: "./newcourse-formbuilder-reactive.component.html",
  styleUrls: ["./newcourse-formbuilder-reactive.component.css"]
})
export class NewcourseFormbuilderReactiveComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        phone: [],
        email: []
      }),
      topics: fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
  }

  removeTopic(topic: FormControl) {
    let topicIndex = this.topics.controls.indexOf(topic);
    this.topics.removeAt(topicIndex);
  }

  get topics() {
    return this.form.get("topics") as FormArray;
  }
}
