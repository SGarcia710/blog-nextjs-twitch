import 'tailwindcss/tailwind.css';
import '@blog/styles/reset.css';
import '@blog/styles/fonts.css';
import '@blog/styles/globals.css';
import GlobalStyles from '@blog/styles/GlobalStyles';
import Layout from '@blog/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
