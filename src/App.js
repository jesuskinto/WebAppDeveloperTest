
import { useState } from 'react';

import {
  Button,
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
  TextField,
  CardContent
} from '@mui/material';

import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'

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
    return <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Form
        </Typography>
        <Stack spacing={2}>
          <TextField size='small' label="Title" variant="outlined" />
          <TextField size='small' label="Body" variant="outlined" />
          <Button variant="contained">Add</Button>
        </Stack>
      </CardContent>
    </Card>
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