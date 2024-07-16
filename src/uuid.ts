import { isString } from './primitive'

export const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
export const uuidv3Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-3[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
export const uuidv4Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
export const uuidv5Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-5[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/

export const isUUID = <T>(arg: T) => isString(arg) && uuidRegex.test(arg as string)

export const isUUIDv3 = <T>(arg: T) => isString(arg) && uuidv3Regex.test(arg as string)

export const isUUIDv4 = <T>(arg: T) => isString(arg) && uuidv4Regex.test(arg as string)

export const isUUIDv5 = <T>(arg: T) => isString(arg) && uuidv5Regex.test(arg as string)
