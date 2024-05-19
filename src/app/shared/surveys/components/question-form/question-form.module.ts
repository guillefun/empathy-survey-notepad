import { NgModule } from '@angular/core';
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

  ],
  exports: [
    QuestionFormComponent,
    QuestionSingleComponent,
    QuestionMultipleComponent
  ]
})
export class QuestionFormModule { }
