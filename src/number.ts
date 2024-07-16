import { isNumber } from './primitive'
import { getType } from './utils'

export const isPositiveNumber = <T>(arg: T) => isNumber(arg) && (arg as number) >= 0

export const isNegativeNumber = <T>(arg: T) => isNumber(arg) && (arg as number) < 0

export const isInfinite = <T>(arg: T) => Math.abs(arg as number) === Infinity

export const isOdd = <T>(arg: T) => getType(arg) === 'number' && Math.abs((arg as number) % 2) === 1

export const isEven = <T>(arg: T) => getType(arg) === 'number' && Math.abs((arg as number) % 2) === 0
