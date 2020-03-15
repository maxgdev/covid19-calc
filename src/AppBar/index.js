import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    
  },
  toolbarMargin: theme.mixins.toolbar
});

const MyAppBar = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          className={classes.flex}
        >
          COVID-19 Mortality Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
));

export default MyAppBar;