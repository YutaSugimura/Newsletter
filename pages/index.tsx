import Head from 'next/head';
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import type { PostList } from '../src/types/notion';
import { getDatabaseData, getPageData } from '../src/scripts/notion';
import { Header } from '../src/components/organisms/header';
import { Footer } from '../src/components/organisms/footer';
import { SubscribeForm } from '../src/components/molecules/form/subscribe';

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

const Page: NextPage<Props> = ({ siteTitle, postList }) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <main className="container mx-auto min-h-screen px-4">
          <h1 className="text-center text-lg title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            {siteTitle}
          </h1>

          <SubscribeForm />

          <div className="pt-20">
            <h2>Archive</h2>
            <ul className="divide-y divide-gray-300">
              {postList.map((item) => (
                <li key={item.id} className="divide-y divide-yellow-500">
                  <Link href={`/archive/${item.id}`}>
                    <div className="hover:bg-gray-100 px-3 py-1.5 items-center">
                      <p className="text-gray-700 dark:text-white text-2xl">
                        {item.title}
                      </p>

                      <div className="flex flex-row justify-between items-center">
                        <div>
                          {item.categories.map((category, index) => (
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
                              } ${
                                index !== 0 && 'ml-1.5'
                              } p-0.5 px-3.5 rounded-md text-xs text-white`}
                            >
                              {category.name}
                            </span>
                          ))}
                        </div>

                        <span className="text-gray-400 text-sm">
                          {item.createdAt}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Page;
