import { SurveyDto } from "../../../core/surveys/models/survey.model";
import { CommonUtils } from "../../common/utils/utils";

export class SurveyUtils {

  static surveyFactory() {
    let survey: SurveyDto = {
      id: CommonUtils.generateUUID(),
      title: 'Urban Mobility Trends and Preferences',
      description: 'Share your travel experiences and help us design better transportation systems for everyone',
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
