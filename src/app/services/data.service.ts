import { NotFoundError } from './../common/not-found-error';
import { BadInput } from "./../common/bad-input";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";
import { AppError } from "../common/app-error";

export class DataService {
  constructor(private http: HttpClient, private url: string) {
  }

  getAll() {
    return this.http.get(this.url).pipe(
      map(response => response as []),
      catchError(this.handleError)
    );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http
      .patch(this.url + "/" + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map(response => response as []),
        catchError(this.handleError)
      );

    //Usually systems only have put method,
    //but if your API implements patch is better to use as you would win a better performance
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(id) {
    return this.http.delete(this.url + "/" + id).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status == 400) return throwError(new BadInput(error.json()));
    else if (error.status == 404) return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}
