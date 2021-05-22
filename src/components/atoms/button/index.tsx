import React from 'react';

type Props = {
  label: string;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button
      type="button"
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-8 py-2 rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
