import React from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { columnDefs, mobileColumnDefs } from "../../models/teamStanding";
import { GridReadyEvent } from "ag-grid-community";
import { useWindowSize } from "../hooks/windowSize";

const styles = (theme: Theme) => createStyles({});

function StandingsGrid(props: IStandingsGridProps) {
  const { isMobile } = useWindowSize();
  const defs = isMobile ? mobileColumnDefs : columnDefs;
  const defaultColDef = {
    flex: 1,
    minWidth: 75,
  };

  return (
    <div className={"ag-theme-alpine-dark"}>
      <AgGridReact
        columnDefs={defs}
        defaultColDef={defaultColDef}
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
