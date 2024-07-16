import { isNumber } from './primitive'

export const isPositiveNumber = <T>(arg: T) => isNumber(arg) && (arg as number) >= 0

export const isNegativeNumber = <T>(arg: T) => isNumber(arg) && (arg as number) < 0

export const isInfinite = <T>(arg: T) => isNumber(arg) && Math.abs(arg as number) === Infinity

export const isOdd = <T>(arg: T) => isNumber(arg) && Math.abs((arg as number) % 2) === 1

export const isEven = <T>(arg: T) => isNumber(arg) && Math.abs((arg as number) % 2) === 0
