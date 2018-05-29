import { AssessServiceService } from './../assess-service.service';
import { Component, OnInit } from '@angular/core';
import ICourseModelAngular from '../share/ICoursesModel';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  Courses: any;

  constructor(private service$: AssessServiceService) { 
    this.getCourses();
  }

  getCourses(){
    this.Courses = this.service$.getListsIndex()
    .subscribe (
      result => this.Courses = result,
      () => {},
      () => console.log('REST call:' + this.Courses)
    );

  }

  ngOnInit() {
  }

}
