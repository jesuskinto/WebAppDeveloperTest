import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import getRandomColor from '../utils/getRandomColor';

const CardChart = ({ doughnutData }) => {
  return (
    <Card sx={{ width: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Chart
        </Typography>
        <Doughnut
          data={{
            datasets: [{
              data: doughnutData,
              backgroundColor: getRandomColor(doughnutData && doughnutData.length)
            }]
          }}
        />
      </CardContent>
    </Card>
  );
};

export default CardChart;
