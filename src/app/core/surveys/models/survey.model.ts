import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Question {
  questionId:	number,
  questionText?:	string,
  mandatoryInd:	boolean,
  questionType: QuestionType,
  options?:	string[],
  randomizeOptionsInd:	boolean
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
