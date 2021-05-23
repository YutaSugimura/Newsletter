import { Category as Type } from '../../../types/notion';

type Props = {
  category: Type;
  marginLeft?: boolean;
};

export const Category: React.VFC<Props> = ({ category, marginLeft }) => {
  return (
    <span
      key={category.id}
      className={`${
        category.color === 'orange'
          ? 'bg-yellow-500'
          : category.color === 'purple'
          ? 'bg-purple-500'
          : category.color === 'gray'
          ? 'bg-gray-500'
          : category.color === 'yellow'
          ? 'bg-yellow-300'
          : category.color === 'brown'
          ? 'bg-yellow-800'
          : category.color === 'blue'
          ? 'bg-blue-500'
          : category.color === 'green'
          ? 'bg-green-500'
          : category.color === 'red'
          ? 'bg-red-600'
          : category.color === 'pink'
          ? 'bg-pink-400'
          : 'bg-gray-100'
      } ${marginLeft && 'ml-1.5'} p-0.5 px-3.5 rounded-md text-xs text-white`}
    >
      {category.name}
    </span>
  );
};
