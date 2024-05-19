import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SurveysDashboardRoutingModule } from './surveys-dashboard-routing.module';
import { SurveysDashboardComponent } from './surveys-dashboard.component';



@NgModule({
  declarations: [
    SurveysDashboardComponent
  ],
  imports: [
    CommonModule,
    SurveysDashboardRoutingModule
  ]
})
export class SurveysDashboardModule { }
