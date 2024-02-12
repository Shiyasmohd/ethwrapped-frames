export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const {
    untrustedData: { inputText, fid },
    trustedData: { messageBytes },
  } = await req.json();
  const imageURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/image?address=${inputText}`;
  return new Response(
    `
        <!DOCTYPE html>
        <html>
        <head>
            <title>ETH Wrapped</title>
            <meta property="og:title" content="ETH Wrapped">
            <meta property="og:image" content="${imageURL}">
            <meta name="fc:frame" content="vNext">
            <meta name="fc:frame:image" content="${imageURL}">
           
        </head>
        <body>
        </body>
        </html>`,
    {
      status: 200,
      headers: { "Content-Type": "text/html" },
    }
  );
}
