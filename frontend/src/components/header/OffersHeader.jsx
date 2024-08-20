import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './OffersHeader.css';

const OffersHeader = () => {
    return (
        <div className='offers-header-container'>
            <Card className="offers-card">
                <CardContent>
                    <Typography variant="h5" component="div" className="offers-card-title">
                        <h2>EXCLUSIVE OFFERS AND DEALS</h2>
                    </Typography>
                    <Typography variant="body2" className="offers-card-content">
                        <p>Take advantage of our exclusive offers to save on a wide range of products and services. Whether you’re looking for discounts on the latest gadgets, fashion, home essentials, or travel packages, our curated deals ensure you get the best value for your money. Enjoy special promotions, limited-time discounts, and seasonal sales that make shopping more affordable and enjoyable. Stay updated with our latest offers to maximize your savings and get the most out of your purchases.</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default OffersHeader;
