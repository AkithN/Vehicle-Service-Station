import React from 'react'
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './VehicleOwnerHeader.css';

const VehicleOwnerHeader = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div className='vehicle-owner-header-container'>
            <Card className="vehicle-owner-card">
                <CardContent>
                    <Typography variant="h5" component="div" className="vehicle-owner-card-title">
                        <h2>GET GREAT DEALS ON GREAT SERVICE</h2>
                    </Typography>
                    <Typography variant="body2" className="vehicle-owner-card-content">
                        <p>Check out available CarCraft service coupons to make taking care of your vehicle as easy as possible. With oil change coupons, tire coupons and more, you can take advantage of our factory-trained technicians to make sure your vehicle is running at its best while saving at the same time.</p>
                    </Typography>
                    <Button
                        onClick={() => handleNavigation('/vehicleoffers')}
                        variant="contained"
                        color="primary"
                        className="vehicle-owner-card-button"
                    >
                        Explore Offers
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default VehicleOwnerHeader