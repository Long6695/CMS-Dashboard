import React from 'react';
import Box from '@mui/material/Box';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ['Meat', 'Vegetable', 'Fish'],
  datasets: [
    {
      data: [49, 31, 21],
      backgroundColor: [
        'rgba(0, 227, 150, 0.8)',
        'rgb(254, 176, 25, 0.8)',
        'rgb(0, 143, 251, 0.8)',
      ],
      borderColor: [
        'rgba(0, 227, 150, 1)',
        'rgba(254, 176, 25, 1)',
        'rgba(0, 143, 251, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  return (
    <Box width="300px" height="300px">
      <Doughnut data={data} options={{}} />
    </Box>
  );
};

export default DoughnutChart;
