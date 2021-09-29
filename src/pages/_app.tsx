import type { AppProps /*, AppContext */ } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

// MSW
// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   require('../../.mocks');
// }

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
