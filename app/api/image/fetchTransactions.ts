import { Transaction } from "@/lib/types/types";
import { ethers } from "ethers";

export const getTransactions = async (
  address: string,
  params: any,
  apiKey: string
) => {
  try {
    const url = "https://api.etherscan.io/api";

    const queryParams = new URLSearchParams({
      module: "account",
      action: "txlist",
      address,
      apiKey,
      ...params,
    });

    const urlWithParams = `${url}?${queryParams.toString()}`;

    const response = await fetch(urlWithParams);

    // Assuming you want to parse the JSON response
    const data = await response.json();

    const transactions: Transaction[] = data.result.map((tx: any) => ({
      hash: tx.hash,
      gasPrice: tx.gasPrice,
      gasUsed: ethers.BigNumber.from(tx.gasUsed),
      to: tx.to,
      from: tx.from,
      value: tx.value,
    }));

    return transactions;
  } catch (error: any) {
    console.error("Error fetching transactions:", error.message);
    throw error;
  }
};
