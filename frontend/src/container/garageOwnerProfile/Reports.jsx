import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, Button, Box
} from '@mui/material';

const dummyData = [
  { id: 1, name: 'John Doe', report: 'Q1 Sales', date: '2024-01-01', status: 'Completed' },
  { id: 2, name: 'Jane Smith', report: 'Q1 Marketing', date: '2024-01-15', status: 'In Progress' },
  { id: 3, name: 'Robert Brown', report: 'Q1 Operations', date: '2024-01-30', status: 'Pending' },
  { id: 4, name: 'Emily White', report: 'Q1 Development', date: '2024-02-05', status: 'Completed' },
];

const Reports = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Reports Overview
      </Typography>
      
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Report</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.report}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">
                  <Typography
                    color={
                      row.status === 'Completed' ? 'green' :
                      row.status === 'In Progress' ? 'orange' : 'red'
                    }
                  >
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="primary" size="small">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Reports;
