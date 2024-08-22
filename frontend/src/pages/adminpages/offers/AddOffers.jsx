import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AdminNavbar from '../../../components/admin_navbar/AdminNavbar';

// Custom theme
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
      default: '#f5f5f5', // Light Gray for the page background
      paper: '#ffffff', // White for paper components
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1rem',
    },
    button: {
      textTransform: 'none',
    },
  },
});

const AddOffers = () => {
  const [offerName, setOfferName] = useState('');
  const [offerDescription, setOfferDescription] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOffer = { offerName, offerDescription, expiredate: expireDate };

    try {
      const response = await fetch('http://localhost:5000/api/offers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOffer),
      });

      if (response.ok) {
        setSnackbarMessage('Offer added successfully');
        setSnackbarSeverity('success');
        setOfferName('');
        setOfferDescription('');
        setExpireDate('');
      } else {
        setSnackbarMessage('Failed to add offer');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSnackbarMessage('An error occurred');
      setSnackbarSeverity('error');
    } finally {
      setOpenSnackbar(true);
    }
  };

  // Handle cancel button click
  const handleCancel = () => {
    navigate(-1); // Navigate to the previous page
  };

  // Handle snackbar close
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
          flexDirection: 'column',
        }}
      >
        <AdminNavbar />
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Typography variant="h2" align="center">
            Add New Offer
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Offer Name"
              value={offerName}
              onChange={(e) => setOfferName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Offer Description"
              value={offerDescription}
              onChange={(e) => setOfferDescription(e.target.value)}
              margin="normal"
              multiline
              rows={4}
              required
            />
            <TextField
              fullWidth
              label="Expire Date"
              type="date"
              value={expireDate}
              onChange={(e) => setExpireDate(e.target.value)}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button variant="contained" color="primary" type="submit">
                Add Offer
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancel}
                sx={{ ml: 2 }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Container>
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
      </Box>
    </ThemeProvider>
  );
};

export default AddOffers;
