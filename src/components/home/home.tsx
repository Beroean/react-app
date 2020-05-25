import React from 'react';
import { WithStyles, createStyles, Theme, withStyles, Typography } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    root: { color: 'blue' },
});

function Home(props: IHomeProps) {
    const { classes } = props;
    return (
        <Typography className={classes.root} variant="h2" gutterBottom>
            Home Page
        </Typography>
    );
}

interface IHomeProps extends WithStyles<typeof styles> {
}

export default withStyles(styles)(Home);