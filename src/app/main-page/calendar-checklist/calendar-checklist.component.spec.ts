import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarChecklistComponent } from './calendar-checklist.component';

describe('CalendarComponent', () => {
  let component: CalendarChecklistComponent;
  let fixture: ComponentFixture<CalendarChecklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarChecklistComponent]
    });
    fixture = TestBed.createComponent(CalendarChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
