import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Question, QuestionType } from '../../../core/surveys/models/survey.model';
import { QuestionTypeSelectComponent } from '../../../shared/surveys/components/question-type-select/question-type-select.component';

@Component({
  selector: 'empathy-survey-builder',
  templateUrl: './survey-builder.component.html',
  styleUrl: './survey-builder.component.scss'
})
export class SurveyBuilderComponent  implements OnInit {
  @ViewChild(QuestionTypeSelectComponent) typeComponent!: QuestionTypeSelectComponent;
  questions: Question[] = [];
  showAddQuestion: boolean = false;
  faPlus = faPlus;

  constructor(
  ) {}

  ngOnInit(): void {
    this.questions = [
      {
        questionId:	1,
        questionText:	'',
        mandatoryInd:	true, //Required flag
        questionType: 1,
        options:	['-', '-'],
        randomizeOptionsInd:	false //randomize flag
      }
    ]


  }

  addQuestion(event: { type: QuestionType }) {
    this.closeAddQuestionOverlay();
    this.questions.push(
      {
        questionId:	this.questions.length+1,
        questionText:	'',
        mandatoryInd:	true, //Required flag
        questionType: event.type,
        options:	['',''],
        randomizeOptionsInd:	false //randomize flag
      }
    )
  }

  showQuestionTypeSelect() {
    this.showAddQuestion = true;
  }

  closeAddQuestionOverlay() {
    this.showAddQuestion = false;
  }

}
