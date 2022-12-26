import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import Footer from '../components/common/footer/Footer';
import Nav from '../components/common/nav/Nav';
import '../styles/globals.css';

function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
