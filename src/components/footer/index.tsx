import { memo } from 'react';

const Component: React.VFC = () => {
  return (
    <footer className="container flex justify-center items-center h-8 mx-auto">
      <small className="text-black dark:text-white text-xs md:text-sm">© 2021 Nextjs Blog</small>
    </footer>
  );
};

export const Footer = memo(Component);
