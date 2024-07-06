import {Component, computed, OnInit} from '@angular/core';
import moment from "moment";
import {CalendarService} from "../../services/calendar.service";
import {ViewMode} from "../../utils/viewModeEnum.model";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  public ViewModeEnum = ViewMode;
  public viewMode = computed(() => this.calendarService.viewModeChanges());

  constructor(private calendarService: CalendarService) {}

  public getMonthFullWeeks() {
    const currentMonth = moment().month();
    const currentYear = moment().year();
    const firstDayOfTheMonth = moment().startOf('month').day();
    const lastDayOfTheMonth = moment().endOf('month').day();
    return false;
  }
}
