import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import logo from '../../assets/logo.png';
import './VehicleOwnerNavbar.css';

function VehicleOwner() {


  return (
    <Box className="vehicle-owner-navbar-container">
      <AppBar sx={{ backgroundColor: '#001529' }} className="vehicle-owner-navbar">
        <Container maxWidth="lg">
          <Toolbar className="vehicle-owner-toolbar">
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="vehicle-owner-logo-container">
              <Link to="/">
                <img src={logo} alt="logo" className="vehicle-owner-logo" />
              </Link>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="vehicle-owner-menu">
              <MenuItem component={Link} to="/vehicleowner">
                  <Typography className="vehicle-owner-menu-item">Home</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/vehicleoffers">
                  <Typography className="vehicle-owner-menu-item">Offers</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/experts">
                  <Typography className="vehicle-owner-menu-item">Experts</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/features">
                  <Typography className="vehicle-owner-menu-item">Features</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/dealer">
                  <Typography className="vehicle-owner-menu-item">Find A Dealer</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/contactus">
                  <Typography className="vehicle-owner-menu-item">Contact Us</Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box className="vehicle-owner-search">
              <SearchIcon className="search-icon" />
              <InputBase
                placeholder="Search…"
                classes={{ root: 'search-input-root', input: 'search-input' }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default VehicleOwner;
