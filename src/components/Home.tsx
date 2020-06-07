import React, { useEffect, useState } from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryContainer,
} from "victory";
import footballService from "../services/footballService";
import { IStandingsTable } from "../models/teamStanding";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { GridReadyEvent } from "ag-grid-community";
import StandingsGrid from "./common/StandingsGrid";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    },
  });

function Home(props: IHome) {
  const { classes } = props;
  return (
    <div className={classes.root}>This has been a successful unveiling</div>
  );
}

interface IHome extends WithStyles<typeof styles> {}

export default withStyles(styles)(Home);
