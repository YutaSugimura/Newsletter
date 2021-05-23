type Props = {};

export const InputEmail: React.VFC<Props> = ({}) => {
  return (
    <div className="relative flex-grow w-full">
      <label className="leading-7 text-sm text-gray-600">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};
