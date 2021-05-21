import Head from 'next/head';
import type { GetServerSideProps, NextPage } from 'next';
import { Client } from '@notionhq/client';
import { MultiSelectPropertyValue } from '@notionhq/client/build/src/api-types';
import { getBlocksData, getChildPageData } from '../../src/scripts/notion';

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const postPageId = query.id as string;

  const { siteTitle, createdAt, categories } = await getChildPageData(
    postPageId,
  );

  return {
    props: {
      siteTitle,
      createdAt,
      categories,
      contents: await getBlocksData(postPageId),
    },
  };
};

type Props = {
  siteTitle: string;
  createdAt: string;
  categories: MultiSelectPropertyValue;
  contents: any;
};

const Page: NextPage<Props> = ({
  siteTitle,
  createdAt,
  categories,
  contents,
}) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{siteTitle}</h1>
        <span>{createdAt}</span>
        <span>{JSON.stringify(categories)}</span>

        {contents.map((item: any) => (
          <p>{JSON.stringify(item)}</p>
        ))}
      </main>
    </>
  );
};

export default Page;
