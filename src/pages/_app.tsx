import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import { AnimatePresence } from 'framer-motion';

import tailwindTheme from 'tailwind.config';

import 'styles/globals.scss';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={tailwindTheme.theme.extend}>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Hydrate>
    </QueryClientProvider>
  </ThemeProvider>
);

export default MyApp;
