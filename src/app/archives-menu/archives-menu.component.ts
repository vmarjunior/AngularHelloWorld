import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archives-menu',
  templateUrl: './archives-menu.component.html',
  styleUrls: ['./archives-menu.component.css']
})
export class ArchivesMenuComponent implements OnInit {
  archives = [
    { year: 2020, month: 1 },
    { year: 2020, month: 2 },
    { year: 2020, month: 3 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
