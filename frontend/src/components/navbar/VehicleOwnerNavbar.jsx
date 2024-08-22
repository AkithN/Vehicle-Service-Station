import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import LogoutIcon from '@mui/icons-material/Logout';

import logo from '../../assets/logo.png';
import './VehicleOwnerNavbar.css';

function VehicleOwner() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Box className="vehicle-owner-navbar-container">
      <AppBar sx={{ backgroundColor: '#001529' }} className="vehicle-owner-navbar">
        <Container maxWidth="lg">
          <Toolbar className="vehicle-owner-toolbar">
            {/* Logo */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="vehicle-owner-logo-container">
              <Link to="/">
                <img src={logo} alt="logo" className="vehicle-owner-logo" />
              </Link>
            </Box>

            {/* Mobile Menu */}
            <Hidden mdUp>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  style: {
                    maxHeight: 48 * 6.5,
                    minWidth: '30ch',
                    backgroundColor: '#001529',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                }}
              >
                <MenuItem component={Link} to="/vehicleowner" onClick={handleMenuClose}>
                  <Typography className="vehicle-owner-menu-item">Home</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/vehicleoffers" onClick={handleMenuClose}>
                  <Typography className="vehicle-owner-menu-item">Offers</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/experts" onClick={handleMenuClose}>
                  <Typography className="vehicle-owner-menu-item">Experts</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/features" onClick={handleMenuClose}>
                  <Typography className="vehicle-owner-menu-item">Features</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/dealer" onClick={handleMenuClose}>
                  <Typography className="vehicle-owner-menu-item">Find A Dealer</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/contactus" onClick={handleMenuClose}>
                  <Typography className="vehicle-owner-menu-item">Contact Us</Typography>
                </MenuItem>
              </Menu>
            </Hidden>

            {/* Desktop Menu */}
            <Hidden mdDown>
              <Box className="vehicle-owner-menu">
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
            </Hidden>
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon className="logout-icon" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default VehicleOwner;
