import { useTheme } from 'next-themes';
import Image from 'next/image';

interface Props {}

export const Switch: React.VFC<Props> = () => {
  const { theme, setTheme } = useTheme();

  const onClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button onClick={onClick}>
      {theme === 'light' ? (
        <Image src="/icons/sun.png" alt="light" width={24} height={24} />
      ) : (
        <Image src="/icons/moon.png" alt="dark" width={24} height={24} />
      )}
    </button>
  );
};
