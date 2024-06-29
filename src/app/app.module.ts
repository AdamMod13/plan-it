import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-page/navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CalendarComponent } from './main-page/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import { FilterSectionComponent } from "./main-page/filter-section/filter-section.component";
import { DialogModule } from 'primeng/dialog';
import { AddEditTaskModalComponent } from "./main-page/filter-section/add-edit-task-modal/add-edit-task-modal.component";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    CalendarComponent,
    FilterSectionComponent,
    AddEditTaskModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    InputTextModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
