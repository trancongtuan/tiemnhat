import type { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import '../public/assets/scss/app.scss';
import { AuthProvider } from '../queries/account';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 86400000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    const path = window.location.pathname.split('/');
    const url = path[path.length - 1];
    setUrl(url);
    // document.body.classList.add('dark');
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <Fragment>
      {isLoading ? (
        <div className="loader-wrapper">{url === 'Christmas' ? <div id="preloader"></div> : <div className="loader"></div>}</div>
      ) : (
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Head>
              <link rel="shortcut icon" href="/favicon.ico" />
              <title>Tiệm Nhà T</title>
            </Head>
            <Component {...pageProps} />
          </AuthProvider>
        </QueryClientProvider>
      )}
    </Fragment>
  );
}
export default appWithTranslation(MyApp);
