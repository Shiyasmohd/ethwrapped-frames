import { GraphQLClient, gql } from "graphql-request";
import { formatEther } from "viem";
import { ImageResponse } from "next/og";
import Image from "next/image";
import Logo from "../../../public/logo.png"
import { shortWalletAddress } from "@/lib/helper";
export const runtime = "edge";
export const dynamic = "force-dynamic";

// const GRAPHQL_ENDPOINT = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.THE_GRAPH_API_KEY}/subgraphs/id/2hTKKMwLsdfJm9N7gUeajkgg8sdJwky56Zpkvg8ZcyP8`;
const GRAPHQL_ENDPOINT = "https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai"

// const noCacheFetch = async (url: string, options: RequestInit) =>
//   fetch(url, options);

export async function GET() {

  const address = "0xD8547c84ced4F10A32DC9B5dE4327e36740767C3";

  const document = gql
    `
  query {
    tokens(
      where: {
        owner_contains_nocase: "${address}"
        created_gte: "1672531200"
        created_lte: "1704067199"
      }
    ) {
      created
      event {
        id
      }
    }
  }
`;

  const graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
    fetch,
    cache: "no-store",
  });

  const response: any = await graphQLClient.request(document);
  console.log("Total gnosis POAPS: ", response.tokens.length);
  const portfolio = 0

  if (response?.sales?.[0]?.nft?.metadata?.svg) {
    return new ImageResponse(
      (
        <div id="divToDownload" className="bg-black p-3">
          <div className="w-full lg:w-[960px] lg:h-[540px] bg-black rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-2" >
            <div className=" grid grid-rows-2 gap-2">
              <div className=" grid grid-cols-2 gap-2">
                <div className="grid grid-rows-2 gap-2">
                  <div className="relative h-full w-full rounded-xl bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                    <div className="box bg-zinc-900 rounded-lg flex justify-center items-center flex-col h-full">
                      <p className="text-2xl font-bold text-gray-200">10</p>
                      <p className="text-gray-400 text-xs">Transactions</p>
                    </div>
                  </div>
                  <div className="relative h-full w-full rounded-xl bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                    <div className="box bg-zinc-900 rounded-lg flex justify-center items-center flex-col h-full py-4" >
                      <p className="text-2xl font-bold text-gray-200">1 $ETH</p>
                      <p className="text-gray-400 text-xs">Total txn fee paid</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-full w-full rounded-xl bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                  <div className="box bg-zinc-900 rounded-lg flex flex-col justify-center items-center gap-10 h-full" >
                    <div>
                      <p className="text-2xl font-bold text-gray-200">1</p>
                      <p className="text-gray-400 text-xs">ETH Sent</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-200">2</p>
                      <p className="text-gray-400 text-xs">ETH Received</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full rounded-xl bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                <div className="box bg-zinc-900 rounded-lg flex justify-center items-center flex-col h-full" >
                  <p className="text-3xl font-bold text-gray-200">
                    {/* <Link href={`https://etherscan.io/address/${data.mostTransactedAddress}`} target="_blank"> */}
                    {shortWalletAddress("0x06C41df2358deD2Fd891522f9Da75eca2150c10B")}
                    {/* </Link> */}
                  </p>
                  <p className="text-gray-400 text-xs">Address you most interacted with</p>
                </div>
              </div>
            </div>
            <div className=" grid grid-rows-2 gap-2">
              <div className="relative h-full w-full rounded-xl bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                <div className=" box bg-zinc-900 rounded-lg flex justify-center items-center flex-col h-full">
                  <p className="text-4xl font-bold text-gray-200">3</p>
                  <p className="text-gray-400 text-xs">Total NFTs Minted</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-2">
                <div className="relative h-full w-full rounded-xl bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                  <div className="box bg-zinc-900 rounded-lg flex justify-center items-center flex-col h-full py-3">
                    <p className="text-2xl font-bold text-gray-200">5</p>
                    <p className="text-gray-400 text-xs">Contracts Deployed</p>
                  </div>
                </div>
                <div className="relative h-full w-full rounded-xl bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                  <div className=" box bg-zinc-900 rounded-lg flex justify-center items-center flex-col h-full">
                    <p className="text-2xl font-bold text-gray-200">11</p>
                    <p className="text-gray-400 text-xs">POAPs Minted</p>
                  </div>
                </div>
                <div className="relative col-span-2 h-full w-full rounded-xl bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                  <div className="box bg-zinc-900 rounded-lg flex justify-center items-center flex-col h-full py-3">
                    <p className="text-3xl font-bold text-gray-200">{portfolio == 0 ? "" : portfolio > 0 ? "+" : ""}{portfolio.toFixed(2)} %</p>
                    <p className="text-gray-400 text-xs">
                      {
                        portfolio == 0 ? "No Change in Portfolio"
                          : portfolio > 0 ? "Portfolio Increased by"
                            : "Portfolio Decreased by"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src={Logo} alt="logo" className="w-full max-w-[500px] mx-auto py-4" />

          {/* <div className="flex items-center justify-center mt-4 text-4xl">
                                <div className={`${aviano.className}  px-4  txt-gradient text-center txt txt-rotate`}>
                                    ETHEREUM
                                </div>
                                <div className={`${aviano.className}  txt-gradient px-4  text-center `}>
                                    2023
                                </div>

                                <div className={`${aviano.className}  txt-gradient px-4  text-center `}>
                                    WRAPPED
                                </div>
                            </div> */}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } else {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 40,
            color: "black",
            background: "white",
            width: "100%",
            height: "100%",
            padding: "50px 200px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          Error fetching data :(. Please try again later.
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
