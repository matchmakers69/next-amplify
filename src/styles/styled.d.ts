import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      bodyColor: string;
      footerColor: string;
      white: string;
      persianGreen: string;
      text: string;
      yellow: string;
      grey100: string;
      lightBrown: string;
      red: string;
      logoLightGreen: string;
      logoDarkGreen: string;
      mustard: string;
      shapeColor: string;
      titleGreen: string;
      fadeGreen: string;
      mustardLabel: string;
      lightBlue: string;
      transparent: string;
      darkMustard: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      large: string;
    };

    fontFamily: {
      primary: string;
      secondary: string;
    };
    weight: {
      thin: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  }
}
