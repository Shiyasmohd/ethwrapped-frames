import { GraphQLClient, gql } from "graphql-request";

// Get wallet address by Lens handle
export const getAddressByLensHandle = async (handle: string) => {
  const LENS_GRAPHQL_ENDPOINT = "https://api.thegraph.com/subgraphs/name/gundamdweeb/lens-protocol"

  const poap_query = gql
    `
        query {
            profiles(
                where: {
                    handle: "${handle}"
                }
            ) {
              _to
            }
          }
    `;
  let graphQLClient = new GraphQLClient(LENS_GRAPHQL_ENDPOINT, {
    fetch,
    cache: "no-store",
  });
  const lensData: any = await graphQLClient.request(poap_query);
  return lensData.profiles[0]._to.toLowerCase();
}

// Get the total number of posts on Hey (formerly Lenster) by an address
export const getHeyPosts = async (address: string) => {

  const LENS_GRAPHQL_ENDPOINT = "https://api.thegraph.com/subgraphs/name/schmidsi/anudit-lens"

  const poap_query = gql
    `
        query {
          posts(
            where: {
              profileId_: {
                owner: "${address}"
              }
            },
            first: 1000
          ) {
            id
          }
        }
    `;
  let graphQLClient = new GraphQLClient(LENS_GRAPHQL_ENDPOINT, {
    fetch,
    cache: "no-store",
  });
  const lensData: any = await graphQLClient.request(poap_query);

  return lensData.posts.length
}