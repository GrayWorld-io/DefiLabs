import { tokens } from "../tokens/4"
import { SerializedFarmConfig } from "../types"

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ETH-GRAY LP',
    lpAddress: '0x59e3C14f6727739923AC29A29828eDECAEA32d3e',
    token: tokens[0],
    quoteToken: tokens[1]
  },
  {
    pid: 1,
    lpSymbol: 'ETH-GUSD LP',
    lpAddress: '0x6f379825f8c8C209093347F4D46c8F05704Cca63',
    token: tokens[0],
    quoteToken: tokens[2]
  },
]

export default farms
