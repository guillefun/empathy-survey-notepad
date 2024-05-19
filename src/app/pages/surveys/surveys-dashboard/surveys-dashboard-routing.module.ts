import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveysDashboardComponent } from './surveys-dashboard.component';



const routes: Routes = [
  {
    path: '',
    component: SurveysDashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysDashboardRoutingModule { }
