import {
  ApolloClient,
  ApolloQueryResult,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import {
  LatestProductsDocument,
  LatestProductsQuery,
} from "../generated/saleor";
import Typesense from "typesense";
import { CollectionCreateSchema } from "typesense/lib/Typesense/Collections";

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: "https://vercel.saleor.cloud/graphql/", fetch }),
  cache: new InMemoryCache(),
  ssrMode: true,
});

//@ts-ignore
const main = async () => {
  const data: ApolloQueryResult<LatestProductsQuery | undefined> =
    await apolloClient.query({
      query: LatestProductsDocument,
    });
  const products = data.data?.products?.edges.map(({ node }) => {
    return {
      name: node.name,
      description: node.description,
      imageSrc: node.thumbnail?.url,
      category: node.category?.name,
      price: node.pricing?.priceRange?.start?.gross.amount,
    };
  });

  const typesenseClient = new Typesense.Client({
    nodes: [
      {
        host: "f05hglcz7e4ks3x9p-1.a1.typesense.net",
        port: 443,
        protocol: "https",
      },
    ],
    apiKey: "O5MhchvkTPR1PLjF3TvybiMLFow7jP5h",
    connectionTimeoutSeconds: 2,
  });

  let productsSchema: CollectionCreateSchema = {
    name: "products",
    fields: [
      { name: "name", type: "string" },
      { name: "description", type: "string" },
      { name: "category", type: "string", facet: true },
      { name: "price", type: "float" },
      { name: "imageSrc", type: "string" },
    ],
  };

  await typesenseClient.collections("products").delete();
  await typesenseClient.collections().create(productsSchema);

  try {
    if (products) {
      await typesenseClient
        .collections("products")
        .documents()
        .import(products);
    }
  } catch (e) {
    console.log(e);
  }
};
main();
