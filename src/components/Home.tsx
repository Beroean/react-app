import React, { useEffect, useState } from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import footballService from "../services/footballService";
import { IStandingsTable } from "../models/teamStanding";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import weatherService from "../services/weatherService";

const styles = (theme: Theme) =>
  createStyles({
    title: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      fontSize: theme.typography.h4.fontSize,
      padding: theme.spacing(1),
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    },
    subtitle: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      fontSize: theme.typography.h6.fontSize,
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
  const [weatherData, setWeatherData] = useState<string>();
  useEffect(() => {
    loadWeather();
  }, []);

  async function loadWeather() {
    const response = await weatherService.getWeather();
    setWeatherData(JSON.stringify(response));
  }

  return (
    <div>
      <div className={classes.title}>Feeling bored so I made this</div>
      <div className={classes.subtitle}>
        Response below comes from an ASP.NET Core app in azure
      </div>
      <div>{weatherData}</div>
    </div>
  );
}

interface IHome extends WithStyles<typeof styles> {}

export default withStyles(styles)(Home);
