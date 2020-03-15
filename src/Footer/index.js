import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
  root: {
    // width: 500,
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.root}
    ><h6>©maxgdev.net 2020</h6>
    </BottomNavigation>
  );
}
