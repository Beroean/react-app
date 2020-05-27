import { Url } from "url";

export interface IStandingsResponse {
  competition: ICompetition;
  season: ISeason;
  standings: IStandingsTable[];
}

export interface ICompetition {
  code: string;
  id: number;
  name: string;
}

export interface IStandingsTable {
  // TODO: make this an enum
  type: string;
  stage: string;
  table: ITeamStanding[];
}

export interface ISeason {
  currentMatchday: number;
  endDate: string;
  startDate: string;
  id: number;
}

export interface ITeamStanding {
  draw: number;
  goalDifference: number;
  goalsAgainst: number;
  goalsFor: number;
  lost: number;
  playedGames: number;
  points: number;
  position: number;
  won: number;
  team: ITeam;
}

export interface ITeam {
  crestUrl: Url;
  name: string;
  id: number;
}

export const columnDefs = [
  { headerName: "Draw", field: "draw" },
  { headerName: "Goal Difference", field: "goalDifference" },
  { headerName: "Goals Against", field: "goalsAgainst" },
  { headerName: "Lost", field: "lost" },
  { headerName: "Played Games", field: "playedGames" },
  { headerName: "Points", field: "points" },
  { headerName: "Position", field: "position" },
  { headerName: "Won", field: "won" },
  {
    headerName: "Name",
    pinned: "left",
    valueGetter: function (params: any) {
      return params.data.team.name;
    },
  },
  {
    headerName: "Crest",
    pinned: "left",
    valueGetter: function (params: any) {
      return params.data.team.crestUrl;
    },
    cellRenderer: function (params: any) {
      return (
        '<img alt="' +
        params.data.team.name +
        '" width="30" height="30" src="' +
        params.data.team.crestUrl +
        '" />'
      );
    },
  },
];
