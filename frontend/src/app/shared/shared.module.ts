import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelpBoxComponent } from './components/help-box/help-box.component';
import { MiddleMenuComponent } from './components/middle-menu/middle-menu.component';
import { ValidationService } from './services/validation.service';
import { ApiService } from './services/api.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DayCheckboxComponent } from './components/day-checkbox/day-checkbox.component';
import { DaysOfWeekPipe } from './pipes/days-of-week.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    HelpBoxComponent,
    MiddleMenuComponent,
    BreadcrumbComponent,
    DayCheckboxComponent,
    DaysOfWeekPipe
  ],
  exports: [
    HelpBoxComponent,
    MiddleMenuComponent,
    BreadcrumbComponent,
    DayCheckboxComponent,
    DaysOfWeekPipe
  ],
  providers: [
    ValidationService,
    ApiService
  ]
})
export class SharedModule { }
