import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIssueBookComponent } from './student-issue-book.component';

describe('StudentIssueBookComponent', () => {
  let component: StudentIssueBookComponent;
  let fixture: ComponentFixture<StudentIssueBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIssueBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIssueBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
