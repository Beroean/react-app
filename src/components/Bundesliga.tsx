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
  useEffect(() => {
    loadCompetetionData();
  }, []);

  async function loadCompetetionData() {
    const data = await footballService.getGermanStandings();
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
