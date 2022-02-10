import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";
import { GlobalStyle } from "styles/global";
import NProgress from "nprogress";
import type { AppProps } from "next/app";
import createEmotionCache from "src/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import Layout from "src/components/Layout";
import { theme } from "src/themes/theme";
import { ThemeProvider } from "styled-components";
import Amplify from "aws-amplify";
import awsconfig from "src/aws-exports";
import AuthContext from "src/context/AuthContext";

// Enable SSR
Amplify.configure({
  ...awsconfig,
  ssr: true
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }

    Router.events.on("routeChangeStart", () => {
      // dispatch here to switch of visible to close pop-up
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    Router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AuthContext>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthContext>
    </CacheProvider>
  );
}

export default MyApp;
