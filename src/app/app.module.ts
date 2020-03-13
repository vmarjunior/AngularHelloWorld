import { AuthGuard } from './auth-guard.service';
import { AuthService } from './services/auth.service';
import { GithubService } from "./services/github.service";
import { AppErrorHandler } from "./common/app-error-handler";
import { PostService } from "./services/post.service";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { CoursesService } from "./services/course.service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { NgModule, ErrorHandler } from "@angular/core";

import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { CourseFavoriteComponent } from "./course-favorite/course-favorite.component";
import { BootstrapPanelComponent } from "./bootstrap-panel/bootstrap-panel.component";
import { CourseLikeComponent } from "./course-like/course-like.component";
import { InputFormatDirective } from "./input-format.directive";
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NewcourseFormComponent } from "./newcourse-form/newcourse-form.component";
import { NewcourseFormReactiveComponent } from "./newcourse-form-reactive/newcourse-form-reactive.component";
import { NewcourseFormbuilderReactiveComponent } from "./newcourse-formbuilder-reactive/newcourse-formbuilder-reactive.component";
import { ChangepasswordFormComponent } from "./changepassword-form/changepassword-form.component";
import { PostsComponent } from "./posts/posts.component";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule } from "@angular/router";
import { ArchiveComponent } from './archive/archive.component';
import { ArchivesMenuComponent } from './archives-menu/archives-menu.component';
import { LoginComponent } from './login/login.component';
import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseFavoriteComponent,
    BootstrapPanelComponent,
    CourseLikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewcourseFormComponent,
    SignupFormComponent,
    NewcourseFormReactiveComponent,
    NewcourseFormbuilderReactiveComponent,
    ChangepasswordFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ArchiveComponent,
    ArchivesMenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, canActivate: [AuthGuard] },
      { path: "login", component: LoginComponent },
      { path: "followers/:id/:username", component: GithubProfileComponent },
      { path: "followers", component: GithubFollowersComponent },
      { path: "posts", component: PostsComponent },
      { path: "archives/menu", component: ArchivesMenuComponent },
      { path: "archive/:year/:month", component: ArchiveComponent },
      { path: "archive", component: ArchiveComponent },
      { path: "**", component: NotFoundComponent }
    ]),

    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['http://localhost:4200/login']
      }
    })
  ],
  providers: [
    CoursesService,
    PostService,
    GithubService,
    AuthService,
    AuthGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler },

    //Fake backend provider found in app/helpers
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
