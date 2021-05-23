type Props = {
  onClick?: () => void;
};

export const SubmitButton: React.VFC<Props> = ({ onClick }) => {
  return (
    <button
      className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
      onClick={onClick}
    >
      Subscribe
    </button>
  );
};
