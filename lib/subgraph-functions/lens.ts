import { GraphQLClient, gql } from "graphql-request";

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

export const getHeyFollowers = async (address: string) => {
  const LENS_GRAPHQL_ENDPOINT = "https://api.thegraph.com/subgraphs/name/maui-r/lens-protocol-account-profile"

  let totalFollowers = 0;

  for (let i = 0; totalFollowers == i * 1000 && totalFollowers <= 5000; i++) {
    const poap_query = gql
      `
          query {
              account(id: "${address}") {
                following(skip: ${totalFollowers},first: 1000) {
                  profile {
                    id
                  }
                }
              }
            }
      `;
    let graphQLClient = new GraphQLClient(LENS_GRAPHQL_ENDPOINT, {
      fetch,
      cache: "no-store",
    });
    const lensData: any = await graphQLClient.request(poap_query);
    totalFollowers += lensData.account.following.length;
  }


  return totalFollowers
}