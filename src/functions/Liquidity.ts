import { ethers, BigNumber } from "ethers";
import { getFactoryContract, getExchangeContract } from "../utils";

export async function addLiquidity(inputTokenAddress: string, inputAmount: BigNumber, account: string, networkId: number) {
    const exchangeAddress = await getFactoryContract(networkId).getExchange(inputTokenAddress);

    // const outputAmount = getOutputAmount();
    // const Exchange = getExchangeContract(exchangeAddress).addLiquidity
}

function getExchangeRate(
    inputAmount: BigNumber, 
    inputDecimals: number, 
    onputAmount: BigNumber, 
    outputDecimals: number) {

    try {
        if (
            inputAmount &&
            (inputDecimals || inputDecimals === 0) &&
            onputAmount &&
            (outputDecimals || outputDecimals === 0)
        ) {
            const factor = BigNumber.from(10).pow(BigNumber.from(18));
            return inputAmount
            .mul(factor)
            .mul(BigNumber.from(10).pow(BigNumber.from(outputDecimals)))
            .div(BigNumber.from(10).pow(BigNumber.from(inputDecimals)))
            .div(onputAmount)
        }
    } catch { }
}