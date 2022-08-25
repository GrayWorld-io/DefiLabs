import { ethers } from "ethers";

import { Token__factory } from "../constants/typechain-types";
import { Exchange__factory } from "../constants/typechain-types";
import { Factory__factory } from "../constants/typechain-types";
import { FACTORY_ADDRESSES } from "../constants";


export function getProvider() {
    return new ethers.providers.Web3Provider(window.ethereum);
}

export function getSigner(provider: any) {
    return provider.getSigner();
}

export function getExchangeContract(contractAddress: string) {
    return Exchange__factory.connect(contractAddress, getSigner(getProvider()));
}

export function getFactoryContract(networkId: number) {
    return Factory__factory.connect(FACTORY_ADDRESSES[networkId], getSigner(getProvider()));
}

export async function getTokenBalanceAndSymbol(accountAddress:string, tokenAddress:string) {
    const token = Token__factory.connect(tokenAddress, getSigner(getProvider()));
    const symbol = await token.symbol();
    const balance = await token.balanceOf(accountAddress);
    return {
        symbol: symbol,
        balance: ethers.utils.formatEther(balance)
    }
}

export async function getAccountBalance(accountAddress:string) {
    const balance = await getProvider().getBalance(accountAddress);
    return {
        balance: ethers.utils.formatEther(balance),
        symbol: 'ETH'
    }
}