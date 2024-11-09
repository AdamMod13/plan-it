import {Component, Input} from '@angular/core';
import {ViewMode} from "../../viewModeEnum.model";

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  @Input('viewMode') viewMode: ViewMode = ViewMode.DAY;
  public ViewModeEnum = ViewMode;
}
