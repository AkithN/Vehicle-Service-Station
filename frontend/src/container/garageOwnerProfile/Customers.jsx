import React from 'react';
import { Container, Grid, Paper, Typography, Avatar, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const dummyCustomers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', avatar: 'https://robohash.org/michaeljohnson' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', avatar: 'https://robohash.org/janesmith' },
  { id: 3, name: 'Robert Johnson', email: 'robert.johnson@example.com', avatar: 'https://robohash.org/emilybrown' },
  { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', avatar: 'https://robohash.org/johndoe' },
  { id: 5, name: 'Peter More', email: 'peter.more@example.com', avatar: 'https://robohash.org/alexmartin' },
  { id: 6, name: 'Sarah Lee', email: 'sarah.lee@example.com', avatar: 'https://robohash.org/sarahlee' },
];

const Customers = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {dummyCustomers.map((customer) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={customer.id}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Avatar
                alt={customer.name}
                src={customer.avatar}
                sx={{ width: 100, height: 100, margin: '20px auto 18px' }}
              />
              <Typography variant="h6">{customer.name}</Typography>
              <Typography variant="body2" color="textSecondary">{customer.email}</Typography>
              <div>
                <IconButton color="secondary" aria-label="delete">
                  <Delete />
                </IconButton>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Customers;
