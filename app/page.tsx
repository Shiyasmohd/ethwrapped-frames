"use client"
import { getBalanceByTimestamp } from "@/lib/helper";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

// export const metadata: Metadata = {
//   title: "Farcaster CryptoPunks The Graph Frame",
//   description: "Powered by The Graph",
//   openGraph: {
//     images: [
//       `${process.env.NEXT_PUBLIC_DOMAIN
//       }/api/og?timestamp=${new Date().getTime()}-refresh`,
//     ],
//   },
//   other: {
//     "fc:frame": "vNext",
//     "fc:frame:image": `${process.env.NEXT_PUBLIC_DOMAIN
//       }/api/og?timestamp=${new Date().getTime()}`,
//     "fc:frame:button:1": "Refresh",
//     "fc:frame:post_url": `${process.env.NEXT_PUBLIC_DOMAIN
//       }?timestamp=${new Date().getTime()}-refresh`,
//   },
// };


export default function Home() {

  const test = async () => {
    let addr = "0xd8547c84ced4f10a32dc9b5de4327e36740767c3";

    let startBal = await getBalanceByTimestamp(addr, 0)
    let endBal = await getBalanceByTimestamp(addr, 1)
    console.log(startBal, endBal)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between ">
        <p className="mb-10">
          <img src={`/api/og?timestamp=${new Date().getTime()}`} />
        </p>
        <p className="mb-10" >Refresh browser to refresh image</p>
        <p className="mb-10">Date: {new Date().toISOString()}</p>
        <p className="mb-10">
          Source code:{" "}
          <Link
            href={`https://github.com/schmidsi/cryptopunks-frames`}
            className="underline"
          >
            github.com/schmidsi/cryptopunks-frames
          </Link>
        </p>
      </div>
      <button onClick={test}>
        test
      </button>
    </main>
  );
}
