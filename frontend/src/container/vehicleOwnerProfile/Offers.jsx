import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
import './Offers.css';

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Fetch offers from backend
    const fetchOffers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/offers');
        if (response.ok) {
          const data = await response.json();
          setOffers(data);
        } else {
          console.error('Failed to fetch offers');
        }
      } catch (error) {
        console.error('Error fetching offers:', error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className="offers-container">
      {offers.map((offer) => (
        <Card className="offer-card" sx={{ maxWidth: 500 }} key={offer.offerId}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={`http://localhost:5000/uploads/${offer.imageName}`}
              alt={offer.offerName}
              className="offer-card-img"
              sx={{ minWidth: '100%', minHeight: 450 }}
            />
            <hr />
            <CardContent className="offer-card-content">
              <Typography variant="body2" color="text.secondary">
                #{offer.offerName} - Expires {offer.expiredate}
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
      ))}
    </div>
  );
};

export default Offers;
