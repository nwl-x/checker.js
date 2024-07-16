import { isNull, isNumber } from './primitive'

export const isPositiveNumber = <T>(arg: T) => isNumber(arg) && (arg as number) >= 0

export const isNegativeNumber = <T>(arg: T) => isNumber(arg) && (arg as number) < 0

export const isInfinite = <T>(arg: T) => isNumber(arg) && Math.abs(arg as number) === Infinity

export const isOdd = <T>(arg: T) => isNumber(arg) && Math.abs((arg as number) % 2) === 1

export const isEven = <T>(arg: T) => isNumber(arg) && Math.abs((arg as number) % 2) === 0

export const isNumberOrNull = <T>(arg: T) => isNumber(arg) || isNull(arg)

export const isDecimal = <T>(arg: T) => isNumber(arg) && !isInfinite(arg) && +arg % 1 !== 0

export const isGreaterThan = <T>(arg: T, compare: T) => isNumber(arg) && isNumber(compare) && +arg > +compare

export const isLessThan = <T>(arg: T, compare: T) => isNumber(arg) && isNumber(compare) && +arg < +compare

export const isGreaterEqualThan = <T>(arg: T, compare: T) => isNumber(arg) && isNumber(compare) && +arg >= +compare

export const isLessEqualThan = <T>(arg: T, compare: T) => isNumber(arg) && isNumber(compare) && +arg <= +compare

export const isBetween = <T>(arg: T, start: T, finish: T) =>
  isNumber(arg) && isNumber(start) && isNumber(finish) && +arg > +start && +arg < +finish

export const isBetweenEqual = <T>(arg: T, start: T, finish: T) =>
  isNumber(arg) && isNumber(start) && isNumber(finish) && +arg >= +start && +arg <= +finish
