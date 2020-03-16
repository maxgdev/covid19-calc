import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import countryPopData from './countryPopulationData'

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
  const [country, setCountry] = useState('United Kingdom');
  const [population, setPopulation] = useState(66435600);
  const [infectedPercentage, setInfectedPercentage] = useState(80);
  const [demographyPercentage, setDemographyPercentage] = useState(18);
  const [mortality, setMortality] = useState(1);
  let deaths = 0;

  const calcDeaths = (population, infectedPercentage, demographyPercentage, mortality) => {
    const deaths = (population * 
        (infectedPercentage/100) * 
        (demographyPercentage/100) * 
        (mortality/100));
    return deaths;  
  }
 
  deaths = parseInt((calcDeaths(population, infectedPercentage, demographyPercentage, mortality)));
 
  const onChange = event => {
    const eventValue = event.target.value
    setCountry(eventValue)
    const countryObj = countryPopData.find(c => c.country === eventValue)
    setPopulation(countryObj.population);
    
  };
  // console.log(country)
  // console.log("population: "+ population)

  return (
    <div className={classes.root}>
    <Grid justify='center' container spacing={3}>
    <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant='h4'>
            Enter values to explore the death rate (mortality) of COVID-19
          </Typography>
          <Typography variant='h6'>
          Coronavirus 2019-nCoV / COVID-19 / SARS-CoV-2
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-country"
              select
              label="Country"
              value={country}
              variant="outlined"
              onChange={onChange}
            >
              {countryPopData.map(option => (
                <MenuItem key={option.country} value={option.country}>
                  {option.country}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-population"
              label="Population"
              type="number"
              value={population}
              onChange={element => setPopulation(element.target.value)}
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
              value={infectedPercentage}
              onChange={element => setInfectedPercentage(element.target.value)}
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
              value={demographyPercentage}
              onChange={element => setDemographyPercentage(element.target.value)}
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
              value={mortality}
              onChange={element => setMortality(element.target.value)}
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
      <Grid item xs={12} sm={12}>
        <Paper className={classes.paper}>
            <Typography variant='h4'>Estimated Infections</Typography>
            <Typography variant='h4'>
              <Box fontWeight="fontWeightBold" m={1}>
              {(population * (infectedPercentage / 100)).toLocaleString()}
              </Box>
            </Typography>
            <Typography variant='h4'>Estimated Deaths</Typography>
            <Typography variant='h4' color='secondary'>
              <Box fontWeight="fontWeightBold" m={1}>
              {deaths.toLocaleString()}
              </Box>
            </Typography>
            <br />
        </Paper>
      </Grid>

    </Grid>
  </div>

  );
}
