import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { createClient } from '@urql/core';
import { Provider } from 'urql';
import { ThemeProvider } from '../utils/ThemeContext';
import ThemeWrapper from '../components/ThemeWrapper';
import { AnimatePresence } from 'framer-motion';

const client = createClient({
   url: 'https://hb-notes-backend.herokuapp.com/graphql',
   fetchOptions: {
      credentials: 'include'
   }
});

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Provider value={client}>
         <ThemeProvider>
            <ThemeWrapper>
               <AnimatePresence exitBeforeEnter>
                  <Component {...pageProps} />
               </AnimatePresence>
            </ThemeWrapper>
         </ThemeProvider>
      </Provider>
   );
}

export default MyApp;
