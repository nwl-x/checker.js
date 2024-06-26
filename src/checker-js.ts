export type Empty = (value: unknown) => boolean

// ==== Regex ====

export const alphaRegex = /^[A-Za-z]+$/
export const alphanumericRegex = /^[A-Za-z0-9]+$/

export const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}$/
export const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/

export const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
export const uuidv3Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-3[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
export const uuidv4Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
export const uuidv5Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-5[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/

export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
export const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

// ==== Type Guards ====

export const hasToStringTag = (arg: unknown): arg is { [Symbol.toStringTag]: string } => typeof arg === 'function' && Symbol.toStringTag in arg

export const getType = (arg: unknown): string => Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()

// ==== Array checker ====

export const isArray: Empty = (arg) => Array.isArray(arg)

export const isArrayOrNull: Empty = (arg) => isArray(arg) || isNull(arg)

export const isArrayOfNumbers: Empty = (arg) => Array.isArray(arg) && isArrayNotEmpty(arg) && arg.every((item: unknown) => isNumber(item))

export const isArrayOfStrings: Empty = (arg) => Array.isArray(arg) && isArrayNotEmpty(arg) && arg.every((item: unknown) => isString(item))

export const isArrayOfObjects: Empty = (arg) => Array.isArray(arg) && isArrayNotEmpty(arg) && arg.every((item: unknown) => isObject(item))

export const isArrayOfBooleans: Empty = (arg) => Array.isArray(arg) && isArrayNotEmpty(arg) && arg.every((item: unknown) => isBoolean(item))

export const isArrayNotEmpty: Empty = (arg) => Array.isArray(arg) && arg.length > 0

// ==== Object checker ====

export const isObject: Empty = (arg) => typeof arg === 'object' && !isNull(arg) && !isArray(arg)

export const isObjectOrNull: Empty = (arg) => isObject(arg) || isNull(arg)

export const isObjectNotEmpty: Empty = (arg) => isObject(arg) && !isUndefined(arg) && Object.keys(arg as object).length > 0

// ==== Primitive checker ====

export const isNumber: Empty = (arg) => typeof arg === 'number'

export const isString: Empty = (arg) => typeof arg === 'string' || arg instanceof String

export const isBoolean: Empty = (arg) => typeof arg === 'boolean'

export const isUndefined: Empty = (arg) => typeof arg === 'undefined'

export const isNull: Empty = (arg) => typeof arg === 'object' && arg === null

export const isSymbol: Empty = (arg) => typeof arg === 'symbol'

export const isBigInt: Empty = (arg) => typeof arg === 'bigint'

export const isPrimitive: Empty = (arg) => isNumber(arg) || isString(arg) || isBoolean(arg) || isUndefined(arg) || isNull(arg) || isSymbol(arg)

// ==== Primitive mixins checker ====

export const isBooleanOrNull: Empty = (arg) => isBoolean(arg) || isNull(arg)

export const isStringOrNull: Empty = (arg) => isString(arg) || isNull(arg)

export const isStringNotEmpty: Empty = (arg) => isString(arg) && (arg as string).trim() !== ''

export const isNumberOrNull: Empty = (arg) => isNumber(arg) || isNull(arg)

export const isPositiveNumber: Empty = (arg) => isNumber(arg) && (arg as number) >= 0

export const isNegativeNumber: Empty = (arg) => isNumber(arg) && (arg as number) < 0

// ==== Promise checker ====

export const isPromise: Empty = (arg) => arg instanceof Promise

export const isFullfilledPromise: Empty = (arg) => arg instanceof Promise && typeof arg.then === 'function'

export const isRejectedPromise: Empty = (arg) => arg instanceof Promise && typeof arg.catch === 'function'

export const isPendingPromise: Empty = (arg) => isPromise(arg) && !isFullfilledPromise(arg) && !isRejectedPromise(arg)

// ==== Function checker ====

export const isFunction: Empty = (arg) => typeof arg === 'function'

export const isAsyncFunction: Empty = (arg) => hasToStringTag(arg) && arg[Symbol.toStringTag] === 'AsyncFunction'

export const isGeneratorFunction: Empty = (arg) => hasToStringTag(arg) && arg[Symbol.toStringTag] === 'GeneratorFunction'

// ==== IP checker ====

export const isIPv4: Empty = (arg) => isString(arg) && ipv4Regex.test(arg as string)

export const isIPv6: Empty = (arg) => isString(arg) && ipv6Regex.test(arg as string)

// ==== UUID checker ====

export const isUUID: Empty = (arg) => isString(arg) && uuidRegex.test(arg as string)

export const isUUIDv3: Empty = (arg) => isString(arg) && uuidv3Regex.test(arg as string)

export const isUUIDv4: Empty = (arg) => isString(arg) && uuidv4Regex.test(arg as string)

export const isUUIDv5: Empty = (arg) => isString(arg) && uuidv5Regex.test(arg as string)

// ==== Misc checker ====

export const isAlpha: Empty = (arg) => isString(arg) && alphaRegex.test(arg as string)

export const isAlphanumeric: Empty = (arg) => isString(arg) && alphanumericRegex.test(arg as string)

export const isDate: Empty = (arg) => arg instanceof Date && !isNaN(arg.valueOf())

export const isRegExp: Empty = (arg) => arg instanceof RegExp

export const isMap: Empty = (arg) => arg instanceof Map

export const isSet: Empty = (arg) => arg instanceof Set

export const isError: Empty = (arg) => arg instanceof Error

export const isNaNValue: Empty = (arg) => typeof arg === 'number' && isNaN(arg)

export const isInfinite: Empty = (arg) => arg === Infinity || arg === -Infinity

export const isOdd: Empty = (arg) => typeof arg === 'number' && Math.abs(arg % 2) === 1

export const isEven: Empty = (arg) => typeof arg === 'number' && Math.abs(arg % 2) === 0

export const isEmail: Empty = (arg) => isString(arg) && emailRegex.test(arg as string)

export const isUrl: Empty = (arg) => isString(arg) && urlRegex.test(arg as string)

export const isFalsy: Empty = (arg) => !arg
