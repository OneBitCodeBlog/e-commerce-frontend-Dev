import { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Head>
            <title>OneBitGames</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          <Component {...pageProps} />
        </div>
      </PersistGate>
      <ToastContainer />
    </Provider>
  )
}

export default MyApp
