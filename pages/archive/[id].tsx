import Head from 'next/head';
import type { GetServerSideProps, NextPage } from 'next';
import type { Blocks, Categories } from '../../src/types/notion';
import { getBlocksData, getChildPageData } from '../../src/scripts/notion';
import { Header } from '../../src/components/organisms/header';
import { Footer } from '../../src/components/organisms/footer';
import { Category } from '../../src/components/atoms/category';

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
  categories: Categories;
  contents: Blocks;
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

      <div>
        <Header canGoBack={true} />

        <main className="container mx-auto min-h-screen px-4">
          <article>
            <h1 className="text-4xl mb-4 font-medium text-gray-900 dark:text-white">
              {siteTitle}
            </h1>

            <div className="flex max-w-full pt-3">
              <span className="ml-auto mr-9">{createdAt}</span>
            </div>

            <div className="flex justify-end pt-2 mr-9">
              {categories.map((category, index) => (
                <Category
                  key={category.id}
                  category={category}
                  marginLeft={index !== 0 ? true : false}
                />
              ))}
            </div>

            <div className="pt-3">
              {contents.map((item) => {
                if (item.type === 'heading_1') {
                  return (
                    <h1 key={item.id} className="text-3xl">
                      {item.text}
                    </h1>
                  );
                } else if (item.type === 'heading_2') {
                  return (
                    <h2 key={item.id} className="text-2xl">
                      {item.text}
                    </h2>
                  );
                } else if (item.type === 'heading_3') {
                  return (
                    <h3 key={item.id} className="text-xl">
                      {item.text}
                    </h3>
                  );
                } else if (item.type === 'paragraph') {
                  if (item.text === '') {
                    return <div key={item.id} style={{ height: 20 }} />;
                  }
                  if (item.href !== '') {
                    return (
                      <a
                        key={item.id}
                        className="hover:text-gray-300 text-base underline tracking-tight"
                        href={item.href}
                        target="_blank"
                      >
                        {item.text}
                      </a>
                    );
                  }
                  return (
                    <p key={item.id} className="text-lg tracking-tight">
                      {item.text}
                    </p>
                  );
                } else if (item.type === 'bulleted_list_item') {
                  return <li key={item.id}>{item.text}</li>;
                } else if (item.type === 'numbered_list_item') {
                  return <ol key={item.id}>{item.text}</ol>;
                } else if (item.type === 'unsupported') {
                  return <div key={item.id} style={{ height: 20 }} />;
                }
              })}
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Page;
