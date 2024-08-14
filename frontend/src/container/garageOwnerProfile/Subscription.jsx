import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';

const subscriptionPlans = [
  {
    id: 1,
    title: 'Basic Plan',
    price: '$9.99/mo',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: 2,
    title: 'Standard Plan',
    price: '$19.99/mo',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    id: 3,
    title: 'Premium Plan',
    price: '$29.99/mo',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
];

const Subscription = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Choose Your Plan
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {subscriptionPlans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom align="center">
                  {plan.title}
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary">
                  {plan.price}
                </Typography>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <Typography variant="body2">{feature}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Box sx={{ marginBottom: 2 }}>
                <Button variant="contained" color="primary">
                  Choose Plan
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Subscription;
