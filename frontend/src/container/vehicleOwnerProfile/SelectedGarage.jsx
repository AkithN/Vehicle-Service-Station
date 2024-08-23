import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from '../../assets/garage.jpg';
import './SelectedGarage.css';

const SelectedGarage = () => {
  return (
    <div className="selected-garage-container">
      <Card className="selected-garage-card">
        <CardMedia
          className="selected-garage-image"
          image={image}
          title="Auto Miraj"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="selected-garage-title">
            Auto Miraj
          </Typography>
          <Typography variant="body2" color="text.secondary" className="selected-garage-description">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="text.secondary" className="selected-garage-location">
            Matara
          </Typography>
          <Typography variant="body2" color="text.secondary" className="selected-garage-contact">
            +94(767628600)
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default SelectedGarage;
