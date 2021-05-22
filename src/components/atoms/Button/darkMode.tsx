import { useTheme } from 'next-themes';
import { useLoaded } from '../../../hooks/useLoaded';
import LightIcon from '../../../icons/light.svg';
import DarkIcon from '../../../icons/dark.svg';

interface Props {}

export const Switch: React.VFC<Props> = () => {
  const { theme, setTheme } = useTheme();
  const loaded = useLoaded();

  const onClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button onClick={onClick} className="zero">
      {loaded && theme === 'light' ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};
