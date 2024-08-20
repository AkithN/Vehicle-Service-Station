import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/avatar.jpg';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import moment from 'moment';

import './garageOwnerProfile.css';

const drawerWidth = 240;

const settings = ['Profile', 'Account', 'Logout'];

const notifications = [
  { id: 1, message: "New customer booked a service.", time: moment().subtract(2, 'hours') },
  { id: 2, message: "Subscription payment is due.", time: moment().subtract(1, 'day') },
  { id: 3, message: "Your monthly report is ready.", time: moment().subtract(3, 'days') },
  { id: 4, message: "New offer created successfully.", time: moment().subtract(5, 'hours') },
  { id: 5, message: "Your monthly report is ready.", time: moment().subtract(1, 'hours') },
  { id: 6, message: "New customer booked a service.", time: moment().subtract(2, 'days') },
  { id: 7, message: "New offer created successfully.", time: moment().subtract(4, 'hours') },
  { id: 8, message: "Subscription payment is due.", time: moment().subtract(6, 'days') },
  { id: 9, message: "Your monthly report is ready.", time: moment().subtract(3, 'hours') },
  { id: 10, message: "New customer booked a service.", time: moment().subtract(2, 'days') },
];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#001529',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export default function GarageOwnerProfile({ children }) {
  const [open, setOpen] = React.useState(false);
  const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleOpenNotificationsMenu = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleCloseNotificationsMenu = () => {
    setAnchorElNotifications(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    switch (setting) {
      case 'Profile':
        navigate('/profilemanagement');
        break;
      case 'Account':
        navigate('/account');
        break;
      case 'Logout':
        navigate('/login');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="absolute" open={open}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}         
          >
            CarCraft
          </Typography>
        
          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={() => handleNavigation('/RegisterForm')} variant="contained">Register Form</Button>
            <Tooltip title="Open notifications">
              <IconButton
                color="inherit"
                onClick={handleOpenNotificationsMenu}
                sx={{ marginRight: '16px' }}
              >
                <Badge badgeContent={notifications.length} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-notifications"
              anchorEl={anchorElNotifications}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNotifications)}
              onClose={handleCloseNotificationsMenu}
            >
              <Paper
                elevation={0}
                sx={{ maxWidth: 320, maxHeight: 200, overflowY: 'auto' }}
              >
                {notifications.map((notification, index) => (
                  <MenuItem
                    key={notification.id}
                    onClick={handleCloseNotificationsMenu}
                    sx={{ display: index < 0 ? 'flex' : 'block' }}
                  >
                    <Typography variant="body2" sx={{ marginRight: '10px' }}>
                      {notification.message}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {moment(notification.time).fromNow()}
                    </Typography>
                  </MenuItem>
                ))}
              </Paper>
            </Menu>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src={avatar} sx={{ width: 30, height: 30 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center" sx={{ color: 'black' }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <ListItemButton onClick={() => handleNavigation('/garageowner')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigation('/garagenotification')}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigation('/garagecustomer')}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigation('/garageoffers')}>
            <ListItemIcon>
              <LocalOfferRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Offers" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigation('/garagereports')}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigation('/garagesubscription')}>
            <ListItemIcon>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText primary="Subscriptions" />
          </ListItemButton>
          <Divider sx={{ my: 1 }} />
          <ListSubheader component="div" inset>
            Saved reports
          </ListSubheader>
          <ListItemButton onClick={() => handleNavigation('/garagemonthlyreport')}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigation('/garagequarterreport')}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigation('/garageyearreport')}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
          </ListItemButton>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          marginTop: '50px',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
