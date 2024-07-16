import {
  isArray,
  isArrayOfNumbers,
  isArrayOfStrings,
  isArrayOfObjects,
  isArrayOfBooleans,
  isArrayNotEmpty,
  isArrayEmpty,
  isArrayOrNull,
  isMap,
  isSet
} from './array'
import {
  isBoolean,
  isBooleanOrNull,
  isBigInt,
  isNumber,
  isNull,
  isString,
  isUndefined,
  isSymbol,
  isPrimitive
} from './primitive'
import {
  isStringOrNull,
  isStringEmpty,
  isStringNotEmpty,
  isBinaryString,
  isAlpha,
  isNumeric,
  isAlphanumeric,
  isEmail,
  isUrl,
  isBase64
} from './string'
import {
  isPositiveNumber,
  isNegativeNumber,
  isInfinite,
  isOdd,
  isEven,
  isNumberOrNull,
  isDecimal,
  isGreaterThan,
  isGreaterEqualThan,
  isLessThan,
  isLessEqualThan,
  isBetween,
  isBetweenEqual
} from './number'
import { isObject, isObjectOrNull, isObjectEmpty, isObjectNotEmpty } from './object'
import { isFunction, isAsyncFunction, isGeneratorFunction } from './function'
import { isPromise, isFullfilledPromise, isRejectedPromise, isPendingPromise } from './promise'
import { isIPv4, isIPv6, isIP } from './ip'
import { isDate, isRegExp, isError, isFalsy, isTruthy } from './misc'
import { isUUID, isUUIDv3, isUUIDv4, isUUIDv5 } from './uuid'
import { isWindow, isNode, isBrowser, isJsDom, isWebWorker, isBun, isMac, isLinux, isWindows } from './environment'
import {
  isIpad,
  isIphone,
  isIpod,
  isAndroid,
  isAndroidPhone,
  isAndroidTablet,
  isMobile,
  isTablet,
  isDesktop,
  isIos
} from './platform'
import { isChrome, isFirefox, isOpera, isOperaMini, isSafari, isEdge, isIe } from './browser'
import {
  IsMethods,
  ArrayMethods,
  NumberMethods,
  ObjectMethods,
  BooleanMethods,
  StringMethods,
  FunctionMethods,
  PromiseMethods
} from './type'

