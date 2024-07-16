export const isDate = <T>(arg: T) => arg instanceof Date && !Number.isNaN(arg.valueOf())

export const isRegExp = <T>(arg: T) => arg instanceof RegExp

export const isError = <T>(arg: T) => arg instanceof Error

export const isFalsy = <T>(arg: T) => !arg || arg === '' || arg === 0 || arg === null || arg === undefined

export const isTruthy = <T>(arg: T) => arg === true
