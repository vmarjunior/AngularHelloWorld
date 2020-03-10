import { GithubService } from "./../services/github.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { combineLatest } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"]
})
export class GithubFollowersComponent implements OnInit {
  followers: [];

  constructor(private route: ActivatedRoute, private service: GithubService) {}

  ngOnInit() {
    combineLatest([
      this.route.paramMap, // Observable from ordinary part of path
      this.route.queryParamMap // Observable from querystring part of path
    ])
      .pipe(
        switchMap(combined => {
          let id = combined[0].get("id"); // paramMap from ordinary path
          combined[1].get("page"); // queryParamMap, from querystring part of path

          return this.service.getAll();
        })
      )
      .subscribe(followers => (this.followers = followers));
  }
}
