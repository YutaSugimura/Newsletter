import type { AppProps /*, AppContext */ } from 'next/app';
import 'tailwindcss/tailwind.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../.mocks');
}

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
