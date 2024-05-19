import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonComponentsModule } from './../../common/components/common-components.module';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionMultipleComponent } from './question-form/question-multiple/question-multiple.component';
import { QuestionSingleComponent } from './question-form/question-single/question-single.component';
import { QuestionTypeSelectComponent } from './question-type-select/question-type-select.component';
import { SelectTypeButtonComponent } from './select-type-button/select-type-button.component';



@NgModule({
  declarations: [
    QuestionFormComponent,
    QuestionSingleComponent,
    QuestionMultipleComponent,
    QuestionTypeSelectComponent,
    SelectTypeButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonComponentsModule,
    FontAwesomeModule,
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
