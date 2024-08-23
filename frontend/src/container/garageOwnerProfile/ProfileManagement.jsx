import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Box, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';

const ProfileManagement = () => {
  const profileData = {
    name: localStorage.getItem('fullName') || 'User Name',
    email: localStorage.getItem('email') || 'user@example.com',
    role: JSON.parse(localStorage.getItem('userType')) || 'Role',
    avatarUrl: "https://via.placeholder.com/150", // Placeholder avatar image
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0f7fa 10%, #80deea 100%)',
        padding: '20px',
      }}
    >
      <Grid item xs={12} md={4}>
        <Card
          style={{
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#ffffff',
            padding: '20px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
          }}
        >
          <CardContent>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item>
                <Avatar
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  sx={{
                    width: 100,
                    height: 100,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    transition: 'box-shadow 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: '700',
                    color: '#2c3e50',
                    marginBottom: '10px',
                    textTransform: 'capitalize',
                    letterSpacing: '0.5px',
                  }}
                >
                  {profileData.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{
                    color: '#7f8c8d',
                    marginBottom: '20px',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    lineHeight: '1.5',
                  }}
                >
                 
                </Typography>
              </Grid>
              <Grid item style={{ width: '100%' }}>
                <Divider style={{ margin: '20px 0', backgroundColor: '#ecf0f1' }} />
              </Grid>
              <Grid item container spacing={1} alignItems="center" style={{ marginBottom: '10px' }}>
                <Grid item>
                  <EmailIcon style={{ color: '#3498db', fontSize: '20px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ color: '#34495e', fontWeight: '500' }}>
                    {profileData.email}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={1} alignItems="center" style={{ marginBottom: '10px' }}>
                <Grid item>
                  <WorkIcon style={{ color: '#e74c3c', fontSize: '20px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ color: '#34495e', fontWeight: '500' }}>
                    {profileData.role}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={1} alignItems="center">
               
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfileManagement;
