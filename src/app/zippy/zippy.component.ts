import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title:string
  isToggled:boolean

  onToggle(){
    this.isToggled = !this.isToggled;
  }
}
