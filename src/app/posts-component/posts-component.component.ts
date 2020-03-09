import { BadInput } from "./../common/bad-input";
import { NotFoundError } from "./../common/not-found-error";
import { AppError } from "./../common/app-error";
import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "posts-component",
  templateUrl: "./posts-component.component.html",
  styleUrls: ["./posts-component.component.css"]
})
export class PostsComponentComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe(response => (this.posts = response as []));
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.service.create(post).subscribe(
      response => {
        post["id"] = response;
        this.posts.splice(0, 0, post);
        console.log(response);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          //this.form.setErrors(error.originalError;
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post) {
    this.service.update(post).subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      response => {
        let postIndex = this.posts.indexOf(post);
        this.posts.splice(postIndex, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert("This post has already been deleted.");
        else {
          throw error;
        }
      }
    );
  }
}
