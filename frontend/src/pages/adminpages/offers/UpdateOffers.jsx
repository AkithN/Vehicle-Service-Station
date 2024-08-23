import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Snackbar,
  Alert,
  Grid,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: { main: '#1a237e' },
    secondary: { main: '#ff7043' },
    error: { main: '#d32f2f' },
    background: { default: '#cbb9b9', paper: '#ffffff' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: { fontWeight: 'bold', color: '#333', marginBottom: '1rem' },
    button: { textTransform: 'none' },
  },
});

const UpdateOffer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { offer } = location.state || { offer: {} };

  const [offerId] = useState(offer.offerId || '');
  const [offerName, setOfferName] = useState(offer.offerName || '');
  const [offerDescription, setOfferDescription] = useState(offer.offerDescription || '');
  const [expiredate, setExpiredate] = useState(offer.expiredate || '');
  const [image, setImage] = useState(null); // State for new image
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('offerName', offerName);
    formData.append('offerDescription', offerDescription);
    formData.append('expiredate', expiredate);
    if (image) formData.append('image', image); // Append image if it exists

    try {
      const response = await axios.put(`http://localhost:5000/api/offers/${offerId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status === 200) {
        setSnackbarMessage('Offer updated successfully!');
        setSnackbarSeverity('success');
        navigate('/admin/manage-offers');
      }
    } catch (error) {
      console.error('Error updating offer:', error);
      setSnackbarMessage('Error updating offer!');
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
            <Typography variant="h2" align="center" gutterBottom>
              Update Offer
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Offer Name"
                  variant="outlined"
                  value={offerName}
                  onChange={(e) => setOfferName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Offer Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={offerDescription}
                  onChange={(e) => setOfferDescription(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Expire Date"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={expiredate}
                  onChange={(e) => setExpiredate(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                >
                  Upload New Image
                  <input
                    type="file"
                    hidden
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*" // Restrict to image files
                  />
                </Button>
              </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button variant="contained" color="primary" type="submit">
                Update Offer
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate('/garageowner')}
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

export default UpdateOffer;

