import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import constants from 'src/constants';
const { LOGIN, PROFILE } = constants.routes;

const DropDownHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirectUsertoProfile = () => {
    handleClose();
    router.push(PROFILE);
  };

  const handleSignOutUser = async () => {
    await Auth.signOut();
    handleClose();
    router.push(LOGIN);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleRedirectUsertoProfile}>Profile</MenuItem>
        <MenuItem onClick={handleSignOutUser}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
};

export default DropDownHeader;
