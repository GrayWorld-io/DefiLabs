import { FixedNumber } from '@ethersproject/bignumber'
import { BLOCKS_PER_YEAR } from '../../constants'
import { SerializedFarm } from '../../constants/types'

const FIXED_ZERO = FixedNumber.from(0)
const FIXED_100 = FixedNumber.from(100)

export const getFarmGrayRewardApr = (farm: SerializedFarm, regularGrayPerBlock: string) => {
    let cakeRewardsAprAsString = '0'
    const totalLiquidity = FixedNumber.from(farm.lpTotalInQuoteToken)
      const poolWeight = FixedNumber.from(farm.poolWeight)
      if (totalLiquidity.isZero() || poolWeight.isZero()) {
        return cakeRewardsAprAsString
      }
      const yearlyCakeRewardAllocation = poolWeight
    ? poolWeight.mulUnsafe(FixedNumber.from(BLOCKS_PER_YEAR).mulUnsafe(FixedNumber.from(String(regularGrayPerBlock))))
    : FIXED_ZERO
    const cakeRewardsApr = yearlyCakeRewardAllocation
    .divUnsafe(totalLiquidity)
    .mulUnsafe(FIXED_100)
  if (!cakeRewardsApr.isZero()) {
    cakeRewardsAprAsString = cakeRewardsApr.toUnsafeFloat().toFixed(2)
  }
  return cakeRewardsAprAsString
}