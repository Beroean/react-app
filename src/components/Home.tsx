import React from "react";
import {
  WithStyles,
  createStyles,
  Theme,
  withStyles,
  Typography,
} from "@material-ui/core";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const styles = (theme: Theme) =>
  createStyles({
    root: { maxHeight: "100vh" },
    heading: { color: "blue" },
  });

function Home(props: IHomeProps) {
  const { classes } = props;
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h2" gutterBottom>
        Home Page
      </Typography>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
        <VictoryBar data={data} x="quarter" y="earnings" height={100} />
      </VictoryChart>
    </div>
  );
}

interface IHomeProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(Home);
