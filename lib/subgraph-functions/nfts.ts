import { GraphQLClient, gql } from "graphql-request";

const ERC721_GRAPHQL_ENDPOINT = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_API_KEY}/subgraphs/id/CBf1FtUKFnipwKVm36mHyeMtkuhjmh4KHzY3uWNNq5ow`


// Get the total number of ERC721 NFTs owned by an address
export const getHoldingERC721Nfts = async (address: string) => {
    const query = gql
        `
        query {
            accounts(
                where: {
                    id: "${address}"
                },
                first: 1000
            ){
                tokens{
                    id
                }
            }
        }
    `;
    let graphQLClient = new GraphQLClient(ERC721_GRAPHQL_ENDPOINT, {
        fetch,
        cache: "no-store",
    });
    const data: any = await graphQLClient.request(query);
    if (data.accounts.length == 0) return 0
    return data.accounts[0].tokens.length;
}