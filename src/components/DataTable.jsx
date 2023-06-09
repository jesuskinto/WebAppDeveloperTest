import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material';

const DataTable = ({posts}) => {
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
              {posts &&
                posts.map((post, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{post.userId}</TableCell>
                      <TableCell>{post.title}</TableCell>
                      <TableCell>{post.body}</TableCell>
                  </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default DataTable;