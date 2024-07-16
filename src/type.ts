export declare const isArray: <T>(arg: T[]) => boolean
export declare const isMap: <T>(arg: T) => boolean
export declare const isSet: <T>(arg: T) => boolean
export declare const isArrayOrNull: <T>(arg: T) => boolean
export declare const isArrayOfNumbers: <T>(arg: T[]) => boolean
export declare const isArrayOfStrings: <T>(arg: T[]) => boolean
export declare const isArrayOfObjects: <T>(arg: T[]) => boolean
export declare const isArrayOfBooleans: <T>(arg: T[]) => boolean
export declare const isArrayEmpty: <T>(arg: T[]) => boolean
export declare const isArrayNotEmpty: <T>(arg: T[]) => boolean
export declare const isChrome: () => boolean
export declare const isFirefox: () => boolean
export declare const isOpera: () => boolean
export declare const isOperaMini: () => boolean
export declare const isSafari: () => boolean
export declare const isEdge: () => boolean
export declare const isIe: () => boolean
export declare const isWindow: () => boolean
export declare const isNode: () => boolean
export declare const isBrowser: () => boolean
export declare const isJsDom: () => boolean
export declare const isWebWorker: () => boolean
export declare const isBun: () => boolean
export declare const isMac: () => boolean
export declare const isLinux: () => boolean
export declare const isWindows: () => boolean
export declare const hasToStringTag: (arg: unknown) => arg is { [Symbol.toStringTag]: string }
export declare const isFunction: <T>(arg: T) => boolean
export declare const isAsyncFunction: <T>(arg: T) => boolean
export declare const isGeneratorFunction: <T>(arg: T) => boolean
export declare const ipv4Regex: RegExp
export declare const ipv6Regex: RegExp
export declare const isIPv4: <T>(arg: T) => boolean
export declare const isIPv6: <T>(arg: T) => boolean
export declare const isIP: <T>(arg: T) => boolean
export declare const isDate: <T>(arg: T) => boolean
export declare const isRegExp: <T>(arg: T) => boolean
export declare const isError: <T>(arg: T) => boolean
export declare const isFalsy: <T>(arg: T) => boolean
export declare const isTruthy: <T>(arg: T) => boolean
export declare const isPositiveNumber: <T>(arg: T) => boolean
export declare const isNegativeNumber: <T>(arg: T) => boolean
export declare const isInfinite: <T>(arg: T) => boolean
export declare const isOdd: <T>(arg: T) => boolean
export declare const isEven: <T>(arg: T) => boolean
export declare const isDecimal: <T>(arg: T) => boolean
export declare const isGreaterThan: <T>(arg: T, compare: T) => boolean
export declare const isLessThan: <T>(arg: T, compare: T) => boolean
export declare const isGreaterEqualThan: <T>(arg: T, compare: T) => boolean
export declare const isLessEqualThan: <T>(arg: T, compare: T) => boolean
export declare const isBetween: <T>(arg: T, start: T, finish: T) => boolean
export declare const isBetweenEqual: <T>(arg: T, start: T, finish: T) => boolean
export declare const isObject: <T>(arg: T) => boolean
export declare const isObjectOrNull: <T>(arg: T) => boolean
export declare const isObjectEmpty: <T>(arg: T) => boolean
export declare const isObjectNotEmpty: <T>(arg: T) => boolean
export declare const isIpad: () => boolean
export declare const isIphone: () => boolean
export declare const isIpod: () => boolean
export declare const isAndroid: () => boolean
export declare const isAndroidPhone: () => boolean
export declare const isAndroidTablet: () => boolean
export declare const isMobile: () => boolean
export declare const isTablet: () => boolean
export declare const isDesktop: () => boolean
export declare const isIos: () => boolean
export declare const isBoolean: <T>(arg: T) => boolean
export declare const isBooleanOrNull: <T>(arg: T) => boolean
export declare const isBigInt: <T>(arg: T) => boolean
export declare const isNumber: <T>(arg: T) => boolean
export declare const isNull: <T>(arg: T) => boolean
export declare const isString: <T>(arg: T) => boolean
export declare const isUndefined: <T>(arg: T) => boolean
export declare const isSymbol: <T>(arg: T) => boolean
export declare const isPrimitive: <T>(arg: T) => boolean
export declare const isPromise: <T>(arg: T) => boolean
export declare const isFullfilledPromise: <T>(arg: T) => boolean
export declare const isRejectedPromise: <T>(arg: T) => boolean
export declare const isPendingPromise: <T>(arg: T) => boolean
export declare const alphaRegex: RegExp
export declare const numericRegex: RegExp
export declare const alphanumericRegex: RegExp
export declare const emailRegex: RegExp
export declare const base64Regex: RegExp
export declare const urlRegex: RegExp
export declare const isStringOrNull: <T>(arg: T) => boolean
export declare const isStringEmpty: <T>(arg: T) => boolean
export declare const isStringNotEmpty: <T>(arg: T) => boolean
export declare const isAlpha: <T>(arg: T) => boolean
export declare const isNumeric: <T>(arg: T) => boolean
export declare const isAlphanumeric: <T>(arg: T) => boolean
export declare const isNumberOrNull: <T>(arg: T) => boolean
export declare const isEmail: <T>(arg: T) => boolean
export declare const isUrl: <T>(arg: T) => boolean
export declare const isBinaryString: <T>(arg: T) => boolean
export declare const isBase64: <T>(arg: T) => boolean
export declare const getType: (arg: unknown) => string
export declare const uuidRegex: RegExp
export declare const uuidv3Regex: RegExp
export declare const uuidv4Regex: RegExp
export declare const uuidv5Regex: RegExp
export declare const isUUID: <T>(arg: T) => boolean
export declare const isUUIDv3: <T>(arg: T) => boolean
export declare const isUUIDv4: <T>(arg: T) => boolean
export declare const isUUIDv5: <T>(arg: T) => boolean

