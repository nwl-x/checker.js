import { isObject } from './object'

const platform = ((navigator && navigator.platform) || '').toLowerCase()

export const isWindow = () => isObject(window) && 'setInterval' in window

export const isNode = () => isObject(process) && process.versions != null && process.versions.node != null

export const isBrowser = () => isObject(window) && isObject(window.document)

export const isJsDom = () =>
  (isObject(navigator) && isObject(navigator.userAgent) && ['Node.js', 'jsdom'].includes(navigator.userAgent)) ||
  (isObject(window) && window.name === 'nodejs')

export const isWebWorker = () =>
  isObject(self) && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope'

export const isBun = () => isObject(process) && process.versions != null && process.versions.bun != null

export const isMac = () => /mac/.test(platform)

export const isLinux = () => /linux/.test(platform) // && is.not.android();

export const isWindows = () => /win/.test(platform)
