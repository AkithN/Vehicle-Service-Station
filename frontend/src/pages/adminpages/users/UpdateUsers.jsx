import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom theme with professional colors and typography
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Deep Blue
    },
    secondary: {
      main: '#ff7043', // Deep Orange
    },
    error: {
      main: '#d32f2f', // Red
    },
    background: {
      default: '#cbb9b9', // Light Gray for the page background
      paper: '#ffffff', // White for form card background
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1rem',
    },
    button: {
      textTransform: 'none',
    },
  },
});

const UpdateUsers = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user } = state || {};

  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    userType: user?.userType || '',
    email: user?.email || '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    if (!user) {
      navigate('/admin/manage-users');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbarMessage('User updated successfully!');
        setSnackbarSeverity('success');
        navigate('/admin/manage-users');
      } else {
        setSnackbarMessage('Error updating user');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setSnackbarMessage('Error updating user');
      setSnackbarSeverity('error');
    } finally {
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.default',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 4,
              p: 3,
              boxShadow: 3,
              borderRadius: 2,
              bgcolor: 'background.paper',
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Update User
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="User Type"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ py: 1.5, mt: 2 }}
                >
                  Update User
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => navigate('/admin/manage-users')}
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity={snackbarSeverity}
              sx={{ width: '100%' }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default UpdateUsers;
