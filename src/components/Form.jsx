import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Stack
} from '@mui/material';

const Form = ({ onAdd }) => {
  const [formData, setFormData] = useState({ userId: 1, title: '', body: '' });

  const handleDataChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleAddClick = () => {
    onAdd(formData);
    setFormData({ userId: 1, title: '', body: '' });
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Form
        </Typography>
        <Stack spacing={2}>
          <TextField 
            size='small' 
            label="Title" 
            variant="outlined"
            name='title'
            value={formData.title}
            onChange={handleDataChange}
          />
          <TextField 
            size='small' 
            label="Body" 
            variant="outlined" 
            name='body'
            value={formData.body}
            onChange={handleDataChange}
          />
          <Button variant="contained" onClick={handleAddClick}>Add</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Form;