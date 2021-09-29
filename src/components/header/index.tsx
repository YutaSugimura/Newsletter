import { memo } from 'react';
import Link from 'next/link';
import { useLoaded } from '../../hooks/useLoaded';
import { ThemeButton } from '../button/theme';
import { ChevronLeftIcon } from '../icons/arrow';

type Props = {
  canGoBack?: boolean;
};

const Component: React.VFC<Props> = ({ canGoBack }) => {
  const loaded = useLoaded();

  return (
    <header className="container px-4 mx-auto">
      <div
        className={`
          flex items-end h-14 w-full
          ${canGoBack ? 'justify-between' : 'justify-end'}
        `}
      >
        {loaded && canGoBack && (
          <Link href="/">
            <a className="hover:opacity-60">
              <ChevronLeftIcon />
            </a>
          </Link>
        )}

        <ThemeButton />
      </div>
    </header>
  );
};

export const Header = memo(Component);
