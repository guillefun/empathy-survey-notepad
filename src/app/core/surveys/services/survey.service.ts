import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Question, SurveyDto } from '../models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  path: string = environment.API_URL;

  private static httpOptions = {
    headers: new HttpHeaders({ 'X-API-KEY': environment.X_API_KEY }),
  };

  constructor(
    private _http: HttpClient
  ) { }

  getAllSurveys(): Observable<SurveyDto[]> {
    let url: string = `${this.path}/survey`

    return this._http.get<any>(url, SurveyService.httpOptions);
  }

  postSurvey(survey: SurveyDto): Observable<SurveyDto> {
    let url: string = `${this.path}/survey`

    return this._http.post<any>(url, survey, SurveyService.httpOptions);
  }

  getSurvey(id: string): Observable<Question> {
    let url: string = `${this.path}/survey/${id}`

    return this._http.get<any>(url, SurveyService.httpOptions);
  }

  updateSurvey(question: SurveyDto, id: string): Observable<SurveyDto> {
    let url: string = `${this.path}/survey/${id}`

    return this._http.post<any>(url, question, SurveyService.httpOptions);
  }
}
