import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Container,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';
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
      default: '#cbb9b9', // Light Gray for the page background
      paper: '#ffffff', // White for form card background
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

const UpdateRoles = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || { role: {} };

  const [roleId, setRoleId] = useState(role.roleId || '');
  const [roleName, setRoleName] = useState(role.roleName || '');
  const [status, setStatus] = useState(role.status || '');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRole = { roleName, status };

    try {
      const response = await fetch(`http://localhost:5000/api/roles/${roleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRole),
      });

      if (response.ok) {
        setSnackbarMessage('Role updated successfully!');
        setSnackbarSeverity('success');
        navigate('/admin/manage-roles');
      } else {
        setSnackbarMessage('Error updating role!');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      console.error('Error updating role:', error);
      setSnackbarMessage('Error updating role!');
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
              Update Role
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Role ID"
                  variant="outlined"
                  value={roleId}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Role Name"
                  variant="outlined"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth required>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    label="Status"
                  >
                    <MenuItem value="">
                      <em>Select Status</em>
                    </MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ py: 1.5, mt: 2 }}
                >
                  Update Role
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

export default UpdateRoles;
