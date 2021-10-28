import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import NoteTextarea from '../components/NoteTextarea';
import { FaSun, FaMoon } from 'react-icons/fa';
import NoteInput from '../components/NoteInput';
import NoteTitle from '../components/NoteTitle';

const Home: React.FC = () => {
   const [dark, setDark] = useState(false);
   return (
      <body className={dark ? 'dark' : ''}>
         <div className="min-h-screen min-w-screen dark:bg-background z-0">
            <Head>
               <title>Create Next App</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="absolute">
               <Button onClick={() => setDark(!dark)}>{dark ? <FaSun size="22" /> : <FaMoon size="22" />}</Button>
            </div>
            <h1 className="dark:text-foreground text-center py-4 text-4xl">Notes</h1>
            <div className="flex justify-end h-screen">
               <div className="flex flex-col items-center flex-grow border-t dark:border-foreground/20 w-1/6 my-10 mr-8">
                  <NoteInput />
                  <NoteTitle>Test note 1</NoteTitle>
                  <NoteTitle>Text note 2</NoteTitle>
                  <NoteTitle>Test note 3</NoteTitle>
               </div>
               <div className="flex h-3/4 w-full sm:w-4/6 my-10 mx-4 sm:mx-20 border-l border-t dark:border-background-secondary shadow-lg">
                  <NoteTextarea />
               </div>
            </div>
         </div>
      </body>
   );
};
export default Home;
