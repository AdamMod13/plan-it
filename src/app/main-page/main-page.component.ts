import {Component, computed} from '@angular/core';
import {CalendarService} from "../services/calendar.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public viewMode = computed(() => this.calendarService.viewModeChanges());
  public date: Date = new Date();

  constructor(private calendarService: CalendarService) {}
}
