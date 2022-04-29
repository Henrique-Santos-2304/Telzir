import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import React from "react";
import { UseLoginProvider } from "hooks/presentation/useLoginAuth";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UseLoginProvider>
        <Head>
          <title>Telzir</title>

          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="description" content="Telzir Telefonia" />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </UseLoginProvider>
    </ThemeProvider>
  );
}

export default App;
