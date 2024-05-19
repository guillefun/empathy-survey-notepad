import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SurveyDto } from '../../../core/surveys/models/survey.model';
import { SurveyUtils } from '../../../shared/surveys/utils/utils';

@Component({
  selector: 'empathy-surveys-dashboard',
  templateUrl: './surveys-dashboard.component.html',
  styleUrl: './surveys-dashboard.component.scss'
})
export class SurveysDashboardComponent {
  faPlus = faPlus;

  surveys: SurveyDto[] = [
    {
      id: "1",
      questions: [
        {
          questionId: 1,
          questionText: "What is your favorite genre of movie?",
          mandatoryInd: true,
          questionType: 2, // Multiple Choice
          options: ["Action", "Comedy", "Drama", "Sci-Fi", "Romance", "Animation", "Documentary"],
          randomizeOptionsInd: true,
        },
        {
          questionId: 2,
          questionText: "How often do you watch movies?",
          mandatoryInd: false,
          randomizeOptionsInd: true,
          questionType: 3, // Likert Scale
          options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
      ],
    },
    {
      id: "2",
      questions: [
        {
          questionId: 1,
          questionText: "What did you order at our restaurant?",
          mandatoryInd: true,
          questionType: 1, // Text
          randomizeOptionsInd: true,
        },
        {
          questionId: 2,
          questionText: "How would you rate the overall quality of your food?",
          mandatoryInd: true,
          questionType: 4, // Star Rating (1-5)
          randomizeOptionsInd: true,
        },
        {
          questionId: 3,
          questionText: "Would you recommend our restaurant to others?",
          mandatoryInd: false,
          questionType: 2, // Yes/No
          randomizeOptionsInd: true,
        },
      ],
    }
  ];

  constructor(
   // private surveyService: SurveyService
  ) {

  }

  createSurvey() {
    let survey = SurveyUtils.surveyFactory();
    console.log(survey)
    //TODO IMPLEMENT THE HTTP SERVICE, THEN NAVIGATE
  }

}
