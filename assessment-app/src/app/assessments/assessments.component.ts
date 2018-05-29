import { Input,Component, OnInit } from '@angular/core';
import IAssessmentsModelAngular from '../share/IAssessmentsModel';
import { CourseServiceService } from './../course-service.service';
import ICourseModelAngular from '../share/ICoursesModel';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  Assessments: IAssessmentsModelAngular[];
  @Input() index: number;

  constructor(private assService$: CourseServiceService) {
    assService$.getCourseAssessments("1") //hm?
    .subscribe (
      result => this.Assessments = result,
      () => {},
      () => console.log('REST call:' + this.Assessments)
    );
   }

  ngOnInit() {
  }

}

/*
courseId: string;
//listItems: Item; // ITaskModelAngular[];
name: string;

constructor(
  private route: ActivatedRoute,
  private location: Location,
  private course$: CourseServiceService
) { 
  this.courseId = route.snapshot.params['id'];
  course$.getCourseAssessments(this.courseId)
  .subscribe(
    result => {
      this.listItems = result.tasks;
      this.name = result.name;
    },
    () => {},
    () => {}
  );
}

ngOnInit():void {}

}
*/