import { Transaction } from "@/lib/types/types";
import { ethers } from "ethers";

export const processTransactions = (
  address: string,
  transactions: Transaction[]
) => {
  const addressCounts: { [address: string]: number } = {};
  let totalEthReceived = 0;
  let totalEthSent = 0;
  let highestTransactionAddress = "";
  transactions.forEach((tx) => {
    const fromAddress = tx.from.toLowerCase();
    const toAddress = tx.to.toLowerCase();

    let transactionType: "send" | "receive" = "send";
    if (fromAddress != address.toLowerCase()) {
      // Increment count for fromAddress
      addressCounts[fromAddress] = (addressCounts[fromAddress] || 0) + 1;
    } else {
      transactionType = "send";
      totalEthSent += parseFloat(tx.value);
    }
    // Increment count for toAddress
    if (toAddress != address.toLowerCase()) {
      addressCounts[toAddress] = (addressCounts[toAddress] || 0) + 1;
    } else {
      transactionType = "receive";
      totalEthReceived += parseFloat(tx.value);
      // Update highest transaction details
    }
  });
  // Find the address with the highest count
  let mostTransactedAddress = "N/A";
  let mostTransactedCount = 0;
  Object.entries(addressCounts).forEach(([address, count]) => {
    if (count > mostTransactedCount) {
      mostTransactedAddress = address;
      mostTransactedCount = count;
    }
  });
  totalEthReceived /= 1e18;
  totalEthSent /= 1e18;
  return {
    mostTransactedAddress,
    mostTransactedCount,
    totalEthReceived,
    totalEthSent,
    highestTransactionAddress,
  };
};
