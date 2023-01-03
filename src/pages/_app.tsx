import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { Poppins } from '@next/font/google';
import { useRouter } from 'next/router';
import SideBar from '../components/SiderBar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const routes = ['/dashboard', '/cats', '/dogs', '/users'];

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <main className={poppins.className}>
      {routes.includes(pathname) && <SideBar />}
      <Component {...pageProps} />
    </main>
  );
}
