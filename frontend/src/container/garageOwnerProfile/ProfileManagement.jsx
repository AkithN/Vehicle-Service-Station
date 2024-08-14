import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

const ProfileManagement = () => {
  const profileData = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Administrator",
    avatarUrl: "https://via.placeholder.com/150",
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar src={profileData.avatarUrl} alt={profileData.name} sx={{ width: 56, height: 56 }} />
              </Grid>
              <Grid item>
                <Typography variant="h5">{profileData.name}</Typography>
                <Typography variant="body2" color="textSecondary">{profileData.email}</Typography>
                <Typography variant="body2" color="textSecondary">{profileData.role}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfileManagement;
