import {Component} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";
import {ViewMode} from "../../utils/viewModeEnum.model";

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent {
  constructor(private calendarService: CalendarService) {}

  public changeDate(selectedOption: string): void {
    const todayDate: Date = new Date();
    switch (selectedOption) {
      case 'today':
        this.calendarService.setSelectedDate(todayDate);
        this.calendarService.setViewMode(ViewMode.DAY);
        break;
      case 'tomorrow':
        const tomorrowDate: Date = new Date(todayDate);
        tomorrowDate.setDate(todayDate.getDate() + 1);
        this.calendarService.setSelectedDate(tomorrowDate);
        this.calendarService.setViewMode(ViewMode.DAY);
        break;
      case 'currentWeek':
        this.calendarService.setSelectedDate(todayDate);
        this.calendarService.setViewMode(ViewMode.WEEK);
        break;
    }
  }
}
