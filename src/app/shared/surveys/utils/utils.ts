import { SurveyDto } from "../../../core/surveys/models/survey.model";
import { CommonUtils } from "../../common/utils/utils";

export class SurveyUtils {

  static surveyFactory() {
    let survey: SurveyDto = {
      id: CommonUtils.generateUUID(),
      questions: [
        {
          questionId: 1,
          questionText: '',
          mandatoryInd: false,
          questionType: 1, // Multiple Choice
          options: ['-','-'],
          randomizeOptionsInd: true,
        },
      ]
    }

    return survey;
  }

}
