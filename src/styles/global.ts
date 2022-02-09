import { createGlobalStyle } from "styled-components";
import { Theme } from "../themes/theme";

interface IGlobalProps {
  theme: Theme;
}

export const GlobalStyle = createGlobalStyle<IGlobalProps>`
 *, *::before, *::after {
    box-sizing: border-box;
  }
 html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    line-height: 1.6;
    font: 400 1.6rem 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.text};
    
  }
  a {
    text-decoration: none;
  }

  p {
    font: 400 1.6rem 'Roboto Slab', sans-serif;
    padding: 0;
    margin:0;
  }


  figure {
    display: block;
    padding: 0;
    margin:0;
  }

  ul, ol {
    padding: 0;
    margin:0;
    list-style: none;
  }

  .bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }

  @keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner-icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
}

  .animate-spin {
    width: 14px;
    height: 14px;
    animation: spin 1s linear infinite;
  }

  #nprogress .bar {
    height:3px;
  }

  #nprogress .bar {
    background: ${({ theme }) => theme.colors.titleGreen};
  }

  #nprogress .spinner-icon {
    border-top-color: ${({ theme }) => theme.colors.titleGreen};
    border-left-color: ${({ theme }) => theme.colors.titleGreen};
  }
`;
