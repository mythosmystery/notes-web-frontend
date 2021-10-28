import Head from 'next/head';

export default function Home() {
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <body className="min-h-screen bg-background">
            <h1 className="text-foreground text-center py-4 text-3xl">Notes</h1>
         </body>
      </>
   );
}
