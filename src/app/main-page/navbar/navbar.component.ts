import {Component, computed, OnInit} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";
import {ViewMode} from "../../utils/viewModeEnum.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public ViewModeEnum = ViewMode;
  public viewMode = computed(() => this.calendarService.viewModeChanges());

  constructor(private calendarService: CalendarService) {}

  public getDateFormat(): string {
    return this.viewMode() === ViewMode.DAY
      ? 'D/M/yy'
      : 'MM yy';
  }

  public changeCalendarViewMode(viewMode: ViewMode): void {
    this.calendarService.setViewMode(viewMode)
  }
}
