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
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../../components/admin_navbar/AdminNavbar';

const theme = createTheme({
  palette: {
    primary: { main: '#1a237e' },
    secondary: { main: '#ff7043' },
    error: { main: '#d32f2f' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: { fontWeight: 'bold', color: '#333', marginBottom: '1rem' },
    button: { textTransform: 'none' },
  },
});

const AddOffers = () => {
  const [offerName, setOfferName] = useState('');
  const [offerDescription, setOfferDescription] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [image, setImage] = useState(null); // State for image
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('offerName', offerName);
    formData.append('offerDescription', offerDescription);
    formData.append('expiredate', expireDate);
    if (image) formData.append('image', image); // Append image if it exists

    try {
      const response = await fetch('http://localhost:5000/api/offers', {
        method: 'POST',
        body: formData, // Send FormData object
      });

      if (response.ok) {
        setSnackbarMessage('Offer added successfully');
        setSnackbarSeverity('success');
        setOfferName('');
        setOfferDescription('');
        setExpireDate('');
        setImage(null);
        navigate('/admin/manage-offers'); // Redirect to ManageOffers page
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

  const handleCancel = () => {
    navigate(-1);
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
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              fullWidth
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              margin="normal"
              inputProps={{ accept: 'image/*' }}
              helperText="Upload an image"
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
