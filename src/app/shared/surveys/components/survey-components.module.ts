import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModule } from '../../common/components/question-form.module';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionMultipleComponent } from './question-form/question-multiple/question-multiple.component';
import { QuestionSingleComponent } from './question-form/question-single/question-single.component';
import { QuestionTypeSelectComponent } from './question-type-select/question-type-select.component';



@NgModule({
  declarations: [
    QuestionFormComponent,
    QuestionSingleComponent,
    QuestionMultipleComponent,
    QuestionTypeSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonComponentsModule,
    OverlayModule,
    ReactiveFormsModule
  ],
  exports: [
    QuestionFormComponent,
    QuestionSingleComponent,
    QuestionMultipleComponent,
    QuestionTypeSelectComponent
  ]
})
export class SurveyComponentsModule { }
