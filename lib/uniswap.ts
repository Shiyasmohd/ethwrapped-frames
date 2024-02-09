import { GraphQLClient, gql } from "graphql-request";

export const getTotalSwaps = async (address: string) => {
  const SWAPS_GRAPHQL_ENDPOINT = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_API_KEY}/subgraphs/id/HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B`;
  const swaps_query = gql
    `
        query {
            swaps(
                where: {
                  recipient: "${address}"
                }
            ){
              recipient
              amountUSD
            }
          }
    `;
  const graphQLClient = new GraphQLClient(SWAPS_GRAPHQL_ENDPOINT, {
    fetch,
    cache: "no-store",
  });
  const swapsData: any = await graphQLClient.request(swaps_query);
  const totalSwaps = swapsData.swaps.length;
  const totalValueInUSD = swapsData.swaps.reduce((acc: number, swap: any) => acc + parseFloat(swap.amountUSD), 0);
  return { totalSwaps, totalValueInUSD };
}