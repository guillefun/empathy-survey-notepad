import { Component, OnInit } from '@angular/core';
import { IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons';
import { SurveyDto } from '../../../core/surveys/models/survey.model';
import { SurveyService } from '../../../core/surveys/services/survey.service';
import { SurveyUtils } from '../../../shared/surveys/utils/utils';

@Component({
  selector: 'empathy-surveys-dashboard',
  templateUrl: './surveys-dashboard.component.html',
  styleUrl: './surveys-dashboard.component.scss'
})
export class SurveysDashboardComponent implements OnInit {
  faPlus: IconDefinition = faPlus;
  surveys: SurveyDto[] = [];

  constructor(
   private surveyService: SurveyService
  ) {

  }

  ngOnInit(): void {
    this.surveyService.getAllSurveys().subscribe({
      next: (res: SurveyDto[])=> {
        console.log(res)
       this.surveys = res;
      },
      error: (_err) => {

      }
    })
  }

  createSurvey() {
    let survey = SurveyUtils.surveyFactory();

    this.surveyService.postSurvey(survey).subscribe({
      next: (res: SurveyDto)=> {
        console.log(res)
        this.surveys.push(res)
      },
      error: (_err) => {

      }
    })
    //TODO IMPLEMENT THE HTTP SERVICE, THEN NAVIGATE
  }

}
