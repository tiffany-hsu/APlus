import { Component, OnInit, Input } from '@angular/core';
import ICourseModelAngular from '../share/ICoursesModel';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() aCourse: ICourseModelAngular;


  constructor() { }

  ngOnInit() {
  }

}