export const is: IsMethods = {
  // ==== Fluent methods ====

  ['array']: (() => {
    const arrayMethod = (arg: unknown[]) => isArray(arg)

    arrayMethod['number'] = (arg: unknown[]) => isArrayOfNumbers(arg)
    arrayMethod['string'] = (arg: unknown[]) => isArrayOfStrings(arg)
    arrayMethod['object'] = (arg: unknown[]) => isArrayOfObjects(arg)
    arrayMethod['boolean'] = (arg: unknown[]) => isArrayOfBooleans(arg)
    arrayMethod['empty'] = (arg: unknown[]) => isArrayEmpty(arg)
    arrayMethod['notEmpty'] = (arg: unknown[]) => isArrayNotEmpty(arg)
    arrayMethod['orNull'] = (arg: unknown[]) => isArrayOrNull(arg)

    return arrayMethod
  })() as ArrayMethods,

  ['number']: (() => {
    const numberMethod = (arg: unknown) => isNumber(arg)

    numberMethod['positive'] = (arg: unknown) => isPositiveNumber(arg)
    numberMethod['negative'] = (arg: unknown) => isNegativeNumber(arg)
    numberMethod['infinite'] = (arg: unknown) => isInfinite(arg)
    numberMethod['orNull'] = (arg: unknown) => isNumberOrNull(arg)
    numberMethod['decimal'] = (arg: unknown) => isDecimal(arg)
    numberMethod['greaterThan'] = (arg: unknown, compare: unknown) => isGreaterThan(arg, compare)
    numberMethod['greaterEqualThan'] = (arg: unknown, compare: unknown) => isGreaterEqualThan(arg, compare)
    numberMethod['lessThan'] = (arg: unknown, compare: unknown) => isLessThan(arg, compare)
    numberMethod['lessEqualThan'] = (arg: unknown, compare: unknown) => isLessEqualThan(arg, compare)
    numberMethod['between'] = (arg: unknown, start: unknown, finish: unknown) => isBetween(arg, start, finish)
    numberMethod['betweenEqual'] = (arg: unknown, start: unknown, finish: unknown) => isBetweenEqual(arg, start, finish)

    return numberMethod
  })() as NumberMethods,

  ['object']: (() => {
    const objectMethod = (arg: unknown[]) => isObject(arg)

    objectMethod['empty'] = (arg: unknown[]) => isObjectEmpty(arg)
    objectMethod['notEmpty'] = (arg: unknown[]) => isObjectNotEmpty(arg)
    objectMethod['orNull'] = (arg: unknown[]) => isObjectOrNull(arg)

    return objectMethod
  })() as ObjectMethods,

  ['boolean']: (() => {
    const objectMethod = (arg: unknown[]) => isBoolean(arg)

    objectMethod['orNull'] = (arg: unknown[]) => isBooleanOrNull(arg)

    return objectMethod
  })() as BooleanMethods,

  ['string']: (() => {
    const stringMethod = (arg: unknown[]) => isString(arg)

    stringMethod['orNull'] = (arg: unknown[]) => isStringOrNull(arg)
    stringMethod['empty'] = (arg: unknown[]) => isStringEmpty(arg)
    stringMethod['notEmpty'] = (arg: unknown[]) => isStringNotEmpty(arg)
    stringMethod['binary'] = (arg: unknown[]) => isBinaryString(arg)
    stringMethod['alpha'] = (arg: unknown) => isAlpha(arg)
    stringMethod['numeric'] = (arg: unknown) => isNumeric(arg)
    stringMethod['alphanumeric'] = (arg: unknown) => isAlphanumeric(arg)
    stringMethod['base64'] = (arg: unknown) => isBase64(arg)

    return stringMethod
  })() as StringMethods,

  ['function']: (() => {
    const functionMethod = (arg: unknown[]) => isFunction(arg)

    functionMethod['async'] = (arg: unknown[]) => isAsyncFunction(arg)
    functionMethod['generator'] = (arg: unknown[]) => isGeneratorFunction(arg)

    return functionMethod
  })() as FunctionMethods,

  ['promise']: (() => {
    const promiseMethod = (arg: unknown[]) => isPromise(arg)

    promiseMethod['fullfilled'] = (arg: unknown[]) => isFullfilledPromise(arg)
    promiseMethod['rejected'] = (arg: unknown[]) => isRejectedPromise(arg)
    promiseMethod['pending'] = (arg: unknown[]) => isPendingPromise(arg)

    return promiseMethod
  })() as PromiseMethods,

  // ==== normal methods ====

  ['map']: (arg: unknown) => isMap(arg), //
  ['set']: (arg: unknown) => isSet(arg), //
  odd: (arg: unknown) => isOdd(arg), //
  even: (arg: unknown) => isEven(arg), //
  ['bigInt']: (arg: unknown) => isBigInt(arg), //
  ['null']: (arg: unknown) => isNull(arg), //
  ['undefined']: (arg: unknown) => isUndefined(arg), //
  ['symbol']: (arg: unknown) => isSymbol(arg), //
  ['primitive']: (arg: unknown) => isPrimitive(arg), //
  email: (arg: unknown) => isEmail(arg), //
  ['url']: (arg: unknown) => isUrl(arg), //
  ipv4: (arg: unknown) => isIPv4(arg),
  ipv6: (arg: unknown) => isIPv6(arg),
  ip: (arg: unknown) => isIP(arg),
  ['date']: (arg: unknown) => isDate(arg),
  ['regExp']: (arg: unknown) => isRegExp(arg),
  ['error']: (arg: unknown) => isError(arg),
  falsy: (arg: unknown) => isFalsy(arg),
  truthy: (arg: unknown) => isTruthy(arg),
  uuid: (arg: unknown) => isUUID(arg),
  uuidv3: (arg: unknown) => isUUIDv3(arg),
  uuidv4: (arg: unknown) => isUUIDv4(arg),
  uuidv5: (arg: unknown) => isUUIDv5(arg),
  window: () => isWindow(),
  node: () => isNode(),
  browser: () => isBrowser(),
  jsDom: () => isJsDom(),
  webWorker: () => isWebWorker(),
  bun: () => isBun(),
  mac: () => isMac(),
  linux: () => isLinux(),
  windows: () => isWindows(),
  ipad: () => isIpad(),
  iphone: () => isIphone(),
  ipod: () => isIpod(),
  android: () => isAndroid(),
  androidPhone: () => isAndroidPhone(),
  androidTablet: () => isAndroidTablet(),
  mobile: () => isMobile(),
  tablet: () => isTablet(),
  desktop: () => isDesktop(),
  ios: () => isIos(),
  chrome: () => isChrome(),
  firefox: () => isFirefox(),
  opera: () => isOpera(),
  operaMini: () => isOperaMini(),
  safari: () => isSafari(),
  edge: () => isEdge(),
  ie: () => isIe()
}
