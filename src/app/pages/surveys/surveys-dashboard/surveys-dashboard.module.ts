import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SurveysDashboardRoutingModule } from './surveys-dashboard-routing.module';
import { SurveysDashboardComponent } from './surveys-dashboard.component';



@NgModule({
  declarations: [
    SurveysDashboardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SurveysDashboardRoutingModule
  ]
})
export class SurveysDashboardModule { }
