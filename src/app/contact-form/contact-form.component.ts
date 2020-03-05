import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];

  log(prop){
    console.log(prop);
  }

  submit(form){
    console.log(form);
  }

}
