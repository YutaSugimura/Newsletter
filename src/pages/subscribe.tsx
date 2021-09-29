import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { SubscribeForm } from '../components/molecules/form/subscribe';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>subscribe newsletter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header canGoBack={true} />
        <main className="container mx-auto min-h-screen px-4">
          <SubscribeForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
