import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import type { PostList } from '../src/types/notion';
import { getDatabaseData, getPageData } from '../src/scripts/notion';

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      siteTitle: await getPageData(),
      postList: await getDatabaseData(),
    },
  };
};

type Props = {
  siteTitle: string;
  postList: PostList;
};

const Page: React.VFC<Props> = ({ siteTitle, postList }) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{siteTitle}</h1>
        <p>{JSON.stringify(postList)}</p>
      </main>
    </>
  );
};

export default Page;
