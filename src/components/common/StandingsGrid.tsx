import React from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { columnDefs } from "../../models/teamStanding";
import { GridReadyEvent } from "ag-grid-community";

const styles = (theme: Theme) =>
  createStyles({
    gridRoot: {
      height: "100%",
      width: "100%",
      display: "flex",
      marginTop: 10,
      overflow: "hidden",
    },
  });

function StandingsGrid(props: IStandingsGridProps) {
  const { classes } = props;
  const defs = columnDefs;

  // TODO: Add grid below to main components
  return (
    <div className={[classes.gridRoot, "ag-theme-alpine-dark"].join(" ")}>
      <AgGridReact
        columnDefs={defs}
        rowHeight={35}
        gridAutoHeight
        onGridReady={props.onGridReady}
      />
    </div>
  );
}

interface IStandingsGridProps extends WithStyles<typeof styles> {
  onGridReady(gridReadyEvent: GridReadyEvent): void;
}

export default withStyles(styles)(StandingsGrid);
