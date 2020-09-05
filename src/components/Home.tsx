import React, { useEffect, useState } from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import footballService from "../services/footballService";
import { IStandingsTable } from "../models/teamStanding";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    },
  });

function Home(props: IHome) {
  const { classes } = props;
  return <div className={classes.root}>Feeling bored so I made this</div>;
}

interface IHome extends WithStyles<typeof styles> {}

export default withStyles(styles)(Home);