export type MethodNoParam = (arg: unknown) => boolean
export type MethodOneParam = ((arg: unknown) => boolean) | ((arg: unknown[]) => boolean)
export type MethodTwoParams = ((arg: unknown, arg2: unknown) => boolean) | ((arg: unknown[]) => boolean)
export type MethodThreeParams =
  | ((arg: unknown, arg2: unknown, arg3: unknown) => boolean)
  | ((arg: unknown[]) => boolean)
export type ArrayMethods = {
  (arg: unknown[]): boolean
  number: MethodOneParam
  string: MethodOneParam
  object: MethodOneParam
  boolean: MethodOneParam
  empty: MethodOneParam
  notEmpty: MethodOneParam
  orNull: MethodOneParam
}
export type NumberMethods = {
  (arg: unknown): boolean
  positive: MethodOneParam
  negative: MethodOneParam
  infinite: MethodOneParam
  orNull: MethodOneParam
  decimal: MethodOneParam
  greaterThan: MethodTwoParams
  greaterEqualThan: MethodTwoParams
  lessThan: MethodTwoParams
  lessEqualThan: MethodTwoParams
  between: MethodThreeParams
  betweenEqual: MethodThreeParams
}
export type ObjectMethods = {
  (arg: unknown): boolean
  empty: MethodOneParam
  notEmpty: MethodOneParam
  orNull: MethodOneParam
}
export type BooleanMethods = {
  (arg: unknown): boolean
  orNull: MethodOneParam
}
export type StringMethods = {
  (arg: unknown): boolean
  orNull: MethodOneParam
  empty: MethodOneParam
  notEmpty: MethodOneParam
  binary: MethodOneParam
  alpha: MethodOneParam
  numeric: MethodOneParam
  alphanumeric: MethodOneParam
  base64: MethodOneParam
}
export type FunctionMethods = {
  (arg: unknown): boolean
  async: MethodOneParam
  generator: MethodOneParam
}
export type PromiseMethods = {
  (arg: unknown): boolean
  fullfilled: MethodOneParam
  rejected: MethodOneParam
  pending: MethodOneParam
}
export type IsMethods = {
  array: ArrayMethods
  number: NumberMethods
  object: ObjectMethods
  boolean: BooleanMethods
  string: StringMethods
  function: FunctionMethods
  promise: PromiseMethods
  map: MethodOneParam
  set: MethodOneParam
  odd: MethodOneParam
  even: MethodOneParam
  bigInt: MethodOneParam
  null: MethodOneParam
  undefined: MethodOneParam
  symbol: MethodOneParam
  primitive: MethodOneParam
  email: MethodOneParam
  url: MethodOneParam
  ipv4: MethodOneParam
  ipv6: MethodOneParam
  ip: MethodOneParam
  date: MethodOneParam
  regExp: MethodOneParam
  error: MethodOneParam
  falsy: MethodOneParam
  truthy: MethodOneParam
  uuid: MethodOneParam
  uuidv3: MethodOneParam
  uuidv4: MethodOneParam
  uuidv5: MethodOneParam
  window: MethodNoParam
  node: MethodNoParam
  browser: MethodNoParam
  jsDom: MethodNoParam
  webWorker: MethodNoParam
  bun: MethodNoParam
  mac: MethodNoParam
  linux: MethodNoParam
  windows: MethodNoParam
  ipad: MethodNoParam
  iphone: MethodNoParam
  ipod: MethodNoParam
  android: MethodNoParam
  androidPhone: MethodNoParam
  androidTablet: MethodNoParam
  mobile: MethodNoParam
  tablet: MethodNoParam
  desktop: MethodNoParam
  ios: MethodNoParam
  chrome: MethodNoParam
  firefox: MethodNoParam
  opera: MethodNoParam
  operaMini: MethodNoParam
  safari: MethodNoParam
  edge: MethodNoParam
  ie: MethodNoParam
}
export declare const is: IsMethods
