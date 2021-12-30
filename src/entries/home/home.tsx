import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import MainMenu from 'src/shared/components/MainMenu';
import Footer from 'src/shared/components/Footer';

import Hero from './components/Hero';
import Body from './components/Body';
import Slides from './components/Slides';
import Gallery from './components/Gallery';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Jianping</title>
      <meta name="description" content="Jianping" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainMenu />
    <Hero />
    <Body />
    <Slides />
    <Gallery />
    <Footer />
  </>
);

export default Home;
