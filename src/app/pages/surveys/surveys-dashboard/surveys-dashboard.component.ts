import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons';
import { SurveyDto } from '../../../core/surveys/models/survey.model';
import { SurveyService } from '../../../core/surveys/services/survey.service';
import { SurveyUtils } from '../../../shared/surveys/utils/utils';

@Component({
  selector: 'empathy-surveys-dashboard',
  templateUrl: './surveys-dashboard.component.html',
  styleUrl: './surveys-dashboard.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('false => true', [
        query('.dashboard__card', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.2s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})
export class SurveysDashboardComponent implements OnInit {
  @ViewChild('dashboard') dashboard: any;

  faPlus: IconDefinition = faPlus;
  surveys: SurveyDto[] = [];

  constructor(
   private surveyService: SurveyService,
   private renderer: Renderer2
  ) {

  }

  ngOnInit(): void {
    this.loadSurveys();
  }

  createSurvey() {
    let survey = SurveyUtils.surveyFactory();

    this.surveyService.postSurvey(survey).subscribe({
      next: (res: SurveyDto)=> {
        //IF THE OBJECT WAS RETURNED WE CAN THEN NAVIGATE
        this.loadSurveys();
      },
      error: (_err) => {
        //TODO: ERROR HANDLING
      }
    })

  }

  loadSurveys() {
    this.surveyService.getAllSurveys().subscribe({
      next: (res: SurveyDto[])=> {
        this.surveys = res;
      },
      error: (_err) => {
        //TODO: ERROR HANDLING
      }
    })
  }
}
