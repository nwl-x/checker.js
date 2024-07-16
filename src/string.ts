import { isNull, isNumber, isString } from './primitive'

export const alphaRegex = /^[A-Za-z]+$/
export const numericRegex = /^[0-9]+$/
export const alphanumericRegex = /^[A-Za-z0-9]+$/

export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
export const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

export const isStringOrNull = <T>(arg: T) => isString(arg) || isNull(arg)

export const isStringNotEmpty = <T>(arg: T) => isString(arg) && (arg as string).trim() !== ''

export const isAlpha = <T>(arg: T) => isString(arg) && alphaRegex.test(arg as string)

export const isNumeric = <T>(arg: T) => isString(arg) && numericRegex.test(arg as string)

export const isAlphanumeric = <T>(arg: T) => isString(arg) && alphanumericRegex.test(arg as string)

export const isNumberOrNull = <T>(arg: T) => isNumber(arg) || isNull(arg)

export const isEmail = <T>(arg: T) => isString(arg) && emailRegex.test(arg as string)

export const isUrl = <T>(arg: T) => isString(arg) && urlRegex.test(arg as string)

export const isBinaryString = <T>(arg: T) =>
  isStringNotEmpty(arg) &&
  String(arg)
    .split('')
    .every((char) => ['0', '1'].includes(char))
