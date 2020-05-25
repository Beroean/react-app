import React from 'react';
import { WithStyles, createStyles, Theme, withStyles, Typography } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    root: { color: 'red' },
});

function Bar(props: IBarProps) {
    const { classes } = props;
    return (
        <Typography className={classes.root} variant="h2" gutterBottom>
            Bar Page
        </Typography>
    );
}

interface IBarProps extends WithStyles<typeof styles> {
}

export default withStyles(styles)(Bar);