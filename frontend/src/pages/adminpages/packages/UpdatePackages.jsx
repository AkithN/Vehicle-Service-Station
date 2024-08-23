import React, { useState, useEffect } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';
import AdminNavbar from '../../../components/admin_navbar/AdminNavbar';

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

const UpdatePackages = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const packageToUpdate = location.state?.pkg || {};

  const [packageName, setPackageName] = useState(packageToUpdate.packageName || '');
  const [packageDescription, setPackageDescription] = useState(packageToUpdate.packageDescription || '');
  const [price, setPrice] = useState(packageToUpdate.price || '');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    if (!packageToUpdate.packageId) {
      navigate('/admin/manage-packages');
    }
  }, [packageToUpdate.packageId, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    const updatedPackage = {
      packageName,
      packageDescription,
      price,
    };
  
    try {
      const response = await fetch(
        `http://localhost:5000/api/packages/${packageToUpdate.packageId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedPackage),
        }
      );
  
      if (response.ok) {
        setSnackbarMessage('Package updated successfully');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate('/admin/manage-packages'); // Redirect to ManagePackages.jsx
        }, 2000); // Delay to show the snackbar message
      } else {
        setSnackbarMessage('Failed to update package');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setSnackbarMessage('An error occurred');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };
  

  const handleCancel = () => {
    navigate(-1);
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
            Update Package
          </Typography>
          <Box component="form" onSubmit={handleUpdate} sx={{ mt: 3 }}>
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
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button variant="contained" color="primary" type="submit">
                Update Package
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

export default UpdatePackages;
