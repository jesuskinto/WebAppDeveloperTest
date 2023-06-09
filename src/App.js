
import { useState } from 'react';

import {
  Stack,
  Card,
  Typography,
  CardContent
} from '@mui/material';

import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import Form from './components/Form';

import './App.css';
import DataTable from './components/DataTable';

Chart.register(ArcElement);


function App() {

  const [doughnutData, setDoughnutData] = useState([1, 2, 3])
  const [data, setData] = useState([]);

  const handleAddData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  const getRandomColor = count => {
    var colors = [];
    for (var i = 0; i < count; i++) {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var x = 0; x < 6; x++) color += letters[Math.floor(Math.random() * 16)];
      colors.push(color);
    }
    return colors;
  }

  const getForm = () => {
    return (
      <Form onAdd={handleAddData}/>
    )
  }

  const getTable = () => {
    return (
      <DataTable posts={data} />
    )
  }

  const getCardChart = () => {
    return <Card sx={{ width: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Chart
        </Typography>
        <Doughnut data={{
          datasets: [{
            data: doughnutData,
            backgroundColor: getRandomColor(doughnutData.length)
          }]
        }} />
      </CardContent>
    </Card>
  }

  return (
    <div className="App">
      <Stack spacing={2} direction="row">
        {getForm()}
        {getTable()}
        {getCardChart()}
      </Stack>
    </div>
  );
}

export default App;