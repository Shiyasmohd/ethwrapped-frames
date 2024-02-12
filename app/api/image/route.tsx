import { ImageResponse } from "next/og";
export const runtime = "edge";
export const dynamic = "force-dynamic";
import { getTotalPoapCount } from "@/lib/subgraph-functions/poap";
import {
  getAddrFromEns,
  totalEnsPointingToAddress,
} from "@/lib/subgraph-functions/ens";
import { getTotalSwaps } from "@/lib/subgraph-functions/uniswap";
import { getHoldingERC721Nfts } from "@/lib/subgraph-functions/nfts";
import { shortWalletAddress } from "@/lib/helper";
import { getTransactions } from "./fetchTransactions";
import { processTransactions } from "./processTransaction";
import {
  getAddressByLensHandle,
  getHeyPosts,
} from "@/lib/subgraph-functions/lens";
import { NextRequest } from "next/server";

const noCacheFetch = async (url: string, options: RequestInit) =>
  fetch(url, options);

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const inputText = searchParams.get("address") ?? "";
  const etherscanApiKey = process.env.ETHERSCAN_API_KEY!;

  let addr = "";

  if (inputText.endsWith(".eth")) {
    addr = await getAddrFromEns(inputText);
  } else if (inputText.endsWith(".lens")) {
    addr = await getAddressByLensHandle(inputText);
  } else {
    addr = inputText.toLowerCase();
  }
  console.log("resolved address: ", addr);
  const params = {
    startBlock: 16308214,
    endBlock: 18908893,
    page: 0,
    offset: 0,
    sort: "asc",
  };

  const totalPoaps = await getTotalPoapCount(addr);
  console.log("Total Poaps: ", totalPoaps);
  const totalEns = await totalEnsPointingToAddress(addr);
  console.log("Total ENS: ", totalEns);
  const swaps = await getTotalSwaps(addr);
  console.log("Total Swaps: ", swaps.totalSwaps);
  console.log("Total Value in USD: ", swaps.totalValueInUSD.toFixed(2));
  const erc721Nfts = await getHoldingERC721Nfts(addr);
  console.log("Total ERC721 NFTs: ", erc721Nfts);
  const heyFollowers = await getHeyPosts(addr);
  console.log("Hey Posts: ", heyFollowers);

  const txns = await getTransactions(addr, params, etherscanApiKey);
  console.log(txns.length, "transactions fetched");
  const txnProcessedData = processTransactions(addr, txns);
  console.log("Processed Transaction Data: ", txnProcessedData);

  if (1) {
    const VALUE_CSS = {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: 0,
      display: "flex",
      color: "#ffffff",
    };
    const TITLE_CSS = {
      fontSize: "0.75rem",
      display: "flex",
      margin: 0,
      color: "#ffffff",
    };
    const BOX_WRAPPER_CSS = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      borderRadius: "0.75rem",
      background: "#18181b",
    };
    const BOX_CSS = {
      borderRadius: "8px",
      background: "#18181b",
      color: "#fff",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    };

    return new ImageResponse(
      (
        <div
          style={{
            background: "#000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              borderRadius: "0.5rem",
              width: "100%",
              height: "100%",
              backgroundColor: "#000000",
              color: "#ffffff",
            }}
          >
            {/* Left */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "4px",
                width: "50%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  paddingBottom: "4px",
                  height: "50%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: "4px",
                    width: "50%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      ...(BOX_WRAPPER_CSS as any),
                      width: "100%",
                      height: "113px",
                      borderRadius: "8px",
                      gap: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ ...(BOX_CSS as any) }}>
                      <p style={VALUE_CSS}>{swaps.totalSwaps}</p>
                      <p style={TITLE_CSS}>Swaps on Uniswap</p>
                    </div>
                  </div>
                  <div
                    style={{
                      ...(BOX_CSS as any),
                      height: "140px",
                      borderRadius: "8px",
                      width: "100%",

                      marginTop: "4px",
                    }}
                  >
                    <div style={BOX_CSS as any}>
                      <p style={VALUE_CSS}>
                        {swaps.totalValueInUSD.toFixed(2)}
                      </p>
                      <p style={TITLE_CSS}>Total volume swapped in USD</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    ...(BOX_WRAPPER_CSS as any),
                    width: "50%",
                    paddingLeft: "4px",
                    paddingBottom: "4px",
                  }}
                >
                  <div
                    style={{
                      ...(BOX_WRAPPER_CSS as any),
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p style={VALUE_CSS}>
                        {txnProcessedData.totalEthSent.toFixed(2)}
                      </p>
                      <p style={TITLE_CSS}>ETH Sent in 2023</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p style={VALUE_CSS}>
                        {txnProcessedData.totalEthReceived.toFixed(2)}
                      </p>
                      <p style={TITLE_CSS}>ETH Received in 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  ...(BOX_WRAPPER_CSS as any),
                  paddingTop: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "50%",
                }}
              >
                <div style={BOX_CSS as any}>
                  <p style={VALUE_CSS}>
                    {shortWalletAddress(txnProcessedData.mostTransactedAddress)}
                  </p>
                  <p style={TITLE_CSS}>
                    Address you most interacted with in 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "4px",
                width: "50%",
              }}
            >
              <div
                style={{
                  ...(BOX_WRAPPER_CSS as any),
                  paddingBottom: "4px",
                  width: "100%",
                  height: "258px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={BOX_CSS as any}>
                  <p style={VALUE_CSS}>{totalEns}</p>
                  <p style={TITLE_CSS}>Total ENS pointed</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "50%",
                  paddingTop: "4px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "50%",
                    display: "flex",
                    gap: "4px",
                    paddingBottom: "4px",
                  }}
                >
                  <div
                    style={{
                      ...(BOX_WRAPPER_CSS as any),
                      width: "231px",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: "4px",
                    }}
                  >
                    <div style={{ ...(BOX_CSS as any) }}>
                      <p style={VALUE_CSS}>{erc721Nfts}</p>
                      <p style={TITLE_CSS}>ERC721 NFTs</p>
                    </div>
                  </div>
                  <div
                    style={{
                      ...(BOX_WRAPPER_CSS as any),
                      width: "231px",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingLeft: "4px",
                    }}
                  >
                    <div style={BOX_CSS as any}>
                      <p style={VALUE_CSS}>{totalPoaps}</p>
                      <p style={TITLE_CSS}>POAPs Minted</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    ...(BOX_WRAPPER_CSS as any),
                    justifyContent: "center",
                    height: "133px",
                    alignItems: "center",
                    paddingTop: "4px",
                  }}
                >
                  <div style={{ ...(BOX_CSS as any) }}>
                    <p style={VALUE_CSS}>{heyFollowers}</p>
                    <p style={TITLE_CSS}>Posts on Hey (formerly Lenster)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{ width: "100%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center" }} >
            <img style={{ height: "25px" }} src="https://ipfs.filebase.io/ipfs/QmfB9bfFcd2PHQiAxaD9F5GMmYBpYNcdSXXREUuny79M2F" />
          </div> */}
        </div>
      ),
      {
        width: 960,
        height: 540,
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
