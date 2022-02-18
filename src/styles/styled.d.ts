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
    typography: {
      h1: {
        fontSize: number | string;
        fontFamily: string;
        marginBottom: string;
      };
      h2: {
        fontSize: number | string;
        fontFamily: string;
        marginBottom: string;
      };
      h3: {
        fontSize: number | string;
        fontFamily: string;
        marginBottom: string;
      };
      h4: {
        fontSize: number | string;
        fontFamily: string;
        marginBottom: string;
      };
      h5: {
        fontSize: number | string;
        fontFamily: string;
        marginBottom: string;
      };
      h6: {
        fontSize: number | string;
        fontFamily: string;
        marginBottom: string;
      };
      p: {
        fontSize: number | string;
        fontFamily: string;
        marginTop: number | string;
        marginBottom: number | string;
      };
    };
  }
}
