import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from '../utils/ThemeContext';
import { UserContextProvider } from '../utils/UserContext';
import Notes from './Notes';

const Home: React.FC = () => {
   return (
      <UserContextProvider>
         <ThemeProvider>
            <Head>
               <title>Create Next App</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>
            <Notes />
         </ThemeProvider>
      </UserContextProvider>
   );
};
export default Home;
