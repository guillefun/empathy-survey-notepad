import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from '../../../core/surveys/models/survey.model';
import { QuestionTypeSelectComponent } from '../../../shared/surveys/components/question-type-select/question-type-select.component';

@Component({
  selector: 'empathy-survey-builder',
  templateUrl: './survey-builder.component.html',
  styleUrl: './survey-builder.component.scss'
})
export class SurveyBuilderComponent  implements OnInit {
  @ViewChild(QuestionTypeSelectComponent) typeComponent!: QuestionTypeSelectComponent;
  questions: Question[] = [];
  showAddQuestion: boolean = true;

  constructor(
  ) {}

  ngOnInit(): void {
    this.questions = [
      {
        questionId:	1,
        questionText:	'Hola primer cuestionario',
        mandatoryInd:	true, //Required flag
        questionType: 1,
        options:	['UNO', 'DOS', 'TRES' ],
        randomizeOptionsInd:	true //randomize flag
      }
    ]


  }

  addQuestion() {
    this.questions.push(
      {
        questionId:	this.questions.length+1,
        questionText:	'',
        mandatoryInd:	true, //Required flag
        questionType: 2,
        options:	['',''],
        randomizeOptionsInd:	false //randomize flag
      }
    )
  }

  showQuestionTypeSelect() {
    this.showAddQuestion = !this.showAddQuestion;
  }

}
