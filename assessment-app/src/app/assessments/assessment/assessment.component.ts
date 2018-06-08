import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AssessService } from './../../assess.service';
import IAssessmentModelAngular from '../../share/IAssessmentsModel';
import ICourseModelAngular from '../../share/ICoursesModel';
import Assessment from '../../share/Assessment';
import Question from '../../share/Question';

@Component({
  //moduleId: module.id,
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})

export class AssessmentComponent implements OnInit {
  assessmentId: string;
  assessmentQuestions: Question; //ITaskModelAngular[];
  name: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private course$: AssessService

  ) {
    this.assessmentId = route.snapshot.params['id'];
    course$.getAssessmentDetails(this.assessmentId)
    .subscribe (
      result => {
        this.assessmentQuestions = result.questions; 
        this.name = result.name;
      },
      () => {},
      () => {}
    );

   }

  ngOnInit():void { }

}