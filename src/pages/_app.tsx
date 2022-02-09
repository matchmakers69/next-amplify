import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import createEmotionCache from "src/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import Layout from "src/components/Layout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

export default MyApp;
