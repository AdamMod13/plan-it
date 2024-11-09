import {Injectable, signal, WritableSignal} from '@angular/core';
import { ViewMode } from "../utils/viewModeEnum.model";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  public viewMode: WritableSignal<ViewMode> = signal(ViewMode.DAY);
  public selectedDate: WritableSignal<Date> = signal(new Date());

  constructor() {}

  public setViewMode(viewMode: ViewMode): void {
    this.viewMode.set(viewMode);
  }

  public viewModeChanges(): ViewMode {
    return this.viewMode();
  }

  public setSelectedDate(newDate: Date): void {
    this.selectedDate.set(newDate);
  }

  public selectedDateChanges(): Date {
    return this.selectedDate();
  }
}
