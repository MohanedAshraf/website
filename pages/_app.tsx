import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mohaned Ashraf</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
