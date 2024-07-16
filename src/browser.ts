const userAgent = ((navigator && navigator.userAgent) || '').toLowerCase()

export const isChrome = () => /chrome|crios/i.test(userAgent)

export const isFirefox = () => /firefox/i.test(userAgent)

export const isOpera = () => /opera|opr/i.test(userAgent)

export const isOperaMini = () => /opera mini/i.test(userAgent)

export const isSafari = () => /safari/i.test(userAgent)

export const isEdge = () => /edge/i.test(userAgent)

export const isIe = () => /compatible|msie|trident/i.test(userAgent)
