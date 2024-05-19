import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModule } from '../../../common/components/question-form.module';
import { QuestionFormComponent } from './question-form.component';
import { QuestionMultipleComponent } from './question-multiple/question-multiple.component';
import { QuestionSingleComponent } from './question-single/question-single.component';



@NgModule({
  declarations: [
    QuestionFormComponent,
    QuestionSingleComponent,
    QuestionMultipleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    QuestionFormComponent,
    QuestionSingleComponent,
    QuestionMultipleComponent
  ]
})
export class QuestionFormModule { }
