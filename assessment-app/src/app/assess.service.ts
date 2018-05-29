import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class AssessService {

  constructor(private http: Http) { }

  //get all assessments
  getAssessments() {
    return this.http.get( 'http://localhost:8080/app/assessments')
    .map(response => response.json());
  }

   //get one assessment's details
   getAssessmentDetails(index: string) {
    return this.http.get( 'http://localhost:8080/app/assessments/' + index)
    .map(response => response.json());
  }
}
