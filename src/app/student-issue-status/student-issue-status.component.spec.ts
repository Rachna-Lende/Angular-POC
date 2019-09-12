import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIssueStatusComponent } from './student-issue-status.component';

describe('StudentIssueStatusComponent', () => {
  let component: StudentIssueStatusComponent;
  let fixture: ComponentFixture<StudentIssueStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIssueStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIssueStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
