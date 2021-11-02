import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { createClient } from '@urql/core';
import { Provider } from 'urql';
import { ThemeProvider } from '../utils/ThemeContext';
import ThemeWrapper from '../components/ThemeWrapper';

const client = createClient({
   url: 'https://hb-notes-backend.herokuapp.com/graphql',
});

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Provider value={client}>
         <ThemeProvider>
            <ThemeWrapper>
               <Component {...pageProps} />
            </ThemeWrapper>
         </ThemeProvider>
      </Provider>
   );
}

export default MyApp;
