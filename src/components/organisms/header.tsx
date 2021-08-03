import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useLoaded } from '../../hooks/useLoaded';
import { DarkModeToggle } from '../atoms/button/darkModeToggle';
import ArrowIcon from '../../icons/arrow_back.svg';
import ArrowWhiteIcon from '../../icons/arrow_back_white.svg';

type Props = {
  canGoBack?: boolean;
};

export const Header: React.VFC<Props> = ({ canGoBack }) => {
  const { theme } = useTheme();
  const loaded = useLoaded();

  return (
    <header className="container mx-auto pt-5 px-4 text-gray-600 body-font">
      <div
        className={`flex flex-wrap h-12 flex-col md:flex-row items-center ${
          canGoBack ? 'justify-between' : 'justify-end'
        }`}
      >
        {loaded && canGoBack && (
          <Link href={'/'}>
            <div>{theme === 'light' ? <ArrowIcon /> : <ArrowWhiteIcon />}</div>
          </Link>
        )}

        <DarkModeToggle />
      </div>
    </header>
  );
};
