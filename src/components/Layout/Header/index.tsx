// import Navigation from '../Navigation';
//       <Navigation />

// export default Header;
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useUser } from 'src/context/AuthContext';
import * as S from './Header.styled';
import { Button, ButtonOutlined } from 'src/styles/muiButtons';
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
          <S.LogoText variant="h1" component="p" sx={{ flexGrow: 1 }}>
            AWS Cognito
          </S.LogoText>
          {user && <DropDownHeader />}
          {!user && (
            <>
              <ButtonOutlined onClick={() => router.push(LOGIN)}>Login</ButtonOutlined>
              <Button onClick={() => router.push(SIGNUP)} variant="contained">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </S.Header>
    </Box>
  );
};
export default Header;
