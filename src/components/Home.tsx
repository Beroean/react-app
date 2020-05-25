import React, { useEffect, useState } from "react";
import {
  WithStyles,
  createStyles,
  Theme,
  withStyles,
  Typography,
} from "@material-ui/core";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryContainer,
} from "victory";
import footballService from "../services/footballService";
import { ITeamStanding, IStandingsTable, ITeam } from "../models/teamStanding";

const styles = (theme: Theme) =>
  createStyles({
    root: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
    heading: { color: "grey", marginTop: "10px" },
    chartContainer: { width: 500, height: 500 },
  });

function Home(props: IHomeProps) {
  const { classes } = props;
  const [standingsTable, setStandingsTable] = useState<IStandingsTable>();
  useEffect(() => {
    loadCompetetionData();
  }, []);

  async function loadCompetetionData() {
    const data = await footballService.getStandings();
    setStandingsTable(data);
  }

  return (
    <div>
      <Typography className={classes.heading} variant="h2">
        Home Page
      </Typography>
      {standingsTable && (
        <div className={classes.root}>
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

interface IHomeProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(Home);
