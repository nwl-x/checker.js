import { isObject } from './object'
import { isBoolean, isNull, isNumber, isString } from './primitive'

export const isArray = <T>(arg: T[]) => Array.isArray(arg)

export const isMap = <T>(arg: T) => arg instanceof Map

export const isSet = <T>(arg: T) => arg instanceof Set

export const isArrayOrNull = <T>(arg: T) => isArray(arg as T[]) || isNull(arg)

export const isArrayOfNumbers = <T>(arg: T[]) => isArrayNotEmpty(arg) && arg.every((item: unknown) => isNumber(item))

export const isArrayOfStrings = <T>(arg: T[]) => isArrayNotEmpty(arg) && arg.every((item: unknown) => isString(item))

export const isArrayOfObjects = <T>(arg: T[]) => isArrayNotEmpty(arg) && arg.every((item: unknown) => isObject(item))

export const isArrayOfBooleans = <T>(arg: T[]) => isArrayNotEmpty(arg) && arg.every((item: unknown) => isBoolean(item))

export const isArrayEmpty = <T>(arg: T[]) => isArray(arg) && arg.length === 0

export const isArrayNotEmpty = <T>(arg: T[]) => isArray(arg) && arg.length > 0
