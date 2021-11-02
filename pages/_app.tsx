import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { createClient } from '@urql/core';
import { Provider } from 'urql';
import { ThemeProvider } from '../utils/ThemeContext';
import ThemeWrapper from '../utils/ThemeWrapper';

const client = createClient({
   url: 'https://hb-notes-backend.herokuapp.com/graphql',
});

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Provider value={client}>
         <ThemeProvider>
            <ThemeWrapper>
               <div className="min-h-screen w-min-screen dark:bg-background z-0 font-mono">
                  <Component {...pageProps} />
               </div>
            </ThemeWrapper>
         </ThemeProvider>
      </Provider>
   );
}

export default MyApp;
