import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdminNavbar from '../../../components/admin_navbar/AdminNavbar'; 

// Custom theme with professional colors and typography
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Deep Blue
    },
    secondary: {
      main: '#ff7043', // Deep Orange
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
  },
});

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      console.log('Fetching contacts...');
      const response = await fetch('http://localhost:5000/api/contactus'); // Check path

      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }

      const data = await response.json();
      console.log('Fetched data:', data); // Log fetched data

      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
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
            Manage Contacts
          </Typography>
          {contacts.length === 0 ? (
            <Typography variant="body1" align="center">
              No contacts available.
            </Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="contacts table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Message</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow
                      key={contact.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{contact.id}</TableCell>
                      <TableCell>{contact.user_name}</TableCell>
                      <TableCell>{contact.user_email}</TableCell>
                      <TableCell>{contact.message}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ManageContacts;
