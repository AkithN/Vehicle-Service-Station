import React from 'react';
import Grid from '@mui/material/Grid';
import Offers from './Offers';
import Box from '@mui/material/Box';

const AllOffers = () => {
    return (
        <div className="offers-background">
            <h1 className="offers-title">ADDITIONAL OFFERS & REBATES</h1>
            <Box sx={{ flexGrow: 1, paddingBottom: 5 ,marginLeft: 3, marginRight: 3}}>
                <Grid container spacing={2} justifyContent="center" >
                    {[...Array(1)].map((_, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Offers />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}
export default AllOffers