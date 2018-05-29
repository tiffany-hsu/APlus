import { CourseServiceService } from './../course-service.service';
import { Component, OnInit } from '@angular/core';
import ICourseModelAngular from '../share/ICoursesModel';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  Courses: ICourseModelAngular[];

  constructor(private service$: CourseServiceService) { 
    service$.getCourses()
    .subscribe (
      result => this.Courses = result,
      () => {},
      () => console.log('REST call:' + this.Courses)
    );
  }

  ngOnInit() {
  }

}
