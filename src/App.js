
import { useState } from 'react';

import {
  Stack,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
  TableHead,
  TableRow,
  Paper,
  CardContent
} from '@mui/material';

import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import Form from './components/Form';

import './App.css';

Chart.register(ArcElement);


function App() {

  const [doughnutData, setDoughnutData] = useState([1, 2, 3])

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
    return <Form />
  }

  const getTable = () => {
    return (
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Table
          </Typography>
          <TableContainer sx={{ width: 650 }} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Body</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>userId</TableCell>
                  <TableCell>title</TableCell>
                  <TableCell>body</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
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