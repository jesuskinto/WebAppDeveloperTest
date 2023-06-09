
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
import DataTable from './components/DataTable';
import CardChart from './components/CardChart';

import './App.css';

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
    return (
      <CardChart doughnutData={doughnutData} getRandomColor={getRandomColor}/>
    )
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