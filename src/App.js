
import { useState, useEffect } from 'react';
import {
  Stack,
} from '@mui/material';
import { Chart, ArcElement } from 'chart.js'
import Form from './components/Form';
import DataTable from './components/DataTable';
import CardChart from './components/CardChart';
import getPosts from './services/getPosts';
import usePostCountByUser from './hooks/usePostCountByUser';
import './App.css';

Chart.register(ArcElement);

function App() {

  const [doughnutData, setDoughnutData] = useState()
  const [data, setData] = useState([]);

  const handleAddData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  const countByUserId = usePostCountByUser(data);
  
  useEffect(() => {
    const fetchData = async () => {
      const postsFromAPI = await getPosts();
      const combinedPosts = [...data, ...postsFromAPI];
      setData(combinedPosts);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const doughnutData = Object.values(countByUserId);
    setDoughnutData(doughnutData);
  }, [countByUserId]);


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
      <CardChart doughnutData={doughnutData} />
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