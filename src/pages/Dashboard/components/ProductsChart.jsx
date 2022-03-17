import React from 'react';
import Grid from '@mui/material/Grid';

import ProductsList from './ProductsList';
import DoughnutChart from './DoughnutChart';
const ProductsChart = () => {
  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={16} lg={10}>
        <ProductsList />
      </Grid>
      <Grid item xs={16} lg={6} sx={{ display: 'grid', placeItems: 'center' }}>
        <DoughnutChart />
      </Grid>
    </Grid>
  );
};

export default ProductsChart;
