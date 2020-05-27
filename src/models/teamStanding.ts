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
  { headerName: "Points", field: "points", sortable: true, filter: true },
  { headerName: "Won", field: "won", sortable: true, filter: true },
  { headerName: "Lost", field: "lost", sortable: true, filter: true },
  {
    headerName: "Draw",
    field: "draw",
    sortable: true,
    filter: true,
  },
  {
    headerName: "Goal Difference",
    field: "goalDifference",
    sortable: true,
    filter: true,
  },
  {
    headerName: "Goals Against",
    field: "goalsAgainst",
    sortable: true,
    filter: true,
  },

  {
    headerName: "Played Games",
    field: "playedGames",
    sortable: true,
    filter: true,
  },

  {
    headerName: "Name",
    pinned: "left",
    valueGetter: function (params: any) {
      return params.data.team.name;
    },
    sortable: true,
    filter: true,
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
