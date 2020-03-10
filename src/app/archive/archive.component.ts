import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "archive",
  templateUrl: "./archive.component.html",
  styleUrls: ["./archive.component.css"]
})
export class ArchiveComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  archive: {
    year: string;
    month: string;
  };

  ngOnInit(): void {
    //Mosh Solution
    let params = this.route.snapshot.paramMap;
    this.archive = {
      year: params.get("year"),
      month: params.get("month")
    };

    //My solution (uglier :[ ])
    this.route.paramMap.subscribe(params => {
      this.archive = {
        year: params.get("year"),
        month: params.get("month")
      };
    });
  }

  viewAll() {
    this.router.navigate(["/archives/menu"]);
  }
}
