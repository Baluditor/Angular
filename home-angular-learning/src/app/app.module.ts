import { PeopleService } from './people.service';
import { BooksService } from './books.service';
import { AuthorsService } from './authors.service';
import { EmailService } from './email.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    BooksComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    EmailService,
    AuthorsService,
    BooksService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
