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

const ManageNews = () => {
  const [news, setNews] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/news');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
      setNews([]);
      setSnackbarMessage('Failed to fetch news');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleDelete = async (newsId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/news/${newsId}`);
      if (response.status === 200) {
        setSnackbarMessage('News deleted successfully');
        setSnackbarSeverity('success');
        fetchNews();
      } else {
        setSnackbarMessage('Failed to delete news');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      console.error('Error deleting news:', error);
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
            Manage News
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/admin/add-news"
            sx={{ mb: 2 }}
          >
            Add News
          </Button>
          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>News ID</TableCell>
                  <TableCell>Topic</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {news.length > 0 ? (
                  news.map((item) => (
                    <TableRow key={item.newsId}>
                      <TableCell>{item.newsId}</TableCell>
                      <TableCell>{item.topic}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>
                        {item.image ? (
                          <img
                            src={`http://localhost:5000${item.image}`}
                            alt={item.topic}
                            style={{ width: '100px' }}
                          />
                        ) : (
                          'No Image'
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleDelete(item.newsId)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      No news available
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

export default ManageNews;
