import '../styles/globals.css';
import '../styles/styles.css';
import 'lazysizes';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head';
import NavTest from '../components/NavTest';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adam Kuzma, Product Designer</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/portfolio-d1c10.appspot.com/o/Favicon.png?alt=media&token=582c5333-4b34-4c69-8579-90274b848d96" />
      </Head>
      <SpeedInsights/>
      <NavTest />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;