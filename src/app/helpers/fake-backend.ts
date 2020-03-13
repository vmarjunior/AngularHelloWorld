import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbGRpckBkb21haW4uY29tIiwicGFzc3dvcmQiOiIxMjM0In0.ZKFaiStR1paMQb02ovpAskZSPFZBOAW4tZCBElmp0vU";

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith("/api/authenticate") && method === "POST":
          return authenticate();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // ROUTE FUNCTIONS

    function authenticate() {
      let user = JSON.parse(body);
      let email = user.email;
      let password = user.password;

      const authenticated =
        email === "valdir@domain.com" && password === "1234";

      if (!authenticated) return error("Username or password is incorrect");

      return ok({
        username: email,
        access_token: token
      });
    }

    // HELPER METHODS

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }

  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
