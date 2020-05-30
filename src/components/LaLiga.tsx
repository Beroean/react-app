import React, { useState, useEffect } from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { IStandingsTable, columnDefs } from "../models/teamStanding";
import footballService from "../services/footballService";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

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
  const defs = columnDefs;
  const defaultColDef = {
    flex: 1,
    minWidth: 75,
  };
  useEffect(() => {
    loadCompetetionData();
  }, []);

  async function loadCompetetionData() {
    const data = await footballService.getSpanishStandings();
    setStandingsTable(data);
  }
  return (
    <div className={classes.gridRoot}>
      {standingsTable && (
        <div className={[classes.gridRoot, "ag-theme-alpine-dark"].join(" ")}>
          <AgGridReact
            rowData={standingsTable!.table}
            columnDefs={defs}
            defaultColDef={defaultColDef}
            rowHeight={35}
            gridAutoHeight
          />
        </div>
      )}
    </div>
  );
}

interface ILaLiga extends WithStyles<typeof styles> {}

export default withStyles(styles)(LaLiga);