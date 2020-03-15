import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      // width: 200,
      flexGrow: 1,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FormInputs() {
  const classes = useStyles();
  const [population, setPopulation] = useState(63182000);
  const [infectedPercentage, setInfectedPercentage] = useState(80);
  const [demographyPercentage, setDemographyPercentage] = useState(18);
  const [mortality, setMortality] = useState(1);
  const [deaths, setDeaths] = useState(0);


  const calcDeaths = (population, infectedPercentage, demographyPercentage, mortality) => {
    const deaths = (population * 
        (infectedPercentage/100) * 
        (demographyPercentage/100) * 
        (mortality/100));
        console.log(deaths);
    return deaths;  
  }

  return (
    <div className={classes.root}>
    <Grid alignContent ='center' container spacing={3}>
    <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography>
            Enter values to explore the death rate (mortality) COVID-19
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
  
              id="outlined-country"
              label="Country"
              defaultValue="UK"
              variant="outlined"
            />
            <TextField
              id="outlined-population"
              label="Population"
              type="number"
              defaultValue="63182000"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              helperText="Population number in full"
            />
            <TextField
              id="outlined-infectedPercent"
              label="% Infected"
              type="number"
              defaultValue="60"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              helperText="% of population that will be infected"
            />
            <TextField
              id="outlined-ageDemographicPercent"
              label="% of Demographic"
              type="number"
              defaultValue="18"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              helperText="Over 65 % of Population"
            />
            <TextField
              id="outlined-mortality"
              label="% Mortality"
              type="number"
              defaultValue="1"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              helperText="Estimated % of Deaths of those Infected"
            />
          </div>
        </form>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
            <Typography variant='h5'>Estimated Deaths: {calcDeaths(population, infectedPercentage, demographyPercentage, mortality)}</Typography>
        </Paper>
      </Grid>

    </Grid>
  </div>

  );
}
