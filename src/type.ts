export declare const alphaRegex: RegExp
export declare const numericRegex: RegExp
export declare const alphanumericRegex: RegExp
export declare const ipv4Regex: RegExp
export declare const ipv6Regex: RegExp
export declare const uuidRegex: RegExp
export declare const uuidv3Regex: RegExp
export declare const uuidv4Regex: RegExp
export declare const uuidv5Regex: RegExp
export declare const emailRegex: RegExp
export declare const urlRegex: RegExp
export declare const getType: (arg: unknown) => string
export declare const hasToStringTag: (arg: unknown) => arg is {
  [Symbol.toStringTag]: string
}
export declare const is: <T>(type: string, arg: T) => boolean
export declare const isNode: string | false
export declare const isBrowser: boolean
export declare const isBoolean: <T>(arg: T) => boolean
export declare const isBooleanOrNull: <T>(arg: T) => boolean
export declare const isBigInt: <T>(arg: T) => boolean
export declare const isNumber: <T>(arg: T) => boolean
export declare const isNull: <T>(arg: T) => boolean
export declare const isString: <T>(arg: T) => boolean
export declare const isUndefined: <T>(arg: T) => boolean
export declare const isSymbol: <T>(arg: T) => boolean
export declare const isPrimitive: <T>(arg: T) => boolean
export declare const isStringOrNull: <T>(arg: T) => boolean
export declare const isStringNotEmpty: <T>(arg: T) => boolean
export declare const isAlpha: <T>(arg: T) => boolean
export declare const isNumeric: <T>(arg: T) => boolean
export declare const isAlphanumeric: <T>(arg: T) => boolean
export declare const isNumberOrNull: <T>(arg: T) => boolean
export declare const isEmail: <T>(arg: T) => boolean
export declare const isUrl: <T>(arg: T) => boolean
export declare const isBinaryString: <T>(arg: T) => boolean
export declare const isPositiveNumber: <T>(arg: T) => boolean
export declare const isNegativeNumber: <T>(arg: T) => boolean
export declare const isInfinite: <T>(arg: T) => boolean
export declare const isOdd: <T>(arg: T) => boolean
export declare const isEven: <T>(arg: T) => boolean
export declare const isArray: <T>(arg: T[]) => boolean
export declare const isMap: <T>(arg: T) => boolean
export declare const isSet: <T>(arg: T) => boolean
export declare const isArrayOrNull: <T>(arg: T) => boolean
export declare const isArrayOfNumbers: <T>(arg: T[]) => boolean
export declare const isArrayOfStrings: <T>(arg: T[]) => boolean
export declare const isArrayOfObjects: <T>(arg: T[]) => boolean
export declare const isArrayOfBooleans: <T>(arg: T[]) => boolean
export declare const isArrayNotEmpty: <T>(arg: T[]) => boolean
export declare const isObject: <T>(arg: T) => boolean
export declare const isObjectOrNull: <T>(arg: T) => boolean
export declare const isObjectNotEmpty: <T>(arg: T) => boolean
export declare const isPromise: <T>(arg: T) => boolean
export declare const isFullfilledPromise: <T>(arg: T) => boolean
export declare const isRejectedPromise: <T>(arg: T) => boolean
export declare const isPendingPromise: <T>(arg: T) => boolean
export declare const isFunction: <T>(arg: T) => boolean
export declare const isAsyncFunction: <T>(arg: T) => boolean
export declare const isGeneratorFunction: <T>(arg: T) => boolean
export declare const isIPv4: <T>(arg: T) => boolean
export declare const isIPv6: <T>(arg: T) => boolean
export declare const isIP: <T>(arg: T) => boolean
export declare const isUUID: <T>(arg: T) => boolean
export declare const isUUIDv3: <T>(arg: T) => boolean
export declare const isUUIDv4: <T>(arg: T) => boolean
export declare const isUUIDv5: <T>(arg: T) => boolean
export declare const isDate: <T>(arg: T) => boolean
export declare const isRegExp: <T>(arg: T) => boolean
export declare const isError: <T>(arg: T) => boolean
export declare const isFalsy: <T>(arg: T) => boolean
export declare const isTruthy: <T>(arg: T) => boolean

export type TypeCheck =
  | 'boolean'
  | 'boolean-or-null'
  | 'bigint'
  | 'number'
  | 'null'
  | 'string'
  | 'undefined'
  | 'symbol'
  | 'primitive'
  | 'string-or-null'
  | 'string-not-empty'
  | 'alpha'
  | 'numeric'
  | 'alphanumeric'
  | 'number-or-null'
  | 'email'
  | 'url'
  | 'binary-string'
  | 'positive-number'
  | 'negative-number'
  | 'infinite'
  | 'odd'
  | 'even'
  | 'array'
  | 'map'
  | 'set'
  | 'array-or-null'
  | 'array-of-numbers'
  | 'array-of-strings'
  | 'array-of-objects'
  | 'array-of-booleans'
  | 'array-not-empty'
  | 'object'
  | 'object-or-null'
  | 'object-not-empty'
  | 'promise'
  | 'fullfilled-promise'
  | 'rejected-promise'
  | 'pending-promise'
  | 'function'
  | 'async-function'
  | 'generator-function'
  | 'ipv4'
  | 'ipv6'
  | 'ip'
  | 'uuid'
  | 'uuid-v3'
  | 'uuid-v4'
  | 'uuid-v5'
  | 'date'
  | 'regexp'
  | 'error'
  | 'falsy'
  | 'truthy'
