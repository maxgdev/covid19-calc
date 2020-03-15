import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    // width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.root}
    >
        <Typography va>© maxgdev.net 2020</Typography>
    </BottomNavigation>
  );
}
