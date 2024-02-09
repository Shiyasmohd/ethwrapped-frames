import { ethers } from "ethers";

export interface Transaction {
    hash: string;
    gasPrice: string;
    gasUsed: ethers.BigNumber;
    from: string;
    to: string;
    value: string;
}