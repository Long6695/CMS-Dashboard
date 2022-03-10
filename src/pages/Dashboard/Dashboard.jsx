import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ProductsChart from './components/ProductsChart';

import Tasks from './components/Tasks';
import User from './components/User';
const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Typography variant="h4" ml="16px" my="16px">
        Report
      </Typography>
      <Grid item xs={12}>
        <Paper>
          <ProductsChart />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper>
          <Tasks />
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper>
          <User />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
