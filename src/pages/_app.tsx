import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

// MSW
// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   require('../../.mocks');
// }

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
