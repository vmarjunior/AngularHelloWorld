import { CoursesService } from './course/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseFavoriteComponent } from './course-favorite/course-favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseFavoriteComponent,
    BootstrapPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
