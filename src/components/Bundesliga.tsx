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
import { IStandingsTable, columnDefs } from "../models/teamStanding";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

const styles = (theme: Theme) =>
  createStyles({
    chartRoot: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
    gridRoot: {
      height: "100%",
      width: "100%",
      display: "flex",
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
    chartContainer: { width: 500, height: 500 },
  });

function Bundesliga(props: IBundesligaProps) {
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
    const data = await footballService.getGermanStandings();
    setStandingsTable(data);
  }

  // TODO: Add mobile version of grid
  // TODO: Move the standings grid to its own component instead of repeating it in the three pages
  // TODO: Add vertical tabs within each league for different views: https://material-ui.com/components/tabs/#vertical-tabs
  // Top 10 scorers bar chart
  // Comparison of team metrics interactive chart
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
      {false && (
        <div className={classes.chartRoot}>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={30}
            containerComponent={<VictoryContainer responsive={false} />}
            height={400}
            width={700}
          >
            <VictoryAxis
              tickFormat={(team) => {
                return "A team";
              }}
            />
            <VictoryAxis dependentAxis />
            <VictoryBar
              data={standingsTable!.table}
              x="position"
              y="goalsFor"
              labels={({ datum }) => datum.team.name}
            />
          </VictoryChart>
        </div>
      )}
    </div>
  );
}

interface IBundesligaProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(Bundesliga);
