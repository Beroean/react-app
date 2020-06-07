import { Url } from "url";
import { ColDef } from "ag-grid-community";

export interface IStandingsResponse {
  competition: ICompetition;
  season: ISeason;
  standings: IStandingsTable[];
}

export interface IScorer {
  numberOfGoals: number;
  player: IPlayer;
  team: ITeam;
}

export interface IPlayer {
  countryOfBirth: string;
  dateOfBirth: string;
  firstName: string;
  id: number;
  lastName: string;
  name: string;
  position: string;
  nationality: string;
  shirtNumber: number;
}

export interface IScorersResponse {
  competition: ICompetition;
  season: ISeason;
  scorers: IScorer[];
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

export const columnDefs: ColDef[] = [
  {
    headerName: "Crest",
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
    maxWidth: 50,
  },
  {
    headerName: "Name",
    valueGetter: function (params: any) {
      return params.data.team.name;
    },
    sortable: true,
    filter: true,
  },
  {
    headerName: "P",
    field: "points",
    sortable: true,
    filter: true,
    maxWidth: 60,
  },
  { headerName: "W", field: "won", sortable: true, filter: true, maxWidth: 60 },
  {
    headerName: "L",
    field: "lost",
    sortable: true,
    filter: true,
    maxWidth: 60,
  },
  {
    headerName: "D",
    field: "draw",
    sortable: true,
    filter: true,
    maxWidth: 60,
  },
  {
    headerName: "GD",
    field: "goalDifference",
    sortable: true,
    filter: true,
    maxWidth: 60,
  },
  {
    headerName: "GA",
    field: "goalsAgainst",
    sortable: true,
    filter: true,
    maxWidth: 60,
  },
  {
    headerName: "MP",
    field: "playedGames",
    sortable: true,
    filter: true,
    maxWidth: 60,
  },
];

export const mobileColumnDefs: ColDef[] = [
  {
    headerName: "Crest",
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
    maxWidth: 40,
  },
  {
    headerName: "P",
    field: "points",
    sortable: true,
    filter: true,
    maxWidth: 50,
  },
  { headerName: "W", field: "won", sortable: true, filter: true, maxWidth: 50 },
  {
    headerName: "L",
    field: "lost",
    sortable: true,
    filter: true,
    maxWidth: 50,
  },
  {
    headerName: "D",
    field: "draw",
    sortable: true,
    filter: true,
    maxWidth: 50,
  },
  {
    headerName: "GD",
    field: "goalDifference",
    sortable: true,
    filter: true,
    maxWidth: 50,
  },
  {
    headerName: "MP",
    field: "playedGames",
    sortable: true,
    filter: true,
    maxWidth: 50,
  },
];
