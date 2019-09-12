import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBookSearchComponent } from './student-book-search.component';

describe('StudentBookSearchComponent', () => {
  let component: StudentBookSearchComponent;
  let fixture: ComponentFixture<StudentBookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBookSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
