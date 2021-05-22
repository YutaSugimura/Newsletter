import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Switch } from '../atoms/button/darkMode';

type Props = {
  canGoBack?: boolean;
};

export const Header: React.VFC<Props> = ({ canGoBack }) => {
  const { theme } = useTheme();

  return (
    <header className="container mx-auto pt-5 px-4 text-gray-600 body-font">
      <div
        className={`flex flex-wrap h-12 flex-col md:flex-row items-center ${
          canGoBack ? 'justify-between' : 'justify-end'
        }`}
      >
        {canGoBack && (
          <Link href={`/`}>
            <svg
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              className="hover:bg-gray-100"
              fill={`${theme === 'light' ? '#111' : '#FFF'}`}
            >
              <path d="M0 0h24v24H0V0z" fill="none" opacity={0.87} />
              <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
            </svg>
          </Link>
        )}

        <Switch />
      </div>
    </header>
  );
};
