import { getType } from './utils'

export const hasToStringTag = (arg: unknown): arg is { [Symbol.toStringTag]: string } => typeof arg === 'function' && Symbol.toStringTag in arg

export const isFunction = <T>(arg: T) => getType(arg) === 'function' || arg instanceof Function

export const isAsyncFunction = <T>(arg: T) => hasToStringTag(arg) && arg[Symbol.toStringTag] === 'AsyncFunction'

export const isGeneratorFunction = <T>(arg: T) => hasToStringTag(arg) && arg[Symbol.toStringTag] === 'GeneratorFunction'
