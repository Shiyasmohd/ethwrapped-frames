import { GraphQLClient, gql } from "graphql-request";

const ENS_GRAPHQL_ENDPOINT = "https://api.thegraph.com/subgraphs/name/ensdomains/ens"


// Get the total number of ENS pointing to an address
export const totalEnsPointingToAddress = async (address: string) => {

    const ens_query = gql
        `
        query {
            domains(
                where:{
                    resolvedAddress:"${address}"
                }
            ){
                name
            }
        }
    `;

    const graphQLClient = new GraphQLClient(ENS_GRAPHQL_ENDPOINT, {
        fetch,
        cache: "no-store",
    });

    const ensData: any = await graphQLClient.request(ens_query);
    return ensData.domains.length;
}


// Get the address from an ENS name
export const getAddrFromEns = async (ens: string) => {
    const ens_query = gql
        `
            query {
                domains( 
                    where:{
                        name:"${ens}"
                    }
                ){
                    resolvedAddress{
                        id
                    }
                }
            }
        `;

    const graphQLClient = new GraphQLClient(ENS_GRAPHQL_ENDPOINT, {
        fetch,
        cache: "no-store",
    });

    const ensData: any = await graphQLClient.request(ens_query);
    if (ensData.domains.length === 0) return null
    return ensData.domains[0].resolvedAddress.id.toLowerCase();
}