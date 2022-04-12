import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { motion } from 'framer-motion';

import MainMenu from 'src/shared/components/MainMenu';
import Footer from 'src/shared/components/Footer';
import { fetchAlbums } from '@/src/services/albums';

import Hero from './components/Hero';
import Body from './components/Body';
import Slides from './components/Slides';
import Gallery from './components/Gallery';

const Home: NextPage = () => (
  <motion.div exit={{ opacity: 0 }}>
    <Head>
      <title>JianPing</title>
      <meta name="description" content="JianPing" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainMenu />
    <Hero />
    <Body />
    <Slides />
    <Gallery />
    <Footer />
  </motion.div>
);

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery(
      ['getAlbums', { pageSize: 4 }],
      fetchAlbums,
    );

    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (err) {
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      notFound: true,
    };
  }
};

export default Home;
