import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianViewRecordComponent } from './librarian-view-record.component';

describe('LibrarianViewRecordComponent', () => {
  let component: LibrarianViewRecordComponent;
  let fixture: ComponentFixture<LibrarianViewRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarianViewRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianViewRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
