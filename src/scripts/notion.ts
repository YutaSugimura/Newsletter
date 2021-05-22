import { Client } from '@notionhq/client';
import {
  BulletedListItemBlock,
  DatePropertyValue,
  HeadingOneBlock,
  HeadingThreeBlock,
  HeadingTwoBlock,
  MultiSelectPropertyValue,
  NumberedListItemBlock,
  ParagraphBlock,
  TitlePropertyValue,
  URLPropertyValue,
} from '@notionhq/client/build/src/api-types';
import { Blocks, Categories } from '../types/notion';

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

export const getPageData = async () => {
  const { properties } = await pageResponse();
  return (properties.title as TitlePropertyValue).title[0].plain_text;
};

export const getChildPageData = async (pageId: string) => {
  const postPageResponse = await notion.pages.retrieve({
    page_id: pageId,
  });

  const properties = postPageResponse.properties;

  const siteTitle = (properties.Post as TitlePropertyValue).title[0].plain_text;
  const createdAt = (properties.CreatedAt as DatePropertyValue).date.start;
  const categories = ((properties.Categories as MultiSelectPropertyValue)
    .multi_select as any) as Categories;
  const thumbnail = ((properties as any).Thumbnail?.url as string) || '';

  return {
    siteTitle,
    createdAt,
    categories,
    thumbnail,
  };
};

export const getDatabaseData = async () => {
  const { results } = await postsResponse();

  const databaseData = results.map((item) => ({
    type: item.object,
    id: item.id,
    title: (item.properties.Post as TitlePropertyValue).title[0].plain_text,
    createdAt: (item.properties.CreatedAt as DatePropertyValue).date.start,
    categories: ((item.properties.Categories as MultiSelectPropertyValue)
      .multi_select as any) as Categories,
  }));

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
          text:
            ((block as any).heading_1 as HeadingOneBlock).text[0]?.plain_text ||
            '',
          href:
            ((block as any).heading_1 as HeadingOneBlock).text[0]?.href || '',
          annotations:
            ((block as any).heading_1 as HeadingOneBlock).text[0]
              ?.annotations || undefined,
        };
      case 'heading_2':
        return {
          id: block.id,
          type: block.type,
          text:
            ((block as any).heading_2 as HeadingTwoBlock).text[0]?.plain_text ||
            '',
          href:
            ((block as any).heading_2 as HeadingTwoBlock).text[0]?.href || '',
          annotations:
            ((block as any).heading_2 as HeadingTwoBlock).text[0]
              ?.annotations || undefined,
        };
      case 'heading_3':
        return {
          id: block.id,
          type: block.type,
          text:
            ((block as any).heading_3 as HeadingThreeBlock).text[0]
              ?.plain_text || '',
          href:
            ((block as any).heading_3 as HeadingThreeBlock).text[0]?.href || '',
          annotations:
            ((block as any).heading_3 as HeadingThreeBlock).text[0]
              ?.annotations || undefined,
        };
      case 'paragraph':
        return {
          id: block.id,
          type: block.type,
          text:
            ((block as any).paragraph as ParagraphBlock).text[0]?.plain_text ||
            '',
          href:
            ((block as any).paragraph as ParagraphBlock).text[0]?.href || '',
        };
      case 'bulleted_list_item':
        const item = (block as any).bulleted_list_item as BulletedListItemBlock;
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
          text:
            ((block as any).numbered_list_item as NumberedListItemBlock).text[0]
              ?.plain_text || '',
          href:
            ((block as any).numbered_list_item as NumberedListItemBlock).text[0]
              ?.href || '',
        }))();
      default:
        return {
          id: block.id,
          type: 'unsupported',
        };
    }
  });

  return blocks as Blocks;
};
