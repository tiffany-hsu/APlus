

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CourseServiceService {

  constructor(private http: Http) { }

  //get all courses
  getCourses() {
    return this.http.get( 'http://localhost:8080/app/courses')
    .map(response => response.json());
  }
  
  //get one course's details
  getCourseAssessments(index: string) {
    return this.http.get( 'http://localhost:8080/app/courses/' + index)
    .map(response => response.json());
  }
}
