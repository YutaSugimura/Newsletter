import { Client } from '@notionhq/client';
import { Blocks, PostItem, TitleProperty } from '../types/notion';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const pageResponse = async () => {
  return await notion.pages.retrieve({
    page_id: process.env.PARENT_PAGE_ID ?? '',
  });
};

const postsResponse = async () => {
  return await notion.databases.query({
    database_id: process.env.DATABASE_ID ?? '',
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'CreatedAt',
        direction: 'descending',
      },
    ],
  });
};

export const getPageData = async (): Promise<TitleProperty> => {
  const { properties } = await pageResponse();
  return properties.title.type === 'title' ? properties.title.title[0] : null;
};

export const getChildPageData = async (pageId: string) => {
  const post = await notion.pages.retrieve({
    page_id: pageId,
  });

  const { created_time, last_edited_time, icon, properties, url, id } = post;

  const createdAt = properties.CreatedAt.type === 'date' ? properties.CreatedAt.date.start : '';
  const title: TitleProperty = properties.Post.type === 'title' ? properties.Post.title[0] : null;
  const thumbnail = properties.Thumbnail.type === 'url' ? properties.Thumbnail.url : '';
  const categories =
    properties.Categories.type === 'multi_select' ? properties.Categories.multi_select : null;

  return {
    id,
    url,
    icon,
    title: title,
    createdAt: created_time,
    updatedAt: last_edited_time,
    publishedAt: createdAt,
    thumbnail,
    categories,
  };
};

export const getDatabaseData = async () => {
  const { results } = await postsResponse();

  const databaseData = results.map(
    (item) =>
      ({
        type: item.object,
        id: item.id,
        title: item.properties.Post.type === 'title' ? item.properties.Post.title[0] : null,
        publishedAt:
          item.properties.CreatedAt.type === 'date' ? item.properties.CreatedAt.date.start : '',
        categories:
          item.properties.Categories.type === 'multi_select'
            ? item.properties.Categories.multi_select
            : null,
      } as PostItem),
  );

  return databaseData;
};

export const getBlocksData = async (pageId: string) => {
  const response = await notion.blocks.children.list({
    block_id: pageId,
  });

  const blocks = response.results.map((block) => {
    switch (block.type) {
      case 'heading_1':
        return {
          id: block.id,
          type: block.type,
          text: block.heading_1.text[0]?.plain_text || '',
          href: block.heading_1.text[0]?.href || '',
          annotations: block.heading_1.text[0]?.annotations || undefined,
        };
      case 'heading_2':
        return {
          id: block.id,
          type: block.type,
          text: block.heading_2.text[0]?.plain_text || '',
          href: block.heading_2.text[0]?.href || '',
          annotations: block.heading_2.text[0]?.annotations || undefined,
        };
      case 'heading_3':
        return {
          id: block.id,
          type: block.type,
          text: block.heading_3.text[0]?.plain_text || '',
          href: block.heading_3.text[0]?.href || '',
          annotations: block.heading_3.text[0]?.annotations || undefined,
        };
      case 'paragraph':
        return {
          id: block.id,
          type: block.type,
          text: block.paragraph.text[0]?.plain_text || '',
          href: block.paragraph.text[0]?.href || '',
        };
      case 'bulleted_list_item':
        // eslint-disable-next-line no-case-declarations
        const item = block.bulleted_list_item;
        return (() => ({
          id: block.id,
          type: block.type,
          text: item.text[0]?.plain_text || '',
          href: item.text[0]?.plain_text || '',
        }))();
      case 'numbered_list_item':
        return (() => ({
          id: block.id,
          type: block.type,
          text: block.numbered_list_item.text[0]?.plain_text || '',
          href: block.numbered_list_item.text[0]?.href || '',
        }))();
      case 'image':
        if (block.image.type === 'file') {
          return {
            id: block.id,
            type: block.type,
            image: {
              type: block.image.type,
              caption: block.image.caption,
              url: block.image.file.url,
            },
          };
        }

        return {
          id: block.id,
          type: block.type,
          image: {
            type: block.image.type,
            caption: block.image.caption,
            url: block.image.external.url,
          },
        };
      default:
        return {
          id: block.id,
          type: 'unsupported',
        };
    }
  });

  return blocks as Blocks;
};

export const userList = async () => {
  const listUsersResponse = await notion.users.list({});
  return listUsersResponse.results;
};
