import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

export const Header = styled(AppBar)`
  && {
    background-color: ${({ theme }) => theme.colors.salmon};
  }
`;
