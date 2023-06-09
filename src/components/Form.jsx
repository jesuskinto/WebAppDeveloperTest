import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Stack
} from '@mui/material';

const Form = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
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
  );
};

export default Form;