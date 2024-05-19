import { SurveyDto } from "../../../core/surveys/models/survey.model";
import { CommonUtils } from "../../common/utils/utils";

export class SurveyUtils {

  static surveyFactory() {
    let survey: SurveyDto = {
      id: CommonUtils.generateUUID(),
      title: 'New survey',
      description: 'Click on any field to edit it.',
      questions: [
        {
          questionId: 1,
          questionText: '',
          mandatoryInd: true,
          questionType: 1, // Multiple Choice
          options: ['-','-'],
          randomizeOptionsInd: false,
        },
      ]
    }

    return survey;
  }

}
