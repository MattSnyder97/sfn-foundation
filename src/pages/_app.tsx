import '../app/globals.css';
import type { AppProps } from 'next/app';
import PageTransition from '@/components/primitives/PageTransition';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  );
}
