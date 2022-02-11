import baseStyled, { ThemedStyledInterface, DefaultTheme } from 'styled-components';

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
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
