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
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";

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
    chartRoot: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
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

  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Top Scorers",
    },
    subtitle: {
      text: "Broken down by a bunch of stats",
    },
    xAxis: {
      categories: ["Africa", "America", "Asia", "Europe", "Oceania"],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Goals",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      valueSuffix: " goals",
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: "#FFFFFF",
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Year 1800",
        data: [107, 31, 635, 203, 2],
      },
      {
        name: "Year 1900",
        data: [133, 156, 947, 408, 6],
      },
      {
        name: "Year 2000",
        data: [814, 841, 3714, 727, 31],
      },
      {
        name: "Year 2016",
        data: [1216, 1001, 4436, 738, 40],
      },
    ],
  };

  async function loadCompetetionData() {
    const standingsData = await footballService.getSpanishStandings();
    const scorersData = await footballService.getSpanishScorers();
    setStandingsTable(standingsData);
    setTopScorers(
      scorersData.sort((x, y) => x.numberOfGoals - y.numberOfGoals)
    );
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
          {topScorers && (
            <div className={classes.chartRoot}>
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
          )}
        </Route>
      </Switch>
    </div>
  );
}

interface ILaLiga extends WithStyles<typeof styles> {}

export default withStyles(styles)(LaLiga);
