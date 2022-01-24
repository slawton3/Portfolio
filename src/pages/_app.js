import Theme from '../styles/theme';
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2ZCBF4KS17`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '2ZCBF4KS17', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
      <Head>
          <title>Sean's Portfolio</title>
          <meta name="description" content="Sean Lawton's Professional Portfolio" />
          <meta name="keywords" content="React, Nextjs, JavaScript, Python, PHP" />
          <meta name="author" content="Sean Lawton" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 