import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AccountsTable from '@components/company/AccountsTable';

const CollaboratorsManagement: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  // Open the menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  // Navigate to another page
  const handleNavigate = (path: string): void => {
    handleMenuClose();
    void navigate(path);
  };

  return (
    <Box>
      {/* AppBar for Header */}
      <AppBar
        position="static"
        color="default"
        sx={{
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          borderBottom: '1px solid #ddd',
        }}
      >
        <Toolbar>
          {/* Logo/Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Logo
          </Typography>
          {/* Account Avatar */}
          <IconButton onClick={handleMenuOpen}>
            <Avatar
              alt="User Avatar"
              src="https://avatars.githubusercontent.com/u/19550456"
            />
          </IconButton>
          {/* Account Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={() => handleNavigate('/profile')}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('/collaborators')}>
              Collaborators
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('/settings')}>
              Settings
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('/logout')}>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Box
        sx={{
          minHeight: '100vh', // Ensures the container always covers the full viewport height
          backgroundColor: '#f9f9f9', // Set your desired background color
          display: 'flex', // Helps with layout consistency
          flexDirection: 'column', // Ensures content flows top to bottom
        }}
      >
        <AccountsTable />
      </Box>
    </Box>
  );
};

export default CollaboratorsManagement;
