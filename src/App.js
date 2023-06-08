
import { useState, useEffect } from 'react';

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
import { sendPost, getPosts } from './services';
import { getRandomColor, repeatCounterElement } from './utils'

import './App.css';

Chart.register(ArcElement);


function App() {

  const [doughnutData, setDoughnutData] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [listOfPosts, setListOfPost] = useState([])

  const handleClickAdd = async (event) => {
    event.preventDefault()
    const responseSendPost = sendPost(title, body);
    responseSendPost.then((data) => {
      setListOfPost(current => [data, ...current]);
      setDoughnutData(repeatCounterElement(listOfPosts))
    })
  }


  useEffect(() => {
    const responseGetPosts = getPosts();
    responseGetPosts.then((data) => {
      setListOfPost(data);
      setDoughnutData(repeatCounterElement(data))
    })

  }, [])

  const getForm = () => {
    return <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Form
        </Typography>
        <Stack spacing={2}>
          <TextField size='small' label="Title" variant="outlined" onChange={(event) => setTitle(event.target.value)} />
          <TextField size='small' label="Body" variant="outlined" onChange={(event) => setBody(event.target.value)} />
          <Button variant="contained" onClick={handleClickAdd} >Add</Button>
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
                {
                  listOfPosts.map((elem) => (
                    <TableRow key={`${elem.id}${elem.title}`}>
                      <TableCell>{elem.userId}</TableCell>
                      <TableCell>{elem.title}</TableCell>
                      <TableCell>{elem.body}</TableCell>
                    </TableRow>
                  ))
                }
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