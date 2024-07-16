import { isString } from './primitive'

export const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}$/
export const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/

export const isIPv4 = <T>(arg: T) => isString(arg) && ipv4Regex.test(arg as string)

export const isIPv6 = <T>(arg: T) => isString(arg) && ipv6Regex.test(arg as string)

export const isIP = <T>(arg: T) => isString(arg) && (isIPv4(arg) || isIPv6(arg))
