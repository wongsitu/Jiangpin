import React from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import tailwindTheme from 'tailwind.config';

import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={tailwindTheme.theme.extend}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
