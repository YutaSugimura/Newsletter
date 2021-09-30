import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import type { PostList, TitleProperty } from '../types/notion';
import { getDatabaseData, getPageData } from '../scripts/notion';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Category } from '../components/atoms/category';

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   return {
//     props: {
//       siteTitle: await getPageData(),
//       postList: await getDatabaseData(),
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      title: await getPageData(),
      archive: await getDatabaseData(),
    },
  };
};

type Props = {
  title: TitleProperty;
  archive: PostList;
};

const Page: NextPage<Props> = ({ title, archive }) => {
  const siteTitle = title !== null ? title.plain_text : '';

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header />

      <main className="main-area container mx-auto py-4 px-4">
        <h1 className="text-black dark:text-white text-2xl md:text-3xl font-bold">{siteTitle}</h1>

        <div className="w-full pt-10 md:pt-20">
          <h2 className="text-black dark:text-white text-xl md:text-2xl font-bold">Archive</h2>

          <ul className="w-full pt-3 divide-y divide-gray-300">
            {archive !== null &&
              archive.map((item) => (
                <li key={item.id} className="w-full">
                  <Link href={`/archive/${item.id}`}>
                    <a className="flex flex-col md:flex-row md:justify-between md:items-center w-full md:h-20 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-700">
                      <p className="text-gray-700 dark:text-white text-2xl font-bold">
                        {item.title !== null ? item.title.plain_text : ''}
                      </p>

                      <div className="flex flex-col md:justify-between items-end h-full w-full md:w-60">
                        <div className="md:flex md:flex-wrap md:justify-end md:w-60">
                          {item.categories !== null &&
                            item.categories.map((category, index) => (
                              <Category
                                key={category.id}
                                category={category}
                                marginLeft={index !== 0 ? true : false}
                              />
                            ))}
                        </div>

                        <span className="text-gray-400 dark:text-white text-sm leading-none pt-2 md:pt-0">
                          {item.publishedAt}
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Page;
