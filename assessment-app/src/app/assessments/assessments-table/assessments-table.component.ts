import { Input, Component, OnInit } from '@angular/core';
import IAssessmentsModelAngular from '../../share/IAssessmentsModel';


@Component({
  selector: 'assessments-table',
  templateUrl: './assessments-table.component.html',
  styleUrls: ['./assessments-table.component.css']
})

export class AssessmentsTableComponent implements OnInit {
  @Input() assessments: IAssessmentsModelAngular[];

  constructor() { }

  ngOnInit() {
  }

}
