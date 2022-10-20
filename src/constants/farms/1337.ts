import { tokens } from "../tokens/5"
import { SerializedFarmConfig } from "../types"

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ETH-GRAY LP',
    lpAddress: '0x75537828f2ce51be7289709686A69CbFDbB714F1',
    token: tokens[0],
    quoteToken: tokens[1]
  },
  {
    pid: 1,
    lpSymbol: 'ETH-GUSD LP',
    lpAddress: '0xE451980132E65465d0a498c53f0b5227326Dd73F',
    token: tokens[0],
    quoteToken: tokens[2]
  },
]

export default farms
