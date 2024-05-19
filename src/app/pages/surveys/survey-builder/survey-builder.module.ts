import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    FontAwesomeModule,
    SurveyBuilderRoutingModule
  ]
})
export class SurveyBuilderModule { }
