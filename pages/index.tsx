import React from "react";
import Products from "../components/ProductCollection";
import clsx from "clsx";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const navigation = [
  { name: "Products", href: "#", current: true },
  { name: "Wishlist", href: "#", current: false },
];

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "xSA2RSbevwkLljzQ8kCDX6NsxoTnHXNZ", // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: "f05hglcz7e4ks3x9p-1.a1.typesense.net",
        port: 443,
        protocol: "https",
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  additionalSearchParameters: {
    query_by: "name, category",
    query_by_weights: "4,2",
    num_typos: 1,
    typo_tokens_threshold: 1,
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

const Home: React.FC = () => {
  return (
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
        <main>
          <div className="px-8 mx-auto max-w-7xl">
            <Products />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
