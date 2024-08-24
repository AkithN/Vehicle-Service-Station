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

const AddNews = () => {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('topic', topic);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:5000/api/news', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSnackbarMessage('News added successfully');
        setSnackbarSeverity('success');
        setTopic('');
        setDescription('');
        setImage(null);
        navigate('/admin/manage-news'); // Redirect to the news list
      } else {
        const errorData = await response.json();
        setSnackbarMessage(errorData.message || 'Failed to add news');
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
    navigate('/admin/manage-news'); // Redirect to the news list
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
            Add News
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              multiline
              rows={4}
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
                Add News
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

export default AddNews;