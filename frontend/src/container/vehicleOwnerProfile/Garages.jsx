import React from 'react';
import Grid from '@mui/material/Grid';
import MediaCard from '../vehicleOwnerProfile/MediaCard';
import Box from '@mui/material/Box';
import './Garages.css';

const Garages = () => {
    return (
        <div className="garages-background">
            <h1 className="garages-title">Top Garages</h1>
            <Box sx={{ flexGrow: 1, paddingBottom: 5, paddingLeft: 5, paddingRight: 2 }}>
                <Grid container spacing={4} justifyContent="center">
                    {[...Array(1)].map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <MediaCard />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default Garages;
