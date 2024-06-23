export type Empty = (value: unknown) => boolean

// ==== Regex ====

const alphaRegex = /^[A-Za-z]+$/
const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}$/
const urlRegex =
  /(((https?:\/\/)((?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+(_|-)?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+(_|-)?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?))\/?)([^\s"')\]]*)?/
const emailRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+(?:[.-]?[a-zA-Z0-9]+){0,127}(?:\.\w{2,24}))+$/
const alphanumericRegex = /^[A-Za-z0-9]+$/
const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
const uuidv3Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-3[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
const uuidv4Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
const uuidv5Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-5[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/

// ==== Type Guards ====

export const hasToStringTag = (value: unknown): value is { [Symbol.toStringTag]: string } => typeof value === 'function' && Symbol.toStringTag in value

// ==== Array checker ====

export const isArray: Empty = (arg) => Array.isArray(arg)

export const isArrayOfNumbers: Empty = (arg) => Array.isArray(arg) && isArrayNotEmpty(arg) && arg.every((item: unknown) => isNumber(item))

export const isArrayOfStrings: Empty = (arg) => Array.isArray(arg) && isArrayNotEmpty(arg) && arg.every((item: unknown) => isString(item))

export const isArrayOfObjects: Empty = (arg) => Array.isArray(arg) && isArrayNotEmpty(arg) && arg.every((item: unknown) => isObject(item))

export const isArrayOfBooleans: Empty = (arg) => Array.isArray(arg) && isArrayNotEmpty(arg) && arg.every((item: unknown) => isBoolean(item))

export const isArrayNotEmpty: Empty = (arg) => Array.isArray(arg) && arg.length > 0

export const isArrayOrNull: Empty = (arg) => isArray(arg) || isNull(arg)

// ==== Object checker ====

export const isObject: Empty = (arg) => typeof arg === 'object' && !isNull(arg) && !isArray(arg)

export const isObjectNotEmpty: Empty = (arg) => isObject(arg) && !isUndefined(arg) && Object.keys(arg as object).length > 0

export const isObjectOrNull: Empty = (arg) => isObject(arg) || isNull(arg)

// ==== Primitive checker ====

export const isNumber: Empty = (arg) => typeof arg === 'number'

export const isString: Empty = (arg) => typeof arg === 'string' || arg instanceof String

export const isBoolean: Empty = (arg) => typeof arg === 'boolean'

export const isUndefined: Empty = (arg) => typeof arg === 'undefined'

export const isNull: Empty = (arg) => typeof arg === 'object' && arg === null

export const isSymbol: Empty = (arg) => typeof arg === 'symbol'

export const isBigInt: Empty = (arg) => typeof arg === 'bigint'

// ==== Primitive mixins checker ====

export const isBooleanOrNull: Empty = (arg) => isBoolean(arg) || isNull(arg)

export const isStringOrNull: Empty = (arg) => isString(arg) || isNull(arg)

export const isStringNotEmpty: Empty = (arg) => isString(arg) && (arg as string).trim() !== ''

export const isNumberOrNull: Empty = (arg) => isNumber(arg) || isNull(arg)

export const isPositiveNumber: Empty = (arg) => isNumber(arg) && (arg as number) >= 0

export const isNegativeNumber: Empty = (arg) => isNumber(arg) && (arg as number) < 0

// ==== Promise checker ====

export const isPromise: Empty = (arg) => arg instanceof Promise

export const isFulfilledPromise: Empty = (arg) => arg instanceof Promise && typeof arg.then === 'function'

export const isRejectedPromise: Empty = (arg) => arg instanceof Promise && typeof arg.catch === 'function'

export const isPendingPromise: Empty = (arg) => isPromise(arg) && !isFulfilledPromise(arg) && !isRejectedPromise(arg)

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

export const isDate: Empty = (arg) => arg instanceof Date

// ==== Plop checker ====

export const isEmail: Empty = (arg) => isString(arg) && emailRegex.test(arg as string)

export const isUrl: Empty = (arg) => isString(arg) && urlRegex.test(arg as string)
