import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyBuilderComponent } from './survey-builder.component';

const routes: Routes = [
  {
    path: ':id',
    component: SurveyBuilderComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyBuilderRoutingModule { }
