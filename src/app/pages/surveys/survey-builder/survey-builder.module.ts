import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SurveyComponentsModule } from '../../../shared/surveys/components/survey-components.module';
import { SurveyBuilderRoutingModule } from './survey-builder-routing.module';
import { SurveyBuilderComponent } from './survey-builder.component';



@NgModule({
  declarations: [
    SurveyBuilderComponent
  ],
  imports: [
    CommonModule,
    SurveyComponentsModule,
    OverlayModule,
    SurveyBuilderRoutingModule
  ]
})
export class SurveyBuilderModule { }
