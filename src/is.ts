import { isBoolean, isBooleanOrNull, isBigInt, isNumber, isNull, isString, isUndefined, isSymbol, isPrimitive } from './primitive'
import { isStringOrNull, isStringNotEmpty, isAlpha, isNumeric, isAlphanumeric, isNumberOrNull, isEmail, isUrl, isBinaryString } from './string'
import { isPositiveNumber, isNegativeNumber, isInfinite, isOdd, isEven } from './number'
import { isArray, isMap, isSet, isArrayOrNull, isArrayOfNumbers, isArrayOfStrings, isArrayOfObjects, isArrayOfBooleans, isArrayNotEmpty } from './array'
import { isObject, isObjectOrNull, isObjectNotEmpty } from './object'
import { isPromise, isFullfilledPromise, isRejectedPromise, isPendingPromise } from './promise'
import { isFunction, isAsyncFunction, isGeneratorFunction } from './function'
import { isIPv4, isIPv6, isIP } from './ip'
import { isUUID, isUUIDv3, isUUIDv4, isUUIDv5 } from './uuid'
import { isDate, isRegExp, isError, isFalsy, isTruthy } from './misc'

const is = {
  // ==== Primitive checker ====

  ['boolean']: (arg: unknown) => isBoolean(arg),
  booleanOrNull: (arg: unknown) => isBooleanOrNull(arg),
  bigInt: (arg: unknown) => isBigInt(arg),
  number: (arg: unknown) => isNumber(arg),
  null: (arg: unknown) => isNull(arg),
  ['string']: (arg: unknown) => isString(arg),
  undefined: (arg: unknown) => isUndefined(arg),
  symbol: (arg: unknown) => isSymbol(arg),
  primitive: (arg: unknown) => isPrimitive(arg),

  // ==== String checker ====

  stringOrNull: (arg: unknown) => isStringOrNull(arg),
  stringNotEmpty: (arg: unknown) => isStringNotEmpty(arg),
  alpha: (arg: unknown) => isAlpha(arg),
  numeric: (arg: unknown) => isNumeric(arg),
  alphanumeric: (arg: unknown) => isAlphanumeric(arg),
  numberOrNull: (arg: unknown) => isNumberOrNull(arg),
  email: (arg: unknown) => isEmail(arg),
  url: (arg: unknown) => isUrl(arg),
  binaryString: (arg: unknown) => isBinaryString(arg),

  // ==== Number checker ====

  positiveNumber: (arg: unknown) => isPositiveNumber(arg),
  negativeNumber: (arg: unknown) => isNegativeNumber(arg),
  infinite: (arg: unknown) => isInfinite(arg),
  odd: (arg: unknown) => isOdd(arg),
  even: (arg: unknown) => isEven(arg),

  // ==== Array checker ====

  array: (arg: unknown[]) => isArray(arg),
  map: (arg: unknown) => isMap(arg),
  set: (arg: unknown) => isSet(arg),
  arrayOrNull: (arg: unknown[]) => isArrayOrNull(arg),
  arrayNumber: (arg: unknown[]) => isArrayOfNumbers(arg),
  arrayString: (arg: unknown[]) => isArrayOfStrings(arg),
  arrayObject: (arg: unknown[]) => isArrayOfObjects(arg),
  arrayBoolean: (arg: unknown[]) => isArrayOfBooleans(arg),
  arrayNotEmpty: (arg: unknown[]) => isArrayNotEmpty(arg),

  // ==== Object checker ====

  ['object']: (arg: unknown) => isObject(arg),
  objectOrNull: (arg: unknown) => isObjectOrNull(arg),
  objectNotEmpty: (arg: unknown) => isObjectNotEmpty(arg),

  // ==== Promise checker ====

  promise: (arg: unknown) => isPromise(arg),
  fullfilledPromise: (arg: unknown) => isFullfilledPromise(arg),
  rejectedPromise: (arg: unknown) => isRejectedPromise(arg),
  pendingPromise: (arg: unknown) => isPendingPromise(arg),

  // ==== Function checker ====

  ['function']: (arg: unknown) => isFunction(arg),
  asyncFunction: (arg: unknown) => isAsyncFunction(arg),
  generatorFunction: (arg: unknown) => isGeneratorFunction(arg),

  // ==== IP checker ====

  ipv4: (arg: unknown) => isIPv4(arg),
  ipv6: (arg: unknown) => isIPv6(arg),
  ip: (arg: unknown) => isIP(arg),

  // ==== UUID checker ====

  uuid: (arg: unknown) => isUUID(arg),
  uuidv3: (arg: unknown) => isUUIDv3(arg),
  uuidv4: (arg: unknown) => isUUIDv4(arg),
  uuidv5: (arg: unknown) => isUUIDv5(arg),

  // ==== Misc checker ====

  date: (arg: unknown) => isDate(arg),
  regExp: (arg: unknown) => isRegExp(arg),
  error: (arg: unknown) => isError(arg),
  falsy: (arg: unknown) => isFalsy(arg),
  truthy: (arg: unknown) => isTruthy(arg)
}

export default is
