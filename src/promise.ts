export const isPromise = <T>(arg: T) => arg instanceof Promise

export const isFullfilledPromise = <T>(arg: T) => arg instanceof Promise && typeof arg.then === 'function'

export const isRejectedPromise = <T>(arg: T) => arg instanceof Promise && typeof arg.catch === 'function'

export const isPendingPromise = <T>(arg: T) => isPromise(arg) && !isFullfilledPromise(arg) && !isRejectedPromise(arg)
