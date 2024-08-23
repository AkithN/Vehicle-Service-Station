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
            setPackages(response.data); // Directly set the response data as packages
        } catch (error) {
            console.error('Error fetching packages:', error);
            setPackages([]); // Set an empty array if there's an error
            setSnackbarMessage('Failed to fetch packages');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleDelete = async (packageId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/packages/${packageId}`);
            if (response.status === 200) {
                setSnackbarMessage('Package deleted successfully');
                setSnackbarSeverity('success');
                fetchPackages(); // Refresh the list after deletion
            } else {
                setSnackbarMessage('Failed to delete package');
                setSnackbarSeverity('error');
            }
        } catch (error) {
            console.error('Error deleting package:', error);
            setSnackbarMessage('An error occurred');
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
                <Container sx={{ mt: 4 }}>
                    <Typography variant="h2" align="center">
                        Manage Packages
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/admin/add-packages"
                        sx={{ mb: 2 }}
                    >
                        Add New Package
                    </Button>
                    <TableContainer component={Paper} sx={{ mt: 4 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Package ID</TableCell>
                                    <TableCell>Package Name</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {packages.length > 0 ? (
                                    packages.map((pkg) => (
                                        <TableRow key={pkg.packageId}>
                                            <TableCell>{pkg.packageId}</TableCell>
                                            <TableCell>{pkg.packageName}</TableCell>
                                            <TableCell>{pkg.packageDescription}</TableCell>
                                            <TableCell>{pkg.price}</TableCell>
                                            <TableCell>
                                                {pkg.packageImage ? (
                                                    <img
                                                        src={`http://localhost:5000${pkg.packageImage}`} // Assuming `packageImage` contains the relative path
                                                        alt={pkg.packageName}
                                                        style={{ width: '100px' }}
                                                    />
                                                ) : (
                                                    'No Image'
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    component={Link}
                                                    to={`/admin/update-packages/${pkg.packageId}`} // Corrected URL
                                                    sx={{ mr: 1 }}
                                                >
                                                    Edit
                                                </Button>

                                                <Button
                                                    variant="contained"
                                                    color="error"
                                                    onClick={() => handleDelete(pkg.packageId)}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">
                                            No packages available
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
