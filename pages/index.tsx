import clsx from "clsx";
import Head from "next/head";
import React from "react";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  RefinementList,
} from "react-instantsearch-dom";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import Hit from "~/components/Hit";

const navigation = [
  { name: "Products", href: "#", current: true },
  { name: "Wishlist", href: "#", current: false },
];

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "xSA2RSbevwkLljzQ8kCDX6NsxoTnHXNZ",
    nodes: [
      {
        host: "f05hglcz7e4ks3x9p-1.a1.typesense.net",
        port: 443,
        protocol: "https",
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60,
  },
  additionalSearchParameters: {
    query_by: "name, category",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

const Home = () => {
  return (
    <>
      <Head>
        <title>Ecommerce Store with Typesense + Next.js + Vercel</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <InstantSearch indexName="products" searchClient={searchClient}>
        <div className="min-h-screen bg-gray-100">
          <div className="bg-white shadow-sm">
            <div className="px-8 mx-auto shadow-sm max-w-7xl">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          item.current
                            ? "border-indigo-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                          "inline-flex items-center px-2 border-b-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10">
            <header className="mb-4">
              <div className="px-8 mx-auto max-w-7xl">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                  Dashboard
                </h1>
              </div>
            </header>

            <div className="flex justify-between gap-4">
              <aside className="w-1/4 p-12">
                <RefinementList className="mt-3" attribute="category" />
              </aside>
              <main className="w-full">
                <div className="max-w-6xl">
                  <div className="my-4">
                    <SearchBox />
                  </div>
                  <Hits hitComponent={Hit} />
                  <Pagination />
                </div>
              </main>
            </div>
          </div>
        </div>
      </InstantSearch>
    </>
  );
};

export default Home;
