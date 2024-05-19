import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionFormModule } from '../../../shared/surveys/components/question-form/question-form.module';
import { SurveyBuilderRoutingModule } from './survey-builder-routing.module';
import { SurveyBuilderComponent } from './survey-builder.component';



@NgModule({
  declarations: [
    SurveyBuilderComponent
  ],
  imports: [
    CommonModule,
    QuestionFormModule,
    SurveyBuilderRoutingModule
  ]
})
export class SurveyBuilderModule { }
