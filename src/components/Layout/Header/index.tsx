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
import IconButton from '@mui/material/IconButton';
import { ButtonContained, ButtonOutlined } from 'src/styles/muiButtons';
import { useRouter } from 'next/router';
import constants from 'src/constants';
import DropDownHeader from '../DropDownHeader';
const { LOGIN, SIGNUP } = constants.routes;

const Header = () => {
  const { user } = useUser();
  const router = useRouter();

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
          {user && <DropDownHeader />}
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
