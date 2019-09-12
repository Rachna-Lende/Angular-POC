import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianAddStudentComponent } from './librarian-add-student.component';

describe('LibrarianAddStudentComponent', () => {
  let component: LibrarianAddStudentComponent;
  let fixture: ComponentFixture<LibrarianAddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarianAddStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
