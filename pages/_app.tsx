import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Header from '../components/shared/Header/CustomerHeader';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>OneBitGames</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <div className="container flex-fill">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
