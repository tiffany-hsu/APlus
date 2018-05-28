import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoursesComponent } from './courses/courses.component';
import { routing } from './app.routing';
import { AssessServiceService } from './assess-service.service';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AssessServiceService],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
