import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import { Typography } from 'src/styles/typography';

export const Header = styled(AppBar)`
  && {
    background-color: ${({ theme }) => theme.colors.salmon};
  }
`;

export const LogoText = styled(Typography)`
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
