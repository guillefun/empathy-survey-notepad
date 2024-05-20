import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyDto } from '../models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  path: string = '/survey';

  constructor(
    private _http: HttpClient
  ) { }

  getAllSurveys(): Observable<SurveyDto[]> {
    let url: string = `${this.path}`

    return this._http.get<any>(url);
  }

  postSurvey(survey: SurveyDto): Observable<SurveyDto> {
    let url: string = `${this.path}`

    return this._http.post<any>(url, survey);
  }

  getSurvey(id: string): Observable<SurveyDto> {
    let url: string = `${this.path}/${id}`

    return this._http.get<any>(url);
  }

  updateSurvey(question: SurveyDto, id: string): Observable<SurveyDto> {
    let url: string = `${this.path}/${id}`

    return this._http.put<any>(url, question);
  }
}
