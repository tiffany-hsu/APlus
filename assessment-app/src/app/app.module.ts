import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoursesComponent } from './courses/courses.component';
import { routing } from './app.routing';
import { AssessServiceService } from './assess-service.service';
import { AssessmentsComponent } from './assessments/assessments.component';
import { QuestionsComponent } from './assessments/questions/questions.component';
import { CourseListComponent } from './courses/course-list/course-list.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CoursesComponent,
    AssessmentsComponent,
    QuestionsComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AssessServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
