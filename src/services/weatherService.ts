import Axios, { AxiosResponse } from "axios";

const weatherService = {
  getWeather: (): Promise<any> => {
    return Axios.get(
      "https://mahmoudshaar.azurewebsites.net/weatherforecast"
    ).then((response: AxiosResponse<any>) => response.data);
  },
};

export default weatherService;
