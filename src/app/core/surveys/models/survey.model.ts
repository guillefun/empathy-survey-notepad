import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Question {
  questionId:	number,
  questionText?:	string,
  mandatoryInd:	boolean, //Required flag
  questionType: QuestionType,
  options?:	string[],
  randomizeOptionsInd:	boolean //randomize flag
}

export interface SurveyDto {
  id: string,
  title: string,
  description: string,
  questions: Question[]
}

export interface QuestionTypeData {
  name: string,
  type: QuestionType,
  icon: IconDefinition
};

export type QuestionType = 1 | 2 | 3 | 4;
