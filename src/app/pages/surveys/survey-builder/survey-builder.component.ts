import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import {
  Question,
  QuestionType,
  SurveyDto,
} from '../../../core/surveys/models/survey.model';
import { SurveyService } from '../../../core/surveys/services/survey.service';
import { QuestionTypeSelectComponent } from '../../../shared/surveys/components/question-type-select/question-type-select.component';

@Component({
  selector: 'empathy-survey-builder',
  templateUrl: './survey-builder.component.html',
  styleUrl: './survey-builder.component.scss',
})
export class SurveyBuilderComponent implements OnInit {
  @ViewChild(QuestionTypeSelectComponent)
  typeComponent!: QuestionTypeSelectComponent;

  surveyId: string = '';
  survey: SurveyDto | null = null;

  showAddQuestion: boolean = false;
  faPlus = faPlus;

  surveyForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private surveyService: SurveyService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.route.params.subscribe((params) => {
      this.surveyId = params['id'];
      this.surveyService.getSurvey(this.surveyId).subscribe({
        next: (res: SurveyDto) => {
          this.initSurveyForm(res);

          this.surveyForm.valueChanges
            .pipe(debounceTime(1000), distinctUntilChanged())
            .subscribe((_res) => {
              this.updateSurvey();
            });
        },
        error: (_err) => {},
      });
    });
  }
  initSurveyForm(survey: SurveyDto) {
    this.survey = survey;
    this.surveyForm.get('title')?.setValue(this.survey.title);
    this.surveyForm.get('description')?.setValue(this.survey.description);
  }

  updateSurvey() {
    let updatedSurvey: SurveyDto = {
      id: this.surveyId,
      title: this.surveyForm.get('title')?.value ?? '',
      description: this.surveyForm.get('description')?.value ?? '',
      questions: this.survey!.questions,
    };
    this.surveyService
      .updateSurvey(updatedSurvey, this.surveyId)
      .subscribe({
        next: (res: SurveyDto) => {
          //TODO:
        },
        error: (_err) => {
          //TODO: ERROR HANDLING
        }
      });
  }

  updateSurveyQuestions(index: number, question: Question) {
    this.survey!.questions[index].questionId = question.questionId;
    let fixedIndex = this.survey!.questions
                          .findIndex((q: Question) => q.questionId == question.questionId);

    if(fixedIndex === index) {
      this.survey!.questions[index].questionText = question.questionText;
      this.survey!.questions[index].questionType = question.questionType;
      this.survey!.questions[index].randomizeOptionsInd = question.randomizeOptionsInd;
      this.survey!.questions[index].options = question.options;
      this.survey!.questions[index].mandatoryInd = question.mandatoryInd;

      this.updateSurvey();
    } else {
      //TODO: Handling error
    }

  }

  addQuestion(type: QuestionType ) {
    this.closeAddQuestionOverlay();
    this.survey!.questions.push({
      questionId: this.survey!.questions.length + 1,
      questionText: '',
      mandatoryInd: true, //Required flag
      questionType: type,
      options: ['-', '-'],
      randomizeOptionsInd: false, //randomize flag
    });
    this.updateSurvey();
  }

  showQuestionTypeSelect() {
    this.showAddQuestion = true;
  }

  closeAddQuestionOverlay() {
    this.showAddQuestion = false;
  }
}
