import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      bodyBck: string;
      bodyText: string;
      footerColor: string;
      white: string;
      lightGreyText: string;
      salmon: string;
      darkGrey: string;
      lightGrey: string;
      lightBrown: string;
      darkBrown: string;
      olive: string;
      errorRed: string;
      transparent: string;
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
