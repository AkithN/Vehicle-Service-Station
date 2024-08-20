import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
import newImage from '../../assets/Offer1.jpg';
import './Offers.css';

const Offers = () => {
  return (
    <Card className="offer-card" sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={newImage}
          alt="Offer Image"
          className="offer-card-img"
          sx={{ minWidth: '100%', minHeight: 450 }}
        />
        <hr />
        <CardContent className="offer-card-content">
          <Typography variant="body2" color="text.secondary" >
            #Offer expires 12/31/2024
          </Typography>
        </CardContent>
        <hr />
      </CardActionArea>
      <CardActions className="offer-card-actions">
        <DiscountIcon />
        <Button size="small" color="primary">
          Explore
        </Button>
      </CardActions>
    </Card>
  );
}

export default Offers;
