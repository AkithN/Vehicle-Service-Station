import React from 'react';
import { Container, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';

const data = [
  { year: '2021', revenue: '$150,000', expenses: '$90,000', profit: '$60,000' },
  { year: '2022', revenue: '$160,000', expenses: '$100,000', profit: '$60,000' },
  { year: '2023', revenue: '$170,000', expenses: '$110,000', profit: '$60,000' },
];

const YearReport = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                Yearly Financial Report
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                A summary of revenues, expenses, and profits for each year.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <TableContainer component={Paper} elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Year</TableCell>
                  <TableCell align="right">Revenue</TableCell>
                  <TableCell align="right">Expenses</TableCell>
                  <TableCell align="right">Profit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.year}</TableCell>
                    <TableCell align="right">{row.revenue}</TableCell>
                    <TableCell align="right">{row.expenses}</TableCell>
                    <TableCell align="right">{row.profit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default YearReport;
