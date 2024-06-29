import '../styles/globals.css';
import '../styles/styles.css';
import Head from 'next/head';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="../fonts/PPMondwest-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="../fonts/Inter.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;