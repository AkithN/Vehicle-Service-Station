import React from 'react';
import { Container, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';

const data = [
  { quarter: 'Q1', revenue: '$35,000', expenses: '$21,500', profit: '$13,500' },
  { quarter: 'Q2', revenue: '$38,000', expenses: '$23,000', profit: '$15,000' },
  { quarter: 'Q3', revenue: '$40,500', expenses: '$25,500', profit: '$15,000' },
  { quarter: 'Q4', revenue: '$42,000', expenses: '$26,500', profit: '$15,500' },
];

const QuarterReport = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                Quarterly Financial Report
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                A summary of revenues, expenses, and profits for each quarter.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <TableContainer component={Paper} elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Quarter</TableCell>
                  <TableCell align="right">Revenue</TableCell>
                  <TableCell align="right">Expenses</TableCell>
                  <TableCell align="right">Profit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.quarter}</TableCell>
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

export default QuarterReport;
