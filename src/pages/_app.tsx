import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@assets/styles/global';
import defaultTheme from '@assets/styles/themes/default';

import { AuthProvider } from '@contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
