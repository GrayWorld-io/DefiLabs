import { tokens } from "../tokens/4"
import { SerializedFarmConfig } from "../types"

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ETH-GRAY LP',
    lpAddress: '0x89529780EaeD446D821Da422C89bD19122C6C005',
    token: tokens[0],
    quoteToken: tokens[1]
  },
]

export default farms
