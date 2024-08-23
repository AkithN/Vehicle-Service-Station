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

const AddPackages = () => {
  const [packageName, setPackageName] = useState('');
  const [packageDescription, setPackageDescription] = useState('');
  const [price, setPrice] = useState('');
  const [packageImage, setPackageImage] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setPackageImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('packageName', packageName);
    formData.append('packageDescription', packageDescription);
    formData.append('price', price);
    if (packageImage) {
      formData.append('packageImage', packageImage);
    }

    try {
      const response = await fetch('http://localhost:5000/api/packages', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSnackbarMessage('Package added successfully');
        setSnackbarSeverity('success');
        setPackageName('');
        setPackageDescription('');
        setPrice('');
        setPackageImage(null);
        navigate('/admin/manage-packages'); // Redirect to the packages list
      } else {
        const errorData = await response.json();
        setSnackbarMessage(errorData.message || 'Failed to add package');
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
    navigate('/admin/manage-packages'); // Redirect to the packages list
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
            Add New Package
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Package Name"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Package Description"
              value={packageDescription}
              onChange={(e) => setPackageDescription(e.target.value)}
              margin="normal"
              multiline
              rows={4}
              required
            />
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              type="file"
              onChange={handleImageChange}
              margin="normal"
              inputProps={{ accept: 'image/*' }}
            />
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button variant="contained" color="primary" type="submit">
                Add Package
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ ml: 2 }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Container>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
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

export default AddPackages;
