import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import './GuestPackages.css';

const GuestPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch package details from backend
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/packages');
        if (response.ok) {
          const data = await response.json();
          setPackages(data);
        } else {
          console.error('Failed to fetch packages');
        }
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <Container className="Guest-Packages-container">
      <Typography variant="h2" className="Guest-Packages-heading" gutterBottom>
        Available Packages
      </Typography>
      <Grid container spacing={2}>
        {packages.map((pkg) => (
          <Grid item xs={12} sm={6} md={4} key={pkg.packageId}>
            <Card className="Guest-Packages-card" sx={{ maxWidth: 345 }}>
              {pkg.packageImage && (
                <CardMedia
                  component="img"
                  className="Guest-Packages-card-media"
                  image={`http://localhost:5000${pkg.packageImage}`}  // Corrected line
                  alt={pkg.packageName}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="Guest-Packages-card-title">
                  {pkg.packageName}
                </Typography>
                <Typography variant="body2" className="Guest-Packages-card-description">
                  {pkg.packageDescription}
                </Typography>
                <Typography variant="h6" component="div" className="Guest-Packages-card-price">
                  Rs.{pkg.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GuestPackages;
