import React from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import { AnimatePresence } from 'framer-motion';

import tailwindTheme from 'tailwind.config';

import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={tailwindTheme.theme.extend}>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  </ThemeProvider>
);

export default MyApp;
