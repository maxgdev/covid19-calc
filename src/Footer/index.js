import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.root}
    ><p>©maxgdev.net 2020</p>
    </BottomNavigation>
  );
}
