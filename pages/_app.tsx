import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import '@styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }: AppProps) => {
  const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
  })
  // nos permite que cualquier componenete de mi aplicacion use apollo client
  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
    <ToastContainer/>
  </ApolloProvider>
  );
};

export default App;
