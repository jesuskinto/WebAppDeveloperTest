import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { Doughnut } from 'react-chartjs-2';

const CardChart = ({ doughnutData, getRandomColor }) => {
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
              backgroundColor: getRandomColor(doughnutData.length)
            }]
          }}
        />
      </CardContent>
    </Card>
  );
};

export default CardChart;
