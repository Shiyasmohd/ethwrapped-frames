import { GraphQLClient, gql } from "graphql-request";

// Get the total number of swaps by an address
export const getTotalSwaps = async (address: string) => {
  // const SWAPS_GRAPHQL_ENDPOINT = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_API_KEY}/subgraphs/id/HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B`;
  const SWAPS_GRAPHQL_ENDPOINT = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_API_KEY}/subgraphs/id/4cKy6QQMc5tpfdx8yxfYeb9TLZmgLQe44ddW1G7NwkA6`;
  const swaps_query = gql
    `
    query {
      swaps(
        where: {
          account: "${address}"
        }
      ) {
        amountOutUSD
        hash
        
      }
    }
    `;
  const graphQLClient = new GraphQLClient(SWAPS_GRAPHQL_ENDPOINT, {
    fetch,
    cache: "no-store",
  });
  const swapsData: any = await graphQLClient.request(swaps_query);
  const totalSwaps = swapsData.swaps.length;
  const totalValueInUSD = swapsData.swaps.reduce((acc: number, swap: any) => acc + parseFloat(swap.amountOutUSD), 0);
  return { totalSwaps, totalValueInUSD };
}