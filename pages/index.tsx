import React from "react";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import Hit from "~/components/Hit";

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

const Home = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="py-10">
        <InstantSearch indexName="products" searchClient={searchClient}>
          <SearchBox />

          <Hits hitComponent={Hit} />
        </InstantSearch>
      </div>
    </div>
  );
};

export default Home;
