import React from 'react';
import Grid from '@mui/material/Grid';
import MediaCard from '../vehicleOwnerProfile/MediaCard';
import Box from '@mui/material/Box';
import './Garages.css';

const Garages = () => {
    return (
        <div className="garages-background">
            <h1 className="garages-title">Top Garages</h1>
            <Box sx={{ flexGrow: 1, paddingBottom: 5, paddingLeft: 5, paddingRight: 5 }}>
                <Grid 
                    container 
                    spacing={4} 
                    justifyContent="flex-start" 
                    direction="row"
                    wrap="wrap"
                    sx={{ justifyContent: 'center' }}
                >
                    <MediaCard />
                </Grid>
            </Box>
        </div>
    );
}

export default Garages;
