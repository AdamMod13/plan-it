import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import { ViewMode } from "../utils/viewModeEnum.model";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  public viewMode: WritableSignal<ViewMode> = signal(ViewMode.WEEK);

  constructor() {}

  public getViewMode(): ViewMode {
    return this.viewMode();
  }

  public setViewMode(viewMode: ViewMode): void {
    this.viewMode.set(viewMode);
  }

  public viewModeChanges(): ViewMode {
    return this.viewMode();
  }
}
