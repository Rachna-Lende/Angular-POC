import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianIssueBookComponent } from './librarian-issue-book.component';

describe('LibrarianIssueBookComponent', () => {
  let component: LibrarianIssueBookComponent;
  let fixture: ComponentFixture<LibrarianIssueBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarianIssueBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianIssueBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
