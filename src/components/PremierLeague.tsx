import React, { useState, useEffect } from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { IStandingsTable } from "../models/teamStanding";
import footballService from "../services/footballService";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { GridReadyEvent } from "ag-grid-community";
import StandingsGrid from "./common/StandingsGrid";

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

function PremierLeague(props: IPremierLeague) {
  const { classes } = props;
  const [standingsTable, setStandingsTable] = useState<IStandingsTable>();
  useEffect(() => {
    loadCompetetionData();
  }, []);

  async function loadCompetetionData() {
    const data = await footballService.getEnglishStandings();
    setStandingsTable(data);
  }

  function onGridReady(params: GridReadyEvent) {
    params.api.setRowData(standingsTable!.table);
  }

  const allTabs = ["/standings", "/chart1", "/chart2"];
  return (
    <div>
      <div className={classes.gridRoot}>
        {standingsTable && <StandingsGrid onGridReady={onGridReady} />}
      </div>
    </div>
  );
}

interface IPremierLeague extends WithStyles<typeof styles> {}

export default withStyles(styles)(PremierLeague);
