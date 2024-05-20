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
      questionText: 'Test survey',
      mandatoryInd: true,
      questionType: 1,
      options: ['-','-'],
      randomizeOptionsInd: false,
    };
    component.question = questionMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as question title 'Test survey'`, () => {
    expect(component.question.questionText).toEqual('Test survey');
  });

  it(`should question options'`, () => {
    expect(component.question.options?.length).toEqual(2);
  });

});
