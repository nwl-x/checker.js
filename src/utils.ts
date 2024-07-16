export const getType = (arg: unknown): string => Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
