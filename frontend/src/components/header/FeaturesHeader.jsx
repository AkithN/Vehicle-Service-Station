import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './FeaturesHeader.css';

const FeaturesHeader = () => {
    return (
        <div className='features-header-container'>
            <Card className="features-card">
                <CardContent>
                    <Typography variant="h5" component="div" className="features-card-title">
                        <h2>EXPLORE OUR VEHICLE FEATURES</h2>
                    </Typography>
                    <Typography variant="body2" className="features-card-content">
                        <p>Discover the advanced features that make our vehicles stand out. From cutting-edge technology to superior comfort, our cars are designed to enhance your driving experience. Enjoy features like state-of-the-art infotainment systems, advanced safety measures, and luxurious interiors. Our vehicles are equipped with the latest innovations to ensure you drive with confidence and style. Visit our showroom to experience these features firsthand and find the perfect car that meets your needs.</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default FeaturesHeader;
