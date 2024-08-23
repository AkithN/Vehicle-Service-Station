import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './SelectedGarage.css';

const SelectedGarage = () => {
  const [garage, setGarage] = useState(null);

  useEffect(() => {
    // Retrieve garage data from local storage
    const storedGarage = localStorage.getItem('selectedGarage');
    
    if (storedGarage) {
      setGarage(JSON.parse(storedGarage));
    }
  }, []);

  // Return null or a loading indicator if the garage data is not available yet
  if (!garage) {
    return <div>Loading...</div>;
  }

  return (
    <div className="selected-garage-container">
      <Card className="selected-garage-card">
        <CardMedia
          className="selected-garage-image"
          image={`http://localhost:5000${garage.image1}` || '/default-image.jpg'}
          title={garage.garageName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="selected-garage-title">
            {garage.garageName}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="selected-garage-description">
            {garage.garageDescription}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="selected-garage-location">
            {garage.district}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="selected-garage-contact">
            {garage.mobileNum}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default SelectedGarage;
