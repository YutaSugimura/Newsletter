import { Switch } from '../atoms/Switch';

export const Header: React.VFC = () => {
  return (
    <header className="container mx-auto px-4 text-gray-600 body-font">
      <div className="flex flex-wrap p-5 flex-col md:flex-row items-center justify-end">
        <Switch />
      </div>
    </header>
  );
};
