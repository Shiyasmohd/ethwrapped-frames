import { aviano } from "@/lib/const";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ETH Wrapped | Farcaster Frames Edition",
  description: "Built by @XDev",
  openGraph: {
    images: [
      "https://ipfs.filebase.io/ipfs/QmVjHnwfLfKEiFQBHygV1aaocDhDktyTebNmPQt1sE3gC5",
    ],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image":
      "https://ipfs.filebase.io/ipfs/QmVjHnwfLfKEiFQBHygV1aaocDhDktyTebNmPQt1sE3gC5",
    "fc:frame:input:text": "ENS or Lens or Address",
    "fc:frame:button:1": "Wrap",
    "fc:frame:post_url": `${process.env.NEXT_PUBLIC_BASE_URL}/api/refresh`,
  },
};

export default function Home() {
  return (
    <div className="flex px-4 justify-center flex-col gap-2 items-center h-[calc(100vh-150px)] pt-[100px] relative font-aviano">
      <div className="left-[-25%]  absolute h-72 w-72 bg-[#0a69da] rounded-full blur-[5rem] opacity-30 md:left-0" />
      <div className="hidden top-[60vh] right-0 absolute h-72 w-72 bg-[#0a69da] rounded-full blur-[5rem] opacity-30 md:block" />
      <div className={`${aviano.className} text-3xl md:text-6xl txt-gradient w-full text-center txt txt-rotate `}>
        ETHEREUM
      </div>
      <div className={`${aviano.className}  text-3xl md:text-6xl  txt-gradient-2 w-full text-center  `}>
        WRAPPED
      </div>

      <Link href="">
        <button
          className={`${aviano.className} mt-2 relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.zinc.300)] cursor-pointer hover:opacity-90`}
        >
          Wrap on Farcaster 🔥
        </button>
      </Link>

    </div >
  );
}
