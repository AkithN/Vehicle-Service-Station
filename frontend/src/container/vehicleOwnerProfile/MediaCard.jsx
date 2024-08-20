import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../assets/garage.jpg';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image} 
        title="Auto Miraj"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
          Auto Miraj
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' ,marginBottom: 1}}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' ,marginBottom: 1}}>
          Matara
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
          +94(767628600)
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="medium">View Garage</Button>
      </CardActions>
    </Card>
  );
}
