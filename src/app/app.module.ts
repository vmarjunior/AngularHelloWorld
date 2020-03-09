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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "followers/:username", component: GithubProfileComponent },
      { path: "followers", component: GithubFollowersComponent },
      { path: "posts", component: PostsComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    GithubService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
