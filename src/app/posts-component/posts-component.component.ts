import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "posts-component",
  templateUrl: "./posts-component.component.html",
  styleUrls: ["./posts-component.component.css"]
})
export class PostsComponentComponent {
  posts: any[];
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe(response => {
      this.posts = response as Object[];
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      post["id"] = response;
      this.posts.splice(0, 0, post);

      console.log(response);
    });
  }

  updatePost(post) {
    this.http
      .patch(this.url + "/" + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });

    //Usually systems only have put method,
    //but if your API implements patch is better to use as you would win a better performance
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.http.delete(this.url + "/" + post.id).subscribe(response => {
      let postIndex = this.posts.indexOf(post);
      this.posts.splice(postIndex, 1);
    });
  }
}
