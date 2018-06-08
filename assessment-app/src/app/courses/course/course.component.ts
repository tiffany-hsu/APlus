import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CourseServiceService } from './../../course-service.service';
import IAssessmentsModelAngular from '../../share/IAssessmentsModel';
import ICourseModelAngular from '../../share/ICoursesModel';
import Assessment from '../../share/Assessment';



@Component({
  //moduleId: module.id,
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  courseId: string;
  courseAssessments: Assessment; //ITaskModelAngular[];
  name: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private course$: CourseServiceService

  ) {
    this.courseId = route.snapshot.params['id'];
    course$.getCourseAssessments(this.courseId)
    .subscribe (
      result => {
        this.courseAssessments = result.assessments; 
        this.name = result.name;
      },
      () => {},
      () => {}
    );

   }

  ngOnInit():void { }

}