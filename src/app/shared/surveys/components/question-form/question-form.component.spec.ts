import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question } from '../../../../core/surveys/models/survey.model';
import { CommonComponentsModule } from '../../../common/components/common-components.module';
import { SurveyComponentsModule } from '../survey-components.module';
import { QuestionFormComponent } from './question-form.component';

describe('QuestionFormComponent', () => {
  let component: QuestionFormComponent;
  let fixture: ComponentFixture<QuestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonComponentsModule, SurveyComponentsModule],
      declarations: [QuestionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionFormComponent);
    component = fixture.componentInstance;

    let questionMock: Question = {
      questionId: 1,
      questionText: '',
      mandatoryInd: true,
      questionType: 1, // Multiple Choice
      options: ['-','-'],
      randomizeOptionsInd: false,
    };
    component.question = questionMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
