import Axios, { AxiosResponse } from "axios";

const surveyService = {
  getSurveys: (): Promise<any> => {
    return Axios.get("https://mahmoudshaar.azurewebsites.net/api/surveys").then(
      (response: AxiosResponse<any>) => response.data
    );
  },
  postSurveys: (): Promise<any> => {
    return Axios.post("https://mahmoudshaar.azurewebsites.net/api/surveys", {
      Message: "Hi",
      Location: "Houston",
    }).then((response: AxiosResponse<any>) => response.data);
  },
};

export default surveyService;
