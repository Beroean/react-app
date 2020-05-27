import Axios, { AxiosResponse } from "axios";
import { IStandingsResponse, IStandingsTable } from "../models/teamStanding";

const footballService = {
  getGermanStandings: (): Promise<IStandingsTable> => {
    const options = {
      headers: { "X-Auth-Token": "3d94d314e5084ea2983b02ed81d976e4" },
    };
    return Axios.get(
      "https://api.football-data.org/v2/competitions/BL1/standings",
      options
    ).then(
      (response: AxiosResponse<IStandingsResponse>) =>
        response.data.standings[0]
    );
  },
  getEnglishStandings: (): Promise<IStandingsTable> => {
    const options = {
      headers: { "X-Auth-Token": "3d94d314e5084ea2983b02ed81d976e4" },
    };
    return Axios.get(
      "https://api.football-data.org/v2/competitions/PL/standings",
      options
    ).then(
      (response: AxiosResponse<IStandingsResponse>) =>
        response.data.standings[0]
    );
  },
  getSpanishStandings: (): Promise<IStandingsTable> => {
    const options = {
      headers: { "X-Auth-Token": "3d94d314e5084ea2983b02ed81d976e4" },
    };
    return Axios.get(
      "https://api.football-data.org/v2/competitions/PD/standings",
      options
    ).then(
      (response: AxiosResponse<IStandingsResponse>) =>
        response.data.standings[0]
    );
  },
};

export default footballService;
