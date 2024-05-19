import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:
      () => import('./pages/surveys/surveys-dashboard/surveys-dashboard.module').then( m => m.SurveysDashboardModule)
  },
  {
    path: 'survey',
    loadChildren:
      () => import('./pages/surveys/survey-builder/survey-builder.module').then( m => m.SurveyBuilderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
