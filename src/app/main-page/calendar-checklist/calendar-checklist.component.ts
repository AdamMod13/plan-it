import {Component, computed} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";
import {ViewMode} from "../../utils/viewModeEnum.model";

@Component({
  selector: 'app-calendar-checklist',
  templateUrl: './calendar-checklist.component.html',
  styleUrls: ['./calendar-checklist.component.scss']
})
export class CalendarChecklistComponent {
  public ViewModeEnum = ViewMode;
  public viewMode = computed(() => this.calendarService.viewModeChanges());

  constructor(private calendarService: CalendarService) {}
}
