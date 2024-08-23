import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
    // Store the selected garage data in local storage
    localStorage.setItem('selectedGarage', JSON.stringify(garage));
    
    // Navigate to the selected garage page
    navigate(`/selectedgarage`);
  };

  return (
    <>
      {garages.map((garage) => (
        <Card key={garage.garageId} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={`http://localhost:5000${garage.image1}` || '/default-image.jpg'} // Ensure correct URL
            title={garage.garageName}
          />
          <CardContent>
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
      ))}
    </>
  );
}
