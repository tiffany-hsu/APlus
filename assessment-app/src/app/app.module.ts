import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoursesComponent } from './courses/courses.component';
import { routing } from './app.routing';
import { CourseServiceService } from './course-service.service';
import { AssessmentsComponent } from './assessments/assessments.component';
import { QuestionsComponent } from './assessments/questions/questions.component';
import { CoursesTableComponent } from './courses/courses-table/courses-table.component';
import { CourseComponent } from './courses/course/course.component';
import { AssessmentsTableComponent } from './assessments/assessments-table/assessments-table.component';
import { AssessmentComponent } from './assessments/assessment/assessment.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CoursesComponent,
    AssessmentsComponent,
    QuestionsComponent,
    CoursesTableComponent,
    CourseComponent,
    AssessmentsTableComponent,
    AssessmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CourseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
