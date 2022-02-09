import baseStyled, { ThemedStyledInterface, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  title: "theme",
  colors: {
    bodyColor: "#f9f1e4",
    footerColor: "#ebc68f",
    shapeColor: "#f6e1c0",
    white: "#ffffff",
    persianGreen: "#daee73",
    text: "#010000",
    yellow: "#ead96d",
    grey100: "#e8e8e0",
    lightBrown: "#ecdcc2",
    red: "#c0362b",
    logoLightGreen: "#739c3e",
    logoDarkGreen: "#1c2e0d",
    mustard: "#bb8918",
    darkMustard: "#ba8d0f",
    titleGreen: "#2b331f",
    fadeGreen: "#afb3aa",
    mustardLabel: "#af7f0d",
    lightBlue: "#2193a2",
    transparent: "transparent"
  },

  fontSizes: {
    xs: "1.4rem",
    sm: "1.6rem",
    md: "2rem",
    large: "3rem"
  },
  fontFamily: {
    primary: "Poppins",
    secondary: "Roboto Slab"
  },
  weight: {
    thin: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  }
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
