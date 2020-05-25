import React, { useEffect } from "react";
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

const styles = (theme: Theme) =>
  createStyles({
    root: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
    heading: { color: "grey", marginTop: "10px" },
    chartContainer: { width: 500, height: 500 },
  });

function Home(props: IHomeProps) {
  const { classes } = props;
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  useEffect(() => {
    loadCompetetionData();
  }, []);

  async function loadCompetetionData() {
    const data = await footballService.getStandings();
  }

  return (
    <div>
      <Typography className={classes.heading} variant="h2">
        Home Page
      </Typography>
      <div className={classes.root}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={30}
          containerComponent={<VictoryContainer responsive={false} />}
          height={400}
          width={500}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={30}
          containerComponent={<VictoryContainer responsive={false} />}
          height={400}
          width={500}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </div>
    </div>
  );
}

interface IHomeProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(Home);
