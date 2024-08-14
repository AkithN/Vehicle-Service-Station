import React from 'react';
import { Container, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';

const data = [
  { month: 'January', revenue: '$10,000', expenses: '$6,000', profit: '$4,000' },
  { month: 'February', revenue: '$12,000', expenses: '$7,500', profit: '$4,500' },
  { month: 'March', revenue: '$14,500', expenses: '$8,000', profit: '$6,500' },
];

const MonthlyReport = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                Monthly Financial Report
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                A summary of revenues, expenses, and profits for each month.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <TableContainer component={Paper} elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Month</TableCell>
                  <TableCell align="right">Revenue</TableCell>
                  <TableCell align="right">Expenses</TableCell>
                  <TableCell align="right">Profit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.month}</TableCell>
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

export default MonthlyReport;
