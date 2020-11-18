import { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import { AuthProvider } from '../contexts/auth';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Head>
            <title>OneBitGames</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>


          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
