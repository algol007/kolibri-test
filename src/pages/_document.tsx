/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Kolibri For Impact test assignment</title>
        <link rel='icon' href='https://kolibriforimpact.com/main-logo.png' />
        <meta name='author' content='Ady Rahmansyah' />
        <meta property='og:url' content='https://kolibriforimpact.com/' />
        <meta property='og:type' content='landing page' />
        <meta
          property='og:title'
          content='Kolibri For Impact test assignment'
        />
        <meta
          property='og:image'
          content='https://kolibriforimpact.com/main-logo.png'
        />
        <meta property='og:site_name' content='kolibriforimpact.com' />
        <meta
          name='description'
          content='This page is created to complete assignment task from kolibriforimpact.com'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:title'
          content='Kolibri For Impact test assignment'
        />
        <meta
          property='twitter:image'
          content='https://kolibriforimpact.com/main-logo.png'
        />
        <meta
          property='twitter:description'
          content='This page is created to complete assignment task from kolibriforimpact.com'
        />
        <meta property='twitter:site' content='@kolibriforimpact' />
        <meta property='twitter:creator' content='@ady_rahmansyah' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
