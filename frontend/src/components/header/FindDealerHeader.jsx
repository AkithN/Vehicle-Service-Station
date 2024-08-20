import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './FindDealerHeader.css';

const FindDealerHeader = () => {
    return (
        <div className='dealer-header-container'>
            <Card className="dealer-card">
                <CardContent>
                    <Typography variant="h5" component="div" className="dealer-card-title">
                        <h2>FIND A DEALER NEAR YOU</h2>
                    </Typography>
                    <Typography variant="body2" className="dealer-card-content">
                        <p>Discover the nearest CarCraft dealer to take advantage of our top-notch services. Our factory-trained technicians are ready to assist you with oil changes, tire services, and more. Use our dealer locator to find the most convenient location and ensure your vehicle is always running at its best.</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default FindDealerHeader;
