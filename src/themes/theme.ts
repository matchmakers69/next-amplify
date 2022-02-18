import baseStyled, { ThemedStyledInterface, DefaultTheme } from 'styled-components';
import { device } from 'src/styles/breakpoints';

export const theme: DefaultTheme = {
  title: 'theme',
  colors: {
    bodyBck: '#f5f7f6',
    bodyText: '#414244',
    footerColor: '#1a1a1a',
    darkGrey: '#191919',
    lightGrey: '#c2cad0',
    lightBrown: '#c2b9b0',
    darkBrown: '#7e685a',
    olive: '#afd275',
    errorRed: '#ce170c',
    white: '#ffffff',
    lightGreyText: 'd8d8d8',
    salmon: '#e7717d',
    transparent: 'transparent',
  },

  fontSizes: {
    xs: '1.4rem',
    sm: '1.6rem',
    md: '2rem',
    large: '3rem',
  },
  fontFamily: {
    primary: 'Poppins',
    secondary: 'Roboto Slab',
  },
  weight: {
    thin: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  typography: {
    h1: {
      fontSize: 2,
      marginBottom: '1.5rem',
      fontFamily: 'Poppins',
      [`@media ${device.mobileM}`]: {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '1.8rem',
      marginBottom: '1.5rem',
      fontFamily: 'Poppins',
      [`@media ${device.mobileM}`]: {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '1.8rem',
      marginBottom: '1.5rem',
      fontFamily: 'Poppins',
      [`@media ${device.mobileM}`]: {
        fontSize: '2.6rem',
      },
    },
    h4: {
      fontSize: '1.6rem',
      marginBottom: '1.5rem',
      fontFamily: 'Poppins',
      [`@media ${device.mobileM}`]: {
        fontSize: '2.2rem',
      },
    },
    h5: {
      fontSize: '1.6rem',
      marginBottom: '1.5rem',
      fontFamily: 'Poppins',
      [`@media ${device.mobileM}`]: {
        fontSize: '2rem',
      },
    },
    h6: {
      fontSize: '1.4rem',
      marginBottom: '1.5rem',
      fontFamily: 'Poppins',
      [`@media ${device.mobileM}`]: {
        fontSize: '1.8rem',
      },
    },
    p: {
      fontSize: '1.4rem',
      marginBottom: 0,
      marginTop: 0,
      fontFamily: 'Poppins',
      [`@media ${device.mobileM}`]: {
        fontSize: '1.6rem',
      },
    },
  },
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
