import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';

const dummyOffers = [
  {
    id: 1,
    title: 'Summer Sale - 50% Off',
    description: 'Get 50% off on all summer collections. Limited time offer!',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 2,
    title: 'Buy One Get One Free',
    description: 'Buy one, get one free on selected items. Don’t miss out!',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 3,
    title: 'Free Shipping on Orders Over $50',
    description: 'Enjoy free shipping on all orders over $50. Shop now!',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 4,
    title: 'Exclusive 20% Discount for Members',
    description: 'Members get an exclusive 20% discount on all products.',
    image: 'https://via.placeholder.com/300x150',
  },
];

const Offers = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>ADDITIONAL OFFERS & REBATES</Typography>
      <p>Want even more ways to save? Explore these limited-time rebates and offers on tires and more.</p>
      <Grid container spacing={3}>
        {dummyOffers.map((offer) => (
          <Grid item xs={12} sm={6} md={4} key={offer.id}>
            <Paper elevation={4} sx={{ padding: 2 }}>
              <img src={offer.image} alt={offer.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              <Typography variant="h6" sx={{ marginTop: 2 }}>{offer.title}</Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>{offer.description}</Typography>
              <Button variant="contained" color="primary">Shop Now</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Offers;
