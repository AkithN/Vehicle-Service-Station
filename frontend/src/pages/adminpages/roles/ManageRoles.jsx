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

const ManageRoles = () => {
  const [roles, setRoles] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/roles');
      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  const deleteRole = async (roleId) => {
    try {
      await fetch(`http://localhost:5000/api/roles/${roleId}`, {
        method: 'DELETE',
      });
      setRoles(roles.filter(role => role.roleId !== roleId));
      setSnackbarMessage('Role deleted successfully!');
      setSnackbarSeverity('success');
    } catch (error) {
      console.error('Error deleting role:', error);
      setSnackbarMessage('Error deleting role!');
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
          flexDirection: 'column',
        }}
      >
        <AdminNavbar />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Typography variant="h2" align="center" gutterBottom>
            Manage Roles
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <Link to="/admin/add-roles" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                New Role
              </Button>
            </Link>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="roles table">
              <TableHead>
                <TableRow>
                  <TableCell>Role ID</TableCell>
                  <TableCell>Role Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roles.map((role) => (
                  <TableRow
                    key={role.roleId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{role.roleId}</TableCell>
                    <TableCell>{role.roleName}</TableCell>
                    <TableCell>{role.status}</TableCell>
                    <TableCell>
                      <Link
                        to={`/admin/update-roles`}
                        state={{ role }}
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
                        onClick={() => deleteRole(role.roleId)}
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

export default ManageRoles;
