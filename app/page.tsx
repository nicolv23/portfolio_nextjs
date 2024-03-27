// pages/index.js

import Hero from './components/hero';
import Apropos from './components/apropos';
import Competences from './components/competences';
import Projets from './components/projets';
import Contact from './components/contact';

import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio de Nicolas</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Apropos />
        <Competences />
        <Projets />
        <Contact />
      </div>
    </>
  );
};

export default Home;