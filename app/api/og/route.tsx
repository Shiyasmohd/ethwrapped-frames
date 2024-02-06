import { ImageResponse } from "next/og";
export const runtime = "edge";
export const dynamic = "force-dynamic";
import Logo from "../../../public/logo.png";

// const GRAPHQL_ENDPOINT = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.THE_GRAPH_API_KEY}/subgraphs/id/2hTKKMwLsdfJm9N7gUeajkgg8sdJwky56Zpkvg8ZcyP8`;
// const GRAPHQL_ENDPOINT = "https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai"

// const noCacheFetch = async (url: string, options: RequestInit) =>
//   fetch(url, options);

export async function GET() {

  //   const address = "0xD8547c84ced4F10A32DC9B5dE4327e36740767C3";

  //   const document = gql
  //     `
  //   query {
  //     tokens(
  //       where: {
  //         owner_contains_nocase: "${address}"
  //         created_gte: "1672531200"
  //         created_lte: "1704067199"
  //       }
  //     ) {
  //       created
  //       event {
  //         id
  //       }
  //     }
  //   }
  // `;

  //   const graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  //     fetch,
  //     cache: "no-store",
  //   });

  //   const response: any = await graphQLClient.request(document);
  //   console.log("Total gnosis POAPS: ", response.tokens.length);
  const portfolio = 0



  if (1) {
    const VALUE_CSS = {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: 0,
      display: "flex",
      color: "#ffffff"
    }
    const TITLE_CSS = {
      fontSize: "0.75rem",
      display: "flex",
      margin: 0,
      // color: "#9ca3af"
      color: "#ffffff"
    }
    const BOX_WRAPPER_CSS = { display: "flex", flexDirection: "column", position: "relative", borderRadius: "0.75rem", background: "#18181b" }
    const BOX_CSS = {
      borderRadius: "8px",
      background: "#18181b",
      color: "#fff",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }

    console.log("Working")

    return new ImageResponse(
      (
        <div style={{ background: "#000", display: "flex", flexDirection: "column", alignItems: "center", padding: "8px" }}>
          <div style={{
            display: "flex",
            borderRadius: "0.5rem",
            width: "100%",
            height: "90%",
            backgroundColor: "#000000",
            color: "#ffffff",
          }} >

            {/* Left */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              paddingRight: "4px",
              width: "50%",
            }} >
              <div style={{
                display: "flex",
                width: "100%",
                paddingBottom: "4px",
                height: "50%"
              }} >
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingRight: "4px",
                  // gap: "8px",
                  width: "50%",
                  height: "100%",
                }} >
                  <div style={{ ...BOX_WRAPPER_CSS as any, width: "100%", height: "113px", borderRadius: "8px", gap: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ ...BOX_CSS as any }} >
                      <p style={VALUE_CSS}>17</p>
                      <p style={TITLE_CSS}>Transactions</p>
                    </div>
                  </div>
                  <div style={{ ...BOX_CSS as any, height: "114px", borderRadius: "8px", width: "100%", marginTop: "4px" }} >
                    <div style={BOX_CSS as any} >
                      <p style={VALUE_CSS}>0.0270 $ETH</p>
                      <p style={TITLE_CSS}>Total txn fee paid</p>
                    </div>
                  </div>
                </div>
                <div style={{ ...BOX_WRAPPER_CSS as any, width: "50%", paddingLeft: "4px", paddingBottom: "4px" }}>
                  <div style={{ ...BOX_WRAPPER_CSS as any, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <p style={VALUE_CSS}>0.0250</p>
                      <p style={TITLE_CSS}>ETH Sent</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <p style={VALUE_CSS}>0.0440</p>
                      <p style={TITLE_CSS}>ETH Received</p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ ...BOX_WRAPPER_CSS as any, paddingTop: "4px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "50%" }}>
                <div style={BOX_CSS as any} >
                  <p style={VALUE_CSS}>
                    0x06C...0c10B
                  </p>
                  <p style={TITLE_CSS}>Address you most interacted with</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "4px",
              width: "50%",
            }}>
              <div style={{ ...BOX_WRAPPER_CSS as any, paddingBottom: "4px", width: "100%", height: "233px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={BOX_CSS as any}>
                  <p style={VALUE_CSS} >3</p>
                  <p style={TITLE_CSS}>Total NFTs Minted</p>
                </div>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "50%",
                paddingTop: "4px"
              }}>
                <div style={{ width: "100%", height: "50%", display: "flex", gap: "4px", paddingBottom: "4px" }}>
                  <div style={{ ...BOX_WRAPPER_CSS as any, width: "231px", height: "100%", justifyContent: "center", alignItems: "center", paddingRight: "4px" }}>
                    <div style={{ ...BOX_CSS as any }} >
                      <p style={VALUE_CSS}>5</p>
                      <p style={TITLE_CSS}>Contracts Deployed</p>
                    </div>
                  </div>
                  <div style={{ ...BOX_WRAPPER_CSS as any, width: "231px", height: "100%", justifyContent: "center", alignItems: "center", paddingLeft: "4px" }}>
                    <div style={BOX_CSS as any}>
                      <p style={VALUE_CSS}>11</p>
                      <p style={TITLE_CSS}>POAPs Minted</p>
                    </div>
                  </div>
                </div>
                <div style={{ ...BOX_WRAPPER_CSS as any, justifyContent: "center", height: "118px", alignItems: "center", paddingTop: "4px" }}>
                  <div style={{ ...BOX_CSS as any }}>
                    <p style={VALUE_CSS}>{portfolio == 0 ? "" : portfolio > 0 ? "+" : ""}{portfolio.toFixed(2)} %</p>
                    <p style={TITLE_CSS}>
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
          <div style={{ width: "100%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center" }} >
            <img style={{ width: "80%" }} src="https://ipfs.filebase.io/ipfs/QmbsZoaYDuVKDB9apQSJtjLJoictqwY46273GJajoAUuzJ" />
          </div>
        </div >
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
