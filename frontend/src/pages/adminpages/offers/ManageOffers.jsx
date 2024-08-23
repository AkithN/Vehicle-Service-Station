import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Container,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#ff7043',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
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

const ManageOffers = () => {
  const [offers, setOffers] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/offers');
      setOffers(response.data);
    } catch (error) {
      console.error('Error fetching offers:', error);
      setSnackbarMessage('Error fetching offers!');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const deleteOffer = async (offerId) => {
    try {
      await axios.delete(`http://localhost:5000/api/offers/${offerId}`);
      setOffers(offers.filter((offer) => offer.offerId !== offerId));
      setSnackbarMessage('Offer deleted successfully!');
      setSnackbarSeverity('success');
    } catch (error) {
      console.error('Error deleting offer:', error);
      setSnackbarMessage('Error deleting offer!');
      setSnackbarSeverity('error');
    } finally {
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
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
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Typography variant="h2" align="center" gutterBottom>
            Manage Offers
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <Link to="/admin/add-offers" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                New Offer
              </Button>
            </Link>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="offers table">
              <TableHead>
                <TableRow>
                  <TableCell>Offer ID</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Offer Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Expiry Date</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {offers.map((offer) => (
                  <TableRow
                    key={offer.offerId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{offer.offerId}</TableCell>
                    <TableCell>
                      {offer.imageName && (
                        <img
                          src={`http://localhost:5000/uploads/${offer.imageName}`}
                          alt={offer.offerName}
                          style={{ width: '100px', height: 'auto' }}
                        />
                      )}
                    </TableCell>
                    <TableCell>{offer.offerName}</TableCell>
                    <TableCell>{offer.offerDescription}</TableCell>
                    <TableCell>{formatDate(offer.expiredate)}</TableCell>
                    <TableCell>
                      <Link
                        to={`/admin/update-offers`}
                        state={{ offer }}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button variant="outlined" color="primary" size="small" sx={{ mr: 1 }}>
                          Update
                        </Button>
                      </Link>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => deleteOffer(offer.offerId)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => window.print()}
            >
              Print
            </Button>
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

export default ManageOffers;
