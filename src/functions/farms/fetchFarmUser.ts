import BigNumber from 'bignumber.js';

import { SerializedFarmConfig } from "../../constants/types"
import { MASTERCHEF_ADDRESSES } from "../../constants"
import { multicall } from "../multicall"
import { MasterChef__factory } from "../../constants/typechain-types"

export const fetchFarmUserEarnings = async (account: string, farmsToFetch: SerializedFarmConfig[], chainId: number) => {
    const masterChefAddress = MASTERCHEF_ADDRESSES[chainId];
  
    const calls = farmsToFetch.map((farm) => {
      return {
        address: masterChefAddress,
        name: 'pendingGray',
        params: [farm.pid, account],
      }
    })
  
    const rawEarnings = await multicall({ abi: MasterChef__factory.abi, calls: calls, chainId: chainId })
    const parsedEarnings = rawEarnings.map((earnings: any) => {
      return new BigNumber(earnings).toJSON()
    })
    return parsedEarnings
  }
  