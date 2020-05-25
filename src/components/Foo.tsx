import React from "react";
import {
  WithStyles,
  createStyles,
  Theme,
  withStyles,
  Typography,
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: { color: "green" },
  });

function Foo(props: IFooProps) {
  const { classes } = props;
  return (
    <Typography className={classes.root} variant="h2" gutterBottom>
      Foo Page
    </Typography>
  );
}

interface IFooProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(Foo);
