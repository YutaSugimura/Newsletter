import { useTheme } from 'next-themes';
import LightIcon from '../../../icons/light.svg';
import DarkIcon from '../../../icons/dark.svg';

interface Props {}

export const Switch: React.VFC<Props> = () => {
  const { theme, setTheme } = useTheme();

  const onClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button onClick={onClick} className="zero">
      {theme === 'light' ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};
