import { ethers } from "ethers";

import { Factory__factory } from "../constants/typechain-types/factories/contracts/Factory__factory";
import { FACTORY_ADDRESSES } from "../constants";


export function getProvider() {
    return new ethers.providers.Web3Provider(window.ethereum);
}

export function getSigner(provider: any) {
    return provider.getSigner();
}

export function getFactoryContract(networkId: number) {
    return Factory__factory.connect(FACTORY_ADDRESSES[networkId], getSigner(getProvider()));
}

export function getFactoryFactory() {
    return Factory__factory;
}
// export function doesTokenExist(address, signer) {
//     try {
//         return new Contract(address, ERC20.abi, signer);
//     } catch (err) {
//         return false;
//     }
// }