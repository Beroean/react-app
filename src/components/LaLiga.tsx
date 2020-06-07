import React, { useState, useEffect, Fragment } from "react";
import {
  WithStyles,
  createStyles,
  Theme,
  withStyles,
  Tabs,
  Tab,
} from "@material-ui/core";
import { IStandingsTable, IScorer } from "../models/teamStanding";
import footballService from "../services/footballService";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { GridReadyEvent } from "ag-grid-community";
import StandingsGrid from "./common/StandingsGrid";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";

const styles = (theme: Theme) =>
  createStyles({
    gridRoot: {
      height: "100%",
      width: "100%",
      display: "flex",
      overflow: "hidden",
      marginTop: 10,
      "& .ag-theme-alpine-dark .ag-header-cell": {
        paddingLeft: 1,
        paddingRight: 1,
      },
      "& .ag-theme-alpine-dark .ag-cell": {
        paddingLeft: 1,
        paddingRight: 1,
      },
    },
  });

function LaLiga(props: ILaLiga) {
  const { classes } = props;
  const [standingsTable, setStandingsTable] = useState<IStandingsTable>();
  const [topScorers, setTopScorers] = useState<IScorer[]>();
  const { path, url } = useRouteMatch();
  const [value, setValue] = useState<string>(url);
  useEffect(() => {
    loadCompetetionData();
  }, []);

  async function loadCompetetionData() {
    const standingsData = await footballService.getSpanishStandings();
    const scorersData = await footballService.getSpanishScorers();
    setStandingsTable(standingsData);
    setTopScorers(scorersData);
  }

  function onGridReady(params: GridReadyEvent) {
    params.api.setRowData(standingsTable!.table);
  }

  function handleChange(event: any, newValue: any) {
    setValue(newValue);
  }

  const allTabs = ["/standings", "/chart1", "/chart2"];
  return (
    <div>
      <Tabs value={value} centered onChange={handleChange}>
        <Tab label="Standings" component={Link} value={url} to={url} />
        <Tab
          label="Chart 1"
          component={Link}
          to={url + allTabs[1]}
          value={url + allTabs[1]}
        />
      </Tabs>
      <Switch>
        <Route exact path={path}>
          <div className={classes.gridRoot}>
            {standingsTable && <StandingsGrid onGridReady={onGridReady} />}
          </div>
        </Route>
        <Route path={path + allTabs[1]}>
          <div className={classes.gridRoot}>sup</div>
        </Route>
      </Switch>
    </div>
  );
}

interface ILaLiga extends WithStyles<typeof styles> {}

export default withStyles(styles)(LaLiga);
