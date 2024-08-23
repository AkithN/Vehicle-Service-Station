import React from 'react';
import Grid from '@mui/material/Grid';
import Offers from '../vehicleOwnerProfile/Offers';
import Box from '@mui/material/Box';
import './TopOffers.css';

const TopOffers = () => {
    return (
        <div className="offers-background">
            <h1 className="offers-title">Top Offers</h1>
            <Box sx={{ flexGrow: 1, paddingBottom: 3, marginLeft: 3, marginRight: 3}}>
                <Grid container spacing={2} justifyContent="center" >
                    {[...Array(3)].map((_, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Offers />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default TopOffers;
