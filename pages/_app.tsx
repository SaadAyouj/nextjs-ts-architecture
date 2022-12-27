import { Asap } from '@next/font/google';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import Footer from '../components/common/footer/Footer';
import Nav from '../components/common/nav/Nav';
import '../styles/globals.css';

const asap = Asap({ subsets: ['latin'] });

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
    <>
      <style jsx global>{`
        html {
          font-family: ${asap.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
