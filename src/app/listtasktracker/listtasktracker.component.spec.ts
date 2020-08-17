import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtasktrackerComponent } from './listtasktracker.component';

describe('ListtasktrackerComponent', () => {
  let component: ListtasktrackerComponent;
  let fixture: ComponentFixture<ListtasktrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtasktrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtasktrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
