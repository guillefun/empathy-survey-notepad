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
  questions: Question[]
}

export type QuestionType = 1 | 2 | 3 | 4;
