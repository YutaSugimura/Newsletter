import { Annotations, Color } from '@notionhq/client/build/src/api-types';

export type Categories = {
  id: string;
  name: string;
  color: Color;
}[];

export type PostItem = {
  type: 'page';
  id: string;
  title: string;
  createdAt: string;
  categories: Categories;
};

export type PostList = PostItem[];

type Block =
  | HeadingOne
  | HeadingTwo
  | HeadingThree
  | Paragraph
  | BulletedListItem
  | NumberedListItem
  | Unsupported;

export type Blocks = Block[];
interface HeadingOne {
  id: string;
  type: 'heading_1';
  text: string;
  href: string;
  annotations?: Annotations;
}

interface HeadingTwo {
  id: string;
  type: 'heading_2';
  text: string;
  href: string;
  annotations?: Annotations;
}

interface HeadingThree {
  id: string;
  type: 'heading_3';
  text: string;
  href: string;
  annotations?: Annotations;
}

interface Paragraph {
  id: string;
  type: 'paragraph';
  text: string;
  href: string;
}

interface BulletedListItem {
  id: string;
  type: 'bulleted_list_item';
  text: string;
  href: string;
}

interface NumberedListItem {
  id: string;
  type: 'numbered_list_item';
  text: string;
  href: string;
}

interface Unsupported {
  id: string;
  type: 'unsupported';
}
