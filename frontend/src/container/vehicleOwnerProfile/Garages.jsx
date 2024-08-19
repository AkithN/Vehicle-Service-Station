import React from 'react'
import Grid from '@mui/material/Grid';
import MediaCard from '../vehicleOwnerProfile/MediaCard';
import Box from '@mui/material/Box';

const Garages = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, mt: 1, paddingBottom: 5, paddingTop: 2, margin: 10 }}>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <MediaCard />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Garages