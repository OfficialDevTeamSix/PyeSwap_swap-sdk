import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

type ChainAddress = {
  [chainId in ChainId]: string
}
export const FACTORY_ADDRESS: ChainAddress = {
  [ChainId.MAINNET]: "0xFA8F5a73A5c8DB7C4ed58Dc26c076424252d2bd9",
  [ChainId.TESTNET]: "0xCCe165FE7866DfEFf47CE5F45a2E5cFB5bc0c044"
}

export const INIT_CODE_HASH: ChainAddress = {
  [ChainId.MAINNET]: "0xb03cbb2e19328583cdc686ac88d169ca8c91eafa1761bcbb3f64625bd068946e",
  [ChainId.TESTNET]: '0x665fe1cec9170157dda8e504d670cbe0b2bf81a98f892d03f233c84524f72047'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9975 = JSBI.BigInt(9975)
export const _8575 = JSBI.BigInt(8575)
export const _10000 = JSBI.BigInt(10000)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
