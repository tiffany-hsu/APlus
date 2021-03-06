import { CourseServiceService } from './../course-service.service';
import { Input,Component, OnInit } from '@angular/core';
import ICourseModelAngular from '../share/ICoursesModel';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any;
  //Courses: ICourseModelAngular[];
  @Input() courseNumber: number[] = [1,2,3];
/*
  constructor(private service$: CourseServiceService) { 
    service$.getCourses()
    .subscribe (
      result => this.Courses = result,
      () => {},
      () => console.log('REST call:' + this.Courses)
    );
  }*/

  constructor(course$: CourseServiceService) {
    course$.getCourses().subscribe(
      result => this.courses = result,
      () => {},
      () => console.log('REST call for COURSES.COMPONENT.TS:' + this.courses)
    );
  }

  ngOnInit() {
  }

}
