import { Transaction } from "@/lib/types/types";
import { ethers } from "ethers";

export const processTransactions = (
  address: string,
  transactions: Transaction[]
) => {
  const addressCounts: { [address: string]: number } = {};
  let totalEthReceived = 0;
  let totalEthSent = 0;
  let cumulativeGasUsed = 0.0;
  let highestTransactionValue = 0;
  let highestTransactionType: "send" | "receive" = "send";
  let highestTransactionAddress = "";
  transactions.forEach((tx) => {
    const fromAddress = tx.from.toLowerCase();
    const toAddress = tx.to.toLowerCase();
    const gasPrice = ethers.utils.formatUnits(tx.gasPrice, "gwei");
    const gasUsed = tx.gasUsed.toNumber();

    const totalGas = parseFloat(gasPrice) * gasUsed;
    cumulativeGasUsed += totalGas;
    let transactionType: "send" | "receive" = "send";
    if (fromAddress != address.toLowerCase()) {
      // Increment count for fromAddress
      addressCounts[fromAddress] = (addressCounts[fromAddress] || 0) + 1;
    } else {
      transactionType = "send";
      totalEthSent += parseFloat(tx.value);
      if (parseFloat(tx.value) > highestTransactionValue) {
        highestTransactionValue = parseFloat(tx.value);
        highestTransactionType = "send";
        highestTransactionAddress = toAddress;
      }
    }
    // Increment count for toAddress
    if (toAddress != address.toLowerCase()) {
      addressCounts[toAddress] = (addressCounts[toAddress] || 0) + 1;
    } else {
      transactionType = "receive";
      totalEthReceived += parseFloat(tx.value);
      // Update highest transaction details
      if (parseFloat(tx.value) > highestTransactionValue) {
        highestTransactionValue = parseFloat(tx.value);
        highestTransactionType = "receive";
        highestTransactionAddress = fromAddress;
      }
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
  highestTransactionValue /= 1e18;
  totalEthReceived /= 1e18;
  totalEthSent /= 1e18;
  return {
    mostTransactedAddress,
    mostTransactedCount,
    totalEthReceived,
    totalEthSent,
    cumulativeGasUsed,
    highestTransactionValue,
    highestTransactionType,
    highestTransactionAddress,
  };
};
