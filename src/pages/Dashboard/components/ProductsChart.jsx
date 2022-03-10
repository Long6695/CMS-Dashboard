import React from 'react';
import Grid from '@mui/material/Grid';

import ProductsList from './ProductsList';
import DoughnutChart from './DoughnutChart';
const ProductsChart = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ProductsList />
      </Grid>
      <Grid item xs={6}>
        <DoughnutChart />
      </Grid>
    </Grid>
  );
};

export default ProductsChart;
