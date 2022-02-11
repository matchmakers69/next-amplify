// import Navigation from '../Navigation';
//       <Navigation />

// export default Header;
import * as React from 'react';
import AbcIcon from '@mui/icons-material/Abc';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useUser } from 'src/context/AuthContext';
import * as S from './Header.styled';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ButtonContained, ButtonOutlined } from 'src/styles/muiButtons';
import { useRouter } from 'next/router';
import constants from 'src/constants';
const { LOGIN, SIGNUP } = constants.routes;

const Header = () => {
  const { user } = useUser();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <S.Header position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AbcIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AWS Cognito
          </Typography>
          {user && (
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          {!user && (
            <>
              <ButtonOutlined onClick={() => router.push(LOGIN)}>Login</ButtonOutlined>
              <ButtonContained onClick={() => router.push(SIGNUP)} variant="contained">
                Sign Up
              </ButtonContained>
            </>
          )}
        </Toolbar>
      </S.Header>
    </Box>
  );
};
export default Header;
