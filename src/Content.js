import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
      width: '100%',
    }
  }));

export default function Content() {
    const classes = useStyles();

    return (
      <div className={classes.content}>
        <Grid className={classes.grid} container spacing={3}>
          <Grid item>
            <Paper className={classes.paper}>Hello,</Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>I am</Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>Grid</Paper>
          </Grid>
        </Grid>
      </div>
    )
}