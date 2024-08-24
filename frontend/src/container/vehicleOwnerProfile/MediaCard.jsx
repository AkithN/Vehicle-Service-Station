import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';

export default function MediaCard() {
  const [garages, setGarages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGarages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/garages');
        setGarages(response.data);
      } catch (error) {
        console.error('Error fetching garages:', error);
      }
    };

    fetchGarages();
  }, []);

  const handleViewGarageClick = (garage) => {
    localStorage.setItem('selectedGarage', JSON.stringify(garage));
    navigate(`/selectedgarage`);
  };

  return (
    <>
      {garages.map((garage) => (
        <Grid item key={garage.garageId} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ width: 350, height: 700, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              sx={{ minHeight: 300 }}
              image={`http://localhost:5000${garage.image1}` || '/default-image.jpg'}
              title={garage.garageName}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                {garage.garageName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', marginBottom: 1 }}>
                {garage.garageDescription}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', marginBottom: 1 }}>
                {garage.district}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                {garage.mobileNum}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="medium" onClick={() => handleViewGarageClick(garage)}>View Garage</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}
