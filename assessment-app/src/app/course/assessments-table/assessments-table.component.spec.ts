import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentsTableComponent } from './assessments-table.component';

describe('AssessmentsTableComponent', () => {
  let component: AssessmentsTableComponent;
  let fixture: ComponentFixture<AssessmentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
