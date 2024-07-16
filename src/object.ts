import { isArray } from './array'
import { isNull, isUndefined } from './primitive'
import { getType } from './utils'

export const isObject = <T>(arg: T) => getType(arg) === 'object' && !isNull(arg) && !isArray(arg as T[])

export const isObjectOrNull = <T>(arg: T) => isObject(arg) || isNull(arg)

export const isObjectNotEmpty = <T>(arg: T) => isObject(arg) && !isUndefined(arg) && Object.keys(arg as object).length > 0
