import Head from 'next/head';
import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Home: React.FC = () => {
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="text-center dark:text-foreground pt-16">
            <h1 className="text-4xl">Welcome to TypeNotes</h1>
            <h2 className="text-lg my-4">Register or Login to begin!</h2>
         </div>
         <div className="flex flex-row justify-center gap-12 py-8">
            <LoginForm />
            <RegisterForm />
         </div>
      </>
   );
};
export default Home;
