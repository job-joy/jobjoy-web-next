import type { AppProps } from 'next/app'

import Layout from "../Component/layout";

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const getContent = () => {
    if ([`/login`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    if ([`/sign`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    if ([`/forgetPassword`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    if ([`/profile`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };
  return <div>{getContent()}</div>;}

export default MyApp
