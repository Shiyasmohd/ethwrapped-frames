import { GraphQLClient, gql } from "graphql-request";

// Get the total number of POAPs owned by an address on  Gnosis Chain
export const getTotalPoapCount = async (address: string) => {

    const POAP_GRAPHQL_ENDPOINT = "https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai"

    const poap_query = gql
        `
        query {
            tokens(
                where: {
                    owner_contains_nocase: "${address}"
                },
                first: 500
            ) {
                event {
                    id
                }
            }
        }
    `;
    let graphQLClient = new GraphQLClient(POAP_GRAPHQL_ENDPOINT, {
        fetch,
        cache: "no-store",
    });
    const poapData: any = await graphQLClient.request(poap_query);
    return poapData.tokens.length;
}