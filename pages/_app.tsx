import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../utils/ThemeContext';
import ThemeWrapper from '../components/ThemeWrapper';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import auth from '../utils/Auth';

const client = new ApolloClient({
   uri: (process.env.API_URI as string) || 'https://hb-notes-backend.herokuapp.com/graphql',
   cache: new InMemoryCache(),
   headers: {
      authorization: `bearer ${auth.getToken()}`
   }
});

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
               name='viewport'
               content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
            />
            <meta name='description' content='Description' />
            <meta name='keywords' content='Keywords' />
            <title>Typenotes</title>

            <link rel='manifest' href='/manifest.json' />
            <link href='/icon-192x192.png' rel='icon' type='image/png' sizes='32x32' />
            <meta name='theme-color' content='#317EFB' />
         </Head>
         <ApolloProvider client={client}>
            <ThemeProvider>
               <ThemeWrapper>
                  <AnimatePresence exitBeforeEnter>
                     <Component {...pageProps} />
                  </AnimatePresence>
               </ThemeWrapper>
            </ThemeProvider>
         </ApolloProvider>
      </>
   );
}

export default MyApp;
