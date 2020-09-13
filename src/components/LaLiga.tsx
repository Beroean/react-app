import React, { useState, useEffect } from "react";
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
import {
  Route,
  Link,
  Switch,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";
import { BarChartOptions } from "./common/BarChartOptions";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTabs-root": {
        backgroundColor: "inherit !important",
      },
    },
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
    chartRoot: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
  });

function LaLiga(props: ILaLiga) {
  const { classes } = props;
  const [standingsTable, setStandingsTable] = useState<IStandingsTable>();
  const [topScorers, setTopScorers] = useState<IScorer[]>();
  const [chartOptions, setChartOptions] = useState<any>();
  const { path, url } = useRouteMatch();
  const { pathname } = useLocation();
  const [value, setValue] = useState<string>(pathname);
  useEffect(() => {
    loadCompetetionData();
  }, []);

  useEffect(() => {
    if (topScorers) {
      const options = { ...BarChartOptions };
      options.xAxis!.categories = [];
      options.series![0].data = [];
      topScorers.forEach((scorer) => {
        options.xAxis!.categories.push(scorer.player.name);
        options.series![0].data.push(scorer.numberOfGoals);
      });
      setChartOptions(options);
    }
  }, [topScorers]);

  async function loadCompetetionData() {
    const standingsData = await footballService.getSpanishStandings();
    const scorersData = await footballService.getSpanishScorers();
    setStandingsTable(standingsData);
    setTopScorers(
      scorersData.sort((x, y) => y.numberOfGoals - x.numberOfGoals)
    );
  }

  function onGridReady(params: GridReadyEvent) {
    params.api.setRowData(standingsTable!.table);
  }

  function handleChange(event: any, newValue: any) {
    setValue(newValue);
  }

  const allTabs = ["/standings", "/scorers"];
  return (
    <div className={classes.root}>
      <Tabs value={value} centered onChange={handleChange}>
        <Tab label="Standings" component={Link} value={url} to={url} />
        <Tab
          label="Top Scorers"
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
          {topScorers && (
            <div className={classes.chartRoot}>
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </div>
          )}
        </Route>
      </Switch>
    </div>
  );
}

interface ILaLiga extends WithStyles<typeof styles> {}

export default withStyles(styles)(LaLiga);
