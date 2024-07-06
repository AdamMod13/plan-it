import {AfterViewInit, Component, computed, ViewChild} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";
import {ViewMode} from "../../utils/viewModeEnum.model";
import {Calendar} from "primeng/calendar";
import moment from "moment";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild(Calendar) calendar: Calendar | undefined;

  public viewMode = computed(() => this.calendarService.viewModeChanges());
  public ViewModeEnum = ViewMode;
  public selectedDate: Date = new Date();

  constructor(private calendarService: CalendarService) {}

  public ngAfterViewInit(): void {
    this.setWeeklyDateFormat();
  }

  public changeCalendarViewMode(viewMode: ViewMode): void {
    this.calendarService.setViewMode(viewMode);
    if (this.calendar) {
      switch (this.viewMode()) {
        case ViewMode.DAY:
          this.calendar.dateFormat = 'dd/mm/yy';
          break;
        case ViewMode.WEEK:
          this.setWeeklyDateFormat();
          break;
        case ViewMode.MONTH:
          this.calendar.dateFormat = 'MM yy';
      }
      this.calendar?.updateInputfield();
    }
  }

  public changeToNextPeriod(): void {
    switch (this.viewMode()) {
      case ViewMode.DAY:
        this.selectedDate.setDate(this.selectedDate.getDate() + 1);
        break;
      case ViewMode.WEEK:
        this.selectedDate.setDate(this.selectedDate.getDate() + 7);
        this.setWeeklyDateFormat();
        break;
      case ViewMode.MONTH:
        this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
        break;
    }
    this.calendar?.updateInputfield();
  }

  public changeToPreviousPeriod(): void {
    switch (this.viewMode()) {
      case ViewMode.DAY:
        this.selectedDate.setDate(this.selectedDate.getDate() - 1);
        break;
      case ViewMode.WEEK:
        this.selectedDate.setDate(this.selectedDate.getDate() - 7);
        this.setWeeklyDateFormat();
        break;
      case ViewMode.MONTH:
        this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
        break;
    }
    this.calendar?.updateInputfield();
  }

  public getWeekendDates(): string {
    const beginWeekendDate = moment(this.selectedDate).clone().weekday(1).format('DD/MM');
    const endWeekendDate = moment(this.selectedDate).clone().weekday(7).format('DD/MM')
    return  beginWeekendDate + ' - ' + endWeekendDate + ' ' + this.selectedDate.getFullYear();
  }

  private setWeeklyDateFormat(): void {
    if (this.calendar) {
      this.calendar.dateFormat = this.getWeekendDates();
      this.calendar?.updateInputfield();
    }
  }
}
