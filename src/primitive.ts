import { getType } from './utils'

export const isBoolean = <T>(arg: T) => getType(arg) === 'boolean' || arg instanceof Boolean

export const isBooleanOrNull = <T>(arg: T) => isBoolean(arg) || isNull(arg)

export const isBigInt = <T>(arg: T) => getType(arg) === 'bigint' || arg instanceof BigInt

export const isNumber = <T>(arg: T) => (getType(arg) === 'number' && !Number.isNaN(arg as number)) || arg instanceof Number

export const isNull = <T>(arg: T) => getType(arg) === 'null' || arg === null

export const isString = <T>(arg: T) => getType(arg) === 'string' || arg instanceof String

export const isUndefined = <T>(arg: T) => getType(arg) === 'undefined'

export const isSymbol = <T>(arg: T) => getType(arg) === 'symbol' || arg instanceof Symbol

export const isPrimitive = <T>(arg: T) => isNumber(arg) || isString(arg) || isBoolean(arg) || isUndefined(arg) || isNull(arg) || isSymbol(arg)
