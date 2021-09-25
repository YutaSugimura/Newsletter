export type PostItem = {
  type: 'page';
  id: string;
  publishedAt: string;
  title: TitleProperty;
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
  | Image
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

interface Image {
  id: string;
  type: 'image';
  image: {
    type: string;
    caption: [];
    url: string;
  };
}

interface Unsupported {
  id: string;
  type: 'unsupported';
}

export type TitleProperty = {
  type: 'text' | 'mention' | 'equation';
  plain_text: PlainText;
  annotations: Annotations;
  href: Href;
} | null;

export type Category = {
  id: string;
  name: string;
  color: Colors;
};

export type Categories = Category[] | null;

//
type PlainText = string;
type Href = null | string;
type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: TextColors;
};

type Colors =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red';

type TextColors =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'gray_background'
  | 'brown_background'
  | 'orange_background'
  | 'yellow_background'
  | 'green_background'
  | 'blue_background'
  | 'purple_background'
  | 'pink_background'
  | 'red_background';
