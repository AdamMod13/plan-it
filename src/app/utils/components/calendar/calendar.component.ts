import {Component, computed} from '@angular/core';
import {ViewMode} from "../../viewModeEnum.model";
import {CalendarService} from "../../../services/calendar.service";
import {TaskCardComponent} from "./task-card/task-card.component";


@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  imports: [
    TaskCardComponent
  ],
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  public readonly weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public readonly hoursSlots: Map<number, string> = new Map([
    [0, '0:00 - 1:00'],
    [1, '1:00 - 2:00'],
    [2, '2:00 - 3:00'],
    [3, '3:00 - 4:00'],
    [4, '4:00 - 5:00'],
    [5, '5:00 - 6:00'],
    [6, '6:00 - 7:00'],
    [7, '7:00 - 8:00'],
    [8, '8:00 - 9:00'],
    [9, '9:00 - 10:00'],
    [10, '10:00 - 11:00'],
    [11, '11:00 - 12:00'],
    [12, '12:00 - 13:00'],
    [13, '13:00 - 14:00'],
    [14, '14:00 - 15:00'],
    [15, '15:00 - 16:00'],
    [16, '16:00 - 17:00'],
    [17, '17:00 - 18:00'],
    [18, '18:00 - 19:00'],
    [19, '19:00 - 20:00'],
    [20, '20:00 - 21:00'],
    [21, '21:00 - 22:00'],
    [22, '22:00 - 23:00'],
    [23, '23:00 - 24:00']
  ]);
  public ViewModeEnum = ViewMode;
  public viewMode = computed(() => this.calendarService.viewModeChanges());
  public selectedDate = computed(() => this.calendarService.selectedDateChanges());

  constructor(private calendarService: CalendarService) {}
}
