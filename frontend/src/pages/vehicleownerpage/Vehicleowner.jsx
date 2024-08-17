import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ToggleColorMode from './ToggleColorMode';
import MediaCard from '../../container/vehicleOwnerProfile/MediaCard';
import Grid from '@mui/material/Grid';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

const SearchContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const SearchHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: '1.5rem',
  fontWeight: 600,
}));

const SearchFilters = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const FilterTextField = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  flexGrow: 1,
}));

const FilterSelect = styled('select')(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  flexGrow: 1,
}));

const FilterButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function VehicleOwner({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(10px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={
                  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('features')}
                  sx={{ py: '20px', px: '50px', mx: '50px' }}
                  component={Link} to="/features"
                >
                  <Typography variant="body50" color="text.primary">
                    Features
                  </Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => scrollToSection('experts')}
                  sx={{ py: '50px', px: '50px', mx: '50px' }}
                  component={Link} to="/experts"
                >
                  <Typography variant="body50" color="text.primary">
                    Experts
                  </Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => scrollToSection('aboutus')}
                  sx={{ py: '50px', px: '50px', mx: '50px' }}
                  component={Link} to="/aboutus"
                >
                  <Typography variant="body50" color="text.primary">
                    About Us
                  </Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => scrollToSection('contactus')}
                  sx={{ py: '50px', px: '50px', mx: '50px' }}
                  component={Link} to="/contactus"
                >
                  <Typography variant="body50" color="text.primary" fontWeight={20}>
                    Contact Us
                  </Typography>
                </MenuItem>
              </Box>
            </Box>

            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <Divider />
                  {/* Drawer content */}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 8, padding: 5 }}>
        <SearchContainer>
          <SearchHeader fontSize={50} fontWeight={10}>
            Find A Dealer
          </SearchHeader>
          <SearchFilters>
            <FilterTextField
              placeholder="Garage Name"
              inputProps={{ 'aria-label': 'location' }}
            />
            <FilterSelect>
              <option value="50 miles">50 Miles</option>
              <option value="25 miles">25 Miles</option>
              <option value="100 miles">100 Miles</option>
            </FilterSelect>
            <FilterSelect>
              <option value="">Select Service Type</option>
              <option value="brand1">Brand 1</option>
              <option value="brand2">Brand 2</option>
            </FilterSelect>
            <FilterButton>Find Dealer Near You</FilterButton>
          </SearchFilters>
        </SearchContainer>
      </Container>

      {/* Container for the cards */}
      <Box sx={{ flexGrow: 1, mt: 1, paddingBottom:5, paddingTop:2,  margin: 10 }}>
  <Grid container spacing={8}>
    <Grid item xs={12} sm={6} md={3}>
      <MediaCard />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <MediaCard />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <MediaCard />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <MediaCard />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <MediaCard />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <MediaCard />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <MediaCard />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <MediaCard />
    </Grid>
  </Grid>
</Box>
    </div>
  );
}

VehicleOwner.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default VehicleOwner;
