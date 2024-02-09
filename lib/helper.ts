// import { Alchemy, Utils, Network, BigNumber } from "alchemy-sdk";
const { Alchemy, Utils, Network, BigNumber } = require("alchemy-sdk");

export const shortWalletAddress = (address?: string) => {
    if (address == "N/A") return "N/A"
    if (address) return address.slice(0, 5) + "..." + address.slice(-4,)
    return "N/A"
}

export function calculatePercentageChange(
    startPrice: number,
    endPrice: number
) {
    // Ensure both prices are valid numbers
    if (typeof startPrice !== "number" || typeof endPrice !== "number") {
        throw new Error("Both startPrice and endPrice must be numbers");
    }

    // Calculate the percentage change
    const percentageChange = ((endPrice - startPrice) / startPrice) * 100;

    return percentageChange;
}


export const getBalanceByTimestamp = async (address: string, val: 0 | 1) => {

    const fromBlock = 16308214;
    const toBlock = 18908893;

    const alchemyApiKey = process.env.ALCHEMY_API_KEY;

    const settings = {
        apiKey: alchemyApiKey,
        network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(settings);

    if (val == 0) {
        let balance = await alchemy.core.getBalance(address, fromBlock);
        console.log({ balance })
        balance = Utils.formatEther(balance);

        return Number(balance);
    } else {
        let balance = await alchemy.core.getBalance(address, toBlock);
        balance = Utils.formatEther(balance);

        return Number(balance);
    }
};

