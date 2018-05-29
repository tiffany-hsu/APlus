import { Component, OnInit, Input } from '@angular/core';
import ICourseModelAngular from '../../share/ICoursesModel';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input() Course: ICourseModelAngular;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
