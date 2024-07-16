const userAgent = ((navigator && navigator.userAgent) || '').toLowerCase()

export const isIpad = () => /ipad.+?os (\d+)/.test(userAgent)

export const isIphone = () => (isIpad() ? false : /iphone(?:.+?os (\d+))?/.test(userAgent))

export const isIpod = () => /ipod.+?os (\d+)/.test(userAgent)

export const isAndroid = () => /android/.test(userAgent)

export const isAndroidPhone = () => /android/.test(userAgent) && /mobile/.test(userAgent)

export const isAndroidTablet = () => /android/.test(userAgent) && !/mobile/.test(userAgent)

export const isMobile = () => isIphone() || isIpod() || isAndroidPhone() || isAndroid()

export const isTablet = () => isIpad() || isAndroidTablet()

export const isDesktop = () => !isMobile() && !isTablet()

export const isIos = () => isIphone() || isIpad() || isIpod()
