import React, { useEffect, useState } from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import surveyService from "../services/surveyService";

const styles = (theme: Theme) =>
  createStyles({
    title: {
      ...theme.typography.button,
      fontSize: theme.typography.h4.fontSize,
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    },
    subtitle: {
      ...theme.typography.button,
      fontSize: theme.typography.h6.fontSize,
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    },
  });

function Home(props: IHome) {
  const { classes } = props;
  const [surveyData, setSurveyData] = useState<string>();
  useEffect(() => {
    // loadSurveys();
  }, []);

  async function loadSurveys() {
    const response = await surveyService.getSurveys();
    setSurveyData(JSON.stringify(response));
  }

  return (
    <div>
      <div className={classes.title}>This app displays the real-time standings/rankings in the top 5 football leagues in Europe.</div>
      <div className={classes.title}>You can also view the top scorers in those leagues.</div>
      <div className={classes.title}>Click one of the league icons/tabs above to view the current standings in that league.</div>
    </div>
  );
}

interface IHome extends WithStyles<typeof styles> {}

export default withStyles(styles)(Home);
