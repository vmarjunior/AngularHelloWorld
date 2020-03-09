import { BadInput } from "./../common/bad-input";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";

@Injectable({
  providedIn: "root"
})
export class DataService {

  private url: string;
  constructor(private http: HttpClient, public _url: String) {
    this.url = _url.toString();
  }

  getAll() {
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http
      .patch(this.url + "/" + resource.id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));

    //Usually systems only have put method,
    //but if your API implements patch is better to use as you would win a better performance
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(id) {
    return this.http
      .delete(this.url + "/" + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status == 400) return throwError(new BadInput(error.json()));
    else if (error.status == 404) return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}
