import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-table', //'app-courses-table
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class CoursesTableComponent implements OnInit {
  @Input() course: any;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
