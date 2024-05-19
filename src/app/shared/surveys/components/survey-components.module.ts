import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionFormModule } from './question-form/question-form.module';
import { QuestionTypeSelectComponent } from './question-type-select/question-type-select.component';



@NgModule({
  declarations: [
    QuestionTypeSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuestionFormModule,
    ReactiveFormsModule
  ],
  exports: [
    QuestionFormModule,
    QuestionTypeSelectComponent
  ]
})
export class SurveyComponentsModule { }
