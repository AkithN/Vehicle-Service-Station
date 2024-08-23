import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

const ProfileManagement = () => {
  const profileData = {
    name: localStorage.getItem('fullName'),
    email: localStorage.getItem('email'),
    role: JSON.parse(localStorage.getItem('userType')), // Assuming role is saved as a string
    avatarUrl: "https://via.placeholder.com/150", // Placeholder avatar image
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #72edf2 10%, #5151e5 100%)',
        padding: '20px',
      }}
    >
      <Grid item xs={12} md={4}>
        <Card
          style={{
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
          }}
        >
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  sx={{
                    width: 80,
                    height: 80,
                    border: '3px solid #5151e5',
                    backgroundColor: '#e0e0e0',
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h5" style={{ fontWeight: 'bold', color: '#333' }}>
                  {profileData.name || 'User Name'}
                </Typography>
                <Typography variant="body2" style={{ color: '#777' }}>
                  {profileData.email || 'user@example.com'}
                </Typography>
                <Typography variant="body2" style={{ color: '#999' }}>
                  {profileData.role || 'Role'}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfileManagement;
