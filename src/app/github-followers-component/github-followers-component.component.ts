import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers-component',
  templateUrl: './github-followers-component.component.html',
  styleUrls: ['./github-followers-component.component.css']
})
export class GithubFollowersComponentComponent implements OnInit {
  followers : []

  constructor(private service: GithubService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(followers => this.followers = followers);
  }

}
