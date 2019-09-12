import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianLoginFormComponent } from './librarian-login-form.component';

describe('LibrarianLoginFormComponent', () => {
  let component: LibrarianLoginFormComponent;
  let fixture: ComponentFixture<LibrarianLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarianLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
