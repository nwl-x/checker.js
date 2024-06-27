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

export const getType = (arg: unknown): string => Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()

export const hasToStringTag = (arg: unknown): arg is { [Symbol.toStringTag]: string } => typeof arg === 'function' && Symbol.toStringTag in arg

// ==== Array checker ====

export const isArray = <T>(arg: T[]) => Array.isArray(arg)

export const isArrayOrNull = <T>(arg: T) => isArray(arg as T[]) || isNull(arg)

export const isArrayOfNumbers = <T>(arg: T[]) => isArrayNotEmpty(arg) && arg.every((item: unknown) => isNumber(item))

export const isArrayOfStrings = <T>(arg: T[]) => isArrayNotEmpty(arg) && arg.every((item: unknown) => isString(item))

export const isArrayOfObjects = <T>(arg: T[]) => isArrayNotEmpty(arg) && arg.every((item: unknown) => isObject(item))

export const isArrayOfBooleans = <T>(arg: T[]) => isArrayNotEmpty(arg) && arg.every((item: unknown) => isBoolean(item))

export const isArrayNotEmpty = <T>(arg: T[]) => isArray(arg) && arg.length > 0

// ==== Object checker ====

export const isObject = <T>(arg: T) => getType(arg) === 'object' && !isNull(arg) && !isArray(arg as T[])

export const isObjectOrNull = <T>(arg: T) => isObject(arg) || isNull(arg)

export const isObjectNotEmpty = <T>(arg: T) => isObject(arg) && !isUndefined(arg) && Object.keys(arg as object).length > 0

// ==== Primitive checker ====

export const isNumber = <T>(arg: T) => getType(arg) === 'number' || arg instanceof Number

export const isString = <T>(arg: T) => getType(arg) === 'string' || arg instanceof String

export const isBoolean = <T>(arg: T) => getType(arg) === 'boolean' || arg instanceof Boolean

export const isUndefined = <T>(arg: T) => getType(arg) === 'undefined'

export const isNull = <T>(arg: T) => getType(arg) === 'null' || arg === null

export const isSymbol = <T>(arg: T) => getType(arg) === 'symbol' || arg instanceof Symbol

export const isBigInt = <T>(arg: T) => getType(arg) === 'bigint' || arg instanceof BigInt

export const isPrimitive = <T>(arg: T) => isNumber(arg) || isString(arg) || isBoolean(arg) || isUndefined(arg) || isNull(arg) || isSymbol(arg)

// ==== Primitive mixins checker ====

export const isBooleanOrNull = <T>(arg: T) => isBoolean(arg) || isNull(arg)

export const isStringOrNull = <T>(arg: T) => isString(arg) || isNull(arg)

export const isStringNotEmpty = <T>(arg: T) => isString(arg) && (arg as string).trim() !== ''

export const isNumberOrNull = <T>(arg: T) => isNumber(arg) || isNull(arg)

export const isPositiveNumber = <T>(arg: T) => isNumber(arg) && (arg as number) >= 0

export const isNegativeNumber = <T>(arg: T) => isNumber(arg) && (arg as number) < 0

// ==== Promise checker ====

export const isPromise = <T>(arg: T) => arg instanceof Promise

export const isFullfilledPromise = <T>(arg: T) => arg instanceof Promise && typeof arg.then === 'function'

export const isRejectedPromise = <T>(arg: T) => arg instanceof Promise && typeof arg.catch === 'function'

export const isPendingPromise = <T>(arg: T) => isPromise(arg) && !isFullfilledPromise(arg) && !isRejectedPromise(arg)

// ==== Function checker ====

export const isFunction = <T>(arg: T) => getType(arg) === 'function' || arg instanceof Function

export const isAsyncFunction = <T>(arg: T) => hasToStringTag(arg) && arg[Symbol.toStringTag] === 'AsyncFunction'

export const isGeneratorFunction = <T>(arg: T) => hasToStringTag(arg) && arg[Symbol.toStringTag] === 'GeneratorFunction'

// ==== IP checker ====

export const isIPv4 = <T>(arg: T) => isString(arg) && ipv4Regex.test(arg as string)

export const isIPv6 = <T>(arg: T) => isString(arg) && ipv6Regex.test(arg as string)

// ==== UUID checker ====

export const isUUID = <T>(arg: T) => isString(arg) && uuidRegex.test(arg as string)

export const isUUIDv3 = <T>(arg: T) => isString(arg) && uuidv3Regex.test(arg as string)

export const isUUIDv4 = <T>(arg: T) => isString(arg) && uuidv4Regex.test(arg as string)

export const isUUIDv5 = <T>(arg: T) => isString(arg) && uuidv5Regex.test(arg as string)

// ==== Misc checker ====

export const isAlpha = <T>(arg: T) => isString(arg) && alphaRegex.test(arg as string)

export const isAlphanumeric = <T>(arg: T) => isString(arg) && alphanumericRegex.test(arg as string)

export const isDate = <T>(arg: T) => arg instanceof Date && !isNaN(arg.valueOf())

export const isRegExp = <T>(arg: T) => arg instanceof RegExp

export const isMap = <T>(arg: T) => arg instanceof Map

export const isSet = <T>(arg: T) => arg instanceof Set

export const isError = <T>(arg: T) => arg instanceof Error

export const isNaNValue = <T>(arg: T) => getType(arg) === 'number' && isNaN(arg as number) && arg !== Infinity && arg !== -Infinity

export const isInfinite = <T>(arg: T) => arg === Infinity || arg === -Infinity

export const isOdd = <T>(arg: T) => getType(arg) === 'number' && Math.abs((arg as number) % 2) === 1

export const isEven = <T>(arg: T) => getType(arg) === 'number' && Math.abs((arg as number) % 2) === 0

export const isEmail = <T>(arg: T) => isString(arg) && emailRegex.test(arg as string)

export const isUrl = <T>(arg: T) => isString(arg) && urlRegex.test(arg as string)

export const isFalsy = <T>(arg: T) => !arg || arg === '' || arg === 0 || arg === null || arg === undefined
