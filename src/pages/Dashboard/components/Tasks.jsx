import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const data = [
  {
    id: 1,
    title: 'Learn React',
    author: 'Thanh Long',
    progress: 'High',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Learn React',
    author: 'Thanh Long',
    progress: 'Medium',
    status: 'Inprocess',
  },
  {
    id: 3,
    title: 'Learn React',
    author: 'Thanh Long',
    progress: 'Low',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Learn React',
    author: 'Thanh Long',
    progress: 'High',
    status: 'Inprocess',
  },
  {
    id: 5,
    title: 'Learn React',
    author: 'Thanh Long',
    progress: 'Low',
    status: 'New',
  },
  {
    id: 6,
    title: 'Learn React',
    author: 'Thanh Long',
    progress: 'Medium',
    status: 'Inprocess',
  },
  {
    id: 7,
    title: 'Learn React',
    author: 'Thanh Long',
    progress: 'Low',
    status: 'New',
  },
];

export default function Tasks() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Author</TableCell>
            <TableCell align="left">Progress</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((task) => (
            <TableRow
              key={task.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{task.title}</TableCell>
              <TableCell align="left">{task.author}</TableCell>
              <TableCell align="left">
                <Button
                  variant="contained"
                  color={
                    task.progress === 'High'
                      ? 'error'
                      : task.progress === 'Medium'
                      ? 'success'
                      : 'secondary'
                  }
                >
                  <Typography variant="button" display="block">
                    {task.progress}
                  </Typography>
                </Button>
              </TableCell>
              <TableCell align="left">
                <Typography
                  variant="body2"
                  color={
                    task.status === 'Inprocess'
                      ? 'error'
                      : task.status === 'Completed'
                      ? 'green'
                      : 'secondary'
                  }
                >
                  {task.status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
