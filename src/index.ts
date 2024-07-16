import {
  isArray,
  isMap,
  isSet,
  isArrayOrNull,
  isArrayOfNumbers,
  isArrayOfStrings,
  isArrayOfObjects,
  isArrayOfBooleans,
  isArrayNotEmpty,
  isArrayEmpty
} from './array'
import { isFunction, isAsyncFunction, isGeneratorFunction } from './function'
import { isIPv4, isIPv6, isIP } from './ip'
import { isDate, isRegExp, isError, isFalsy, isTruthy } from './misc'
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
import { isPromise, isFullfilledPromise, isRejectedPromise, isPendingPromise } from './promise'
import {
  isStringOrNull,
  isStringEmpty,
  isStringNotEmpty,
  isAlpha,
  isNumeric,
  isAlphanumeric,
  isEmail,
  isUrl,
  isBinaryString,
  isBase64
} from './string'
import { isUUID, isUUIDv3, isUUIDv4, isUUIDv5 } from './uuid'
import { is } from './is'
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

export {
  is,
  isArray,
  isMap,
  isSet,
  isArrayOrNull,
  isArrayOfNumbers,
  isArrayOfStrings,
  isArrayOfObjects,
  isArrayOfBooleans,
  isArrayNotEmpty,
  isArrayEmpty,
  isFunction,
  isAsyncFunction,
  isGeneratorFunction,
  isIPv4,
  isIPv6,
  isIP,
  isDate,
  isRegExp,
  isError,
  isFalsy,
  isTruthy,
  isPositiveNumber,
  isNegativeNumber,
  isInfinite,
  isOdd,
  isEven,
  isDecimal,
  isGreaterThan,
  isGreaterEqualThan,
  isLessThan,
  isLessEqualThan,
  isBetween,
  isBetweenEqual,
  isObject,
  isObjectOrNull,
  isObjectNotEmpty,
  isObjectEmpty,
  isBoolean,
  isBooleanOrNull,
  isBigInt,
  isNumber,
  isNull,
  isString,
  isUndefined,
  isSymbol,
  isPrimitive,
  isPromise,
  isFullfilledPromise,
  isRejectedPromise,
  isPendingPromise,
  isStringOrNull,
  isStringEmpty,
  isStringNotEmpty,
  isAlpha,
  isNumeric,
  isAlphanumeric,
  isNumberOrNull,
  isEmail,
  isUrl,
  isBinaryString,
  isBase64,
  isUUID,
  isUUIDv3,
  isUUIDv4,
  isUUIDv5,
  isWindow,
  isNode,
  isBrowser,
  isJsDom,
  isWebWorker,
  isBun,
  isMac,
  isLinux,
  isWindows,
  isIpad,
  isIphone,
  isIpod,
  isAndroid,
  isAndroidPhone,
  isAndroidTablet,
  isMobile,
  isTablet,
  isDesktop,
  isIos,
  isChrome,
  isFirefox,
  isOpera,
  isOperaMini,
  isSafari,
  isEdge,
  isIe
}
