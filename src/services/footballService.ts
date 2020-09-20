import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import {
  IStandingsResponse,
  IStandingsTable,
  IScorersResponse,
  IScorer,
} from "../models/teamStanding";

function getHeaders(): AxiosRequestConfig {
  return {
    headers: { "X-Auth-Token": "3d94d314e5084ea2983b02ed81d976e4" },
  };
}

const footballService = {
  getGermanStandings: (): Promise<IStandingsTable> => {
    return Axios.get(
      "https://api.football-data.org/v2/competitions/BL1/standings",
      getHeaders()
    ).then(
      (response: AxiosResponse<IStandingsResponse>) =>
        response.data.standings[0]
    );
  },
  getGermanScorers: (): Promise<IScorer[]> => {
    return Axios.get(
      "https://api.football-data.org/v2/competitions/BL1/scorers",
      getHeaders()
    ).then((response: AxiosResponse<IScorersResponse>) => {
      return response.data.scorers;
    });
  },
  getEnglishStandings: (): Promise<IStandingsTable> => {
    return Axios.get(
      "https://api.football-data.org/v2/competitions/PL/standings",
      getHeaders()
    ).then(
      (response: AxiosResponse<IStandingsResponse>) =>
        response.data.standings[0]
    );
  },
  getEnglishScorers: (): Promise<IScorer[]> => {
    return Axios.get(
      "https://api.football-data.org/v2/competitions/PL/scorers",
      getHeaders()
    ).then((response: AxiosResponse<IScorersResponse>) => {
      return response.data.scorers;
    });
  },
  getSpanishStandings: (): Promise<IStandingsTable> => {
    return Axios.get(
      "https://api.football-data.org/v2/competitions/PD/standings",
      getHeaders()
    ).then(
      (response: AxiosResponse<IStandingsResponse>) =>
        response.data.standings[0]
    );
  },
  getSpanishScorers: (): Promise<IScorer[]> => {
    return Axios.get(
      "https://api.football-data.org/v2/competitions/PD/scorers",
      getHeaders()
    ).then((response: AxiosResponse<IScorersResponse>) => {
      return response.data.scorers;
    });
  },
  getMatches: (): Promise<any> => {
    return Axios.get(
      "https://api.football-data.org/v2/matches",
      getHeaders()
    ).then((response: AxiosResponse<IScorersResponse>) => {
      return response.data;
    });
  },
};

export default footballService;
