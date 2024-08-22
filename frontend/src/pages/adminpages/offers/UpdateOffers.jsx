import React, { useState, useEffect } from 'react';
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

// Custom theme
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
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedOffer = { offerName, offerDescription, expiredate };

    try {
      const response = await axios.put(`http://localhost:5000/api/offers/${offerId}`, updatedOffer);
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
                  label="Description"
                  variant="outlined"
                  value={offerDescription}
                  onChange={(e) => setOfferDescription(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Expiry Date"
                  variant="outlined"
                  type="date"
                  value={expiredate}
                  onChange={(e) => setExpiredate(e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
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
                  Update Offer
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => navigate(-1)}
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Back
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

export default UpdateOffer;
