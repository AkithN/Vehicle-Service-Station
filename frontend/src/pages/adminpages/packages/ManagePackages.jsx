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
import AdminNavbar from '../../../components/admin_navbar/AdminNavbar';
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

const ManagePackages = () => {
  const [packages, setPackages] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/packages');
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
      setSnackbarMessage('Error fetching packages!');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const deletePackage = async (packageId) => {
    try {
      await axios.delete(`http://localhost:5000/api/packages/${packageId}`);
      setPackages(packages.filter((pkg) => pkg.packageId !== packageId));
      setSnackbarMessage('Package deleted successfully!');
      setSnackbarSeverity('success');
    } catch (error) {
      console.error('Error deleting package:', error);
      setSnackbarMessage('Error deleting package!');
      setSnackbarSeverity('error');
    } finally {
      setOpenSnackbar(true);
    }
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
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Typography variant="h2" align="center" gutterBottom>
            Manage Packages
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <Link to="/admin/add-packages" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                New Package
              </Button>
            </Link>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="packages table">
              <TableHead>
                <TableRow>
                  <TableCell>Package ID</TableCell>
                  <TableCell>Package Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {packages.map((pkg) => (
                  <TableRow
                    key={pkg.packageId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{pkg.packageId}</TableCell>
                    <TableCell>{pkg.packageName}</TableCell>
                    <TableCell>{pkg.packageDescription}</TableCell>
                    <TableCell>{pkg.price}</TableCell>
                    <TableCell>
                      <Link
                        to={`/admin/update-packages`}
                        state={{ pkg }}
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
                        onClick={() => deletePackage(pkg.packageId)}
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

export default ManagePackages;
