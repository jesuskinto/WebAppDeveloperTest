import React from "react";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
  TableHead,
  TableRow,
  Paper,
  CardContent,
} from "@mui/material";

const AppTable = ({ posts }) => {
  const ordererPosts = JSON.parse(JSON.stringify(posts)).sort(
    (postA, postB) => {
      return postB.id - postA.id;
    }
  );
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
              {ordererPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.userId}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export const MemoizedAppTable = React.memo(AppTable);
