import { Color } from '@notionhq/client/build/src/api-types';

export type PostItem = {
  type: 'page';
  id: string;
  title: string;
  createdAt: string;
  categories: {
    id: string;
    name: string;
    color: Color;
  };
};

export type PostList = PostItem[];
