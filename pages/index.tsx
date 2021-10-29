import Head from 'next/head';
import React, { useState } from 'react';
import Button from '../components/Button';
import { FaSun, FaMoon } from 'react-icons/fa';
import Note from '../components/Note';

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
               <Button.Rounded onClick={() => setDark(!dark)}>{dark ? <FaSun size="22" /> : <FaMoon size="22" />}</Button.Rounded>
            </div>
            <h1 className="dark:text-foreground text-center py-4 text-4xl">Notes</h1>
            <div className="flex justify-end h-screen">
               <div className="flex flex-col items-center flex-grow border-t dark:border-foreground/20 w-1/6 my-10 mr-8">
                  <h2 className="dark:text-foreground my-2 text-xl py-0.5">Saved Notes</h2>
                  <Note.ListItem>Test note 1</Note.ListItem>
                  <Note.ListItem>Text note 2</Note.ListItem>
                  <Note.ListItem>Test note 3</Note.ListItem>
               </div>
               <Note>
                  <div className="flex justify-center">
                     <Note.Save />
                     <Note.Title></Note.Title>
                  </div>
                  <Note.Textarea />
               </Note>
            </div>
         </div>
      </body>
   );
};
export default Home;
