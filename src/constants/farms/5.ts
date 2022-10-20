import { tokens } from "../tokens/5"
import { SerializedFarmConfig } from "../types"

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ETH-GRAY LP',
    lpAddress: '0x0F88a9E9cb39126aB8641c298A40F23beeCbc49B',
    token: tokens[0],
    quoteToken: tokens[1]
  },
  {
    pid: 1,
    lpSymbol: 'ETH-GUSD LP',
    lpAddress: '0x01ef3D375C2883C001445bC6e109935bc6CE8e6C',
    token: tokens[0],
    quoteToken: tokens[2]
  },
]

export default farms
