# checker.js

A set of boilerplate utilities for checking any type of values ​​without headaches or common mistakes

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/nwl-x/checker.js/release.yml)
[![codecov](https://codecov.io/github/nwl-x/checker.js/graph/badge.svg?token=3S7NXTH8RE)](https://codecov.io/github/nwl-x/checker.js)
![GitHub top language](https://img.shields.io/github/languages/top/nwl-x/checker.js?logo=typescript)
![GitHub License](https://img.shields.io/github/license/nwl-x/checker.js)
![NPM Downloads](https://img.shields.io/npm/dw/%40nawael%2Fchecker.js?logo=npm)
![NPM Version](https://img.shields.io/npm/v/%40nawael%2Fchecker.js)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40nawael%2Fchecker.js)

![Banner](https://raw.githubusercontent.com/nwl-x/checker.js/main/checker-banner.png)

## Installation

### With [pnpm](https://pnpm.io/fr/)

```bash
pnpm install @nawael/checker.js --save
```

#### With [npm](https://www.npmjs.com/)

```bash
npm install @nawael/checker.js --save
```

#### With [yarn](https://yarnpkg.com/)

```bash
yarn add @nawael/checker.js --save
```

## Integration

#### For [CommonJS](https://nodejs.org/docs/latest/api/modules.html#modules-commonjs-modules)

```js
const { isArray, isString, isNumber, ... } = require('@nawael/checker.js')
```

#### For [ESM](https://nodejs.org/api/esm.html#esm_ecmascript_modules)

```js
import { isArray, isString, isNumber, ... } from '@nawael/checker.js'
```

## Usage examples

<details>
<summary>Works with Object</summary>

```js
// instead of using typeof
if (typeof arg === 'object') {
  // ...some stuff
  // But if we do Object.keys(arg) we throw an error if arg is null! 😱
  // TypeError: Cannot convert undefined or null to object
}

// use isObject
import { isObject } from '@nawael/checker.js'

isObject(arg)
// ✅ true if arg = {}
// ❌ false if arg = null cause typeof null === 'object'
// ❌ false if arg = [] cause typeof [] === 'object'
```

</details>

<details>
<summary>Works with Number</summary>

```js
// instead of using typeof
if (typeof arg === 'number') {
  // some stuff
}

// use isNumber
import { isNumber } from '@nawael/checker.js'

isNumber(arg)
// ✅ true if arg = 0 or arg = Infinity or -Infinity or
// ✅ true if arg = new Number() cause typeof new Number() === 'object'
// ❌ false if arg = NaN cause NaN is a number and we need to avoid NaN
// 😱 so we must check Object.prototype.toString.call(arg) === '[object Number]'
```

</details>

<details>
<summary>Standalone "is" API</summary>

> [!TIP]
> All APIs are available in the standalone "is" API

```js
// instead of importing all API
import { isArray, isString, isNumber, ... } from '@nawael/checker.js'

// use "is" API and avoid boring imports
import { is } from '@nawael/checker.js'

is.array(arg) // isArray(arg)
is.string(arg) // isString(arg)
is.number(arg) // isNumber(arg)

// ...and so on
```

</details>

## Available APIs

### primitive checker

| APIs                 | standalone is         |
| -------------------- | --------------------- |
| isBoolean(arg)       | is.boolean(arg)       |
| isBooleanOrNull(arg) | is.booleanOrNull(arg) |
| isBigInt(arg)        | is.bigInt(arg)        |
| isNumber(arg)        | is.number(arg)        |
| isNull(arg)          | is.null(arg)          |
| isString(arg)        | is.string(arg)        |
| isUndefined(arg)     | is.undefined(arg)     |
| isSymbol(arg)        | is.symbol(arg)        |
| isPrimitive(arg)     | is.primitive(arg)     |

### String checker

| APIs                  | standalone is               |
| --------------------- | --------------------------- |
| isStringOrNull(arg)   | is.string.orNull(arg)       |
| isStringEmpty(arg)    | is.string.empty(arg)        |
| isStringNotEmpty(arg) | is.string.notEmpty(arg)     |
| isAlpha(arg)          | is.string.alpha(arg)        |
| isNumeric(arg)        | is.string.numeric(arg)      |
| isAlphanumeric(arg)   | is.string.alphanumeric(arg) |
| isEmail(arg)          | is.string.email(arg)        |
| isUrl(arg)            | is.string.url(arg)          |
| isBinaryString(arg)   | is.string.binary(arg)       |
| isBase64(arg)         | is.string.base64(arg)       |

### Number checker

| APIs                               | standalone is                              |
| ---------------------------------- | ------------------------------------------ |
| isPositiveNumber(arg)              | is.number.positive(arg)                    |
| isNegativeNumber(arg)              | is.number.negative(arg)                    |
| isInfinite(arg)                    | is.number.infinite(arg)                    |
| isOdd(arg)                         | is.number.odd(arg)                         |
| isEven(arg)                        | is.number.even(arg)                        |
| isNumberOrNull(arg)                | is.number.orNull(arg)                      |
| isDecimal(arg)                     | is.number.decimal(arg)                     |
| isGreaterThan(arg, compare)        | is.number.greaterThan(arg, compare)        |
| isGreaterEqualThan(arg, compare)   | is.number.greaterEqualThan(arg, compare)   |
| isLessThan(arg, compare)           | is.number.lessThan(arg, compare)           |
| isLessEqualThan(arg, compare)      | is.number.lessEqualThan(arg, compare)      |
| isBetween(arg, start, finish)      | is.number.between(arg, start, finish)      |
| isBetweenEqual(arg, start, finish) | is.number.betweenEqual(arg, start, finish) |

### Object checker

| APIs                  | standalone is           |
| --------------------- | ----------------------- |
| isObject(arg)         | is.object(arg)          |
| isObjectOrNull(arg)   | is.object.orNull(arg)   |
| isObjectNotEmpty(arg) | is.object.notEmpty(arg) |
| isObjectEmpty(arg)    | is.object.empty(arg)    |

### Array checker

| APIs                   | standalone is          |
| ---------------------- | ---------------------- |
| isArray(arg)           | is.array(arg)          |
| isMap(arg)             | is.map(arg)            |
| isSet(arg)             | is.set(arg)            |
| isArrayOrNull(arg)     | is.array.orNull(arg)   |
| isArrayOfNumbers(arg)  | is.array.number(arg)   |
| isArrayOfStrings(arg)  | is.array.string(arg)   |
| isArrayOfObjects(arg)  | is.array.object(arg)   |
| isArrayOfBooleans(arg) | is.array.boolean(arg)  |
| isArrayNotEmpty(arg)   | is.array.notEmpty(arg) |
| isArrayEmpty(arg)      | is.array.empty(arg)    |

### Function checker

| APIs                     | standalone is     |
| ------------------------ | ----------------- |
| isFunction(arg)          | is.function(arg)  |
| isAsyncFunction(arg)     | is.async(arg)     |
| isGeneratorFunction(arg) | is.generator(arg) |

### Promise checker

| APIs                     | standalone is              |
| ------------------------ | -------------------------- |
| isPromise(arg)           | is.promise(arg)            |
| isFullfilledPromise(arg) | is.promise.fullfilled(arg) |
| isRejectedPromise(arg)   | is.promise.rejected(arg)   |
| isPendingPromise(arg)    | is.promise.pending(arg)    |

### Misc checker

| APIs          | standalone is  |
| ------------- | -------------- |
| isDate(arg)   | is.date(arg)   |
| isRegExp(arg) | is.regExp(arg) |
| isError(arg)  | is.error(arg)  |
| isFalsy(arg)  | is.falsy(arg)  |
| isTruthy(arg) | is.truthy(arg) |

### UUID checker

| APIs          | standalone is  |
| ------------- | -------------- |
| isUUID(arg)   | is.uuid(arg)   |
| isUUIDv3(arg) | is.uuidv3(arg) |
| isUUIDv4(arg) | is.uuidv4(arg) |
| isUUIDv5(arg) | is.uuidv5(arg) |

### Environment checker

| APIs          | standalone is  |
| ------------- | -------------- |
| isWindow()    | is.window()    |
| isNode()      | is.node()      |
| isBrowser()   | is.browser()   |
| isJsDom()     | is.jsDom()     |
| isWebWorker() | is.webWorker() |
| isBun()       | is.bun()       |
| isMac()       | is.mac()       |
| isLinux()     | is.linux()     |
| isWindows()   | is.windows()   |

### Platform checker

| APIs              | standalone is      |
| ----------------- | ------------------ |
| isIpad()          | is.ipad()          |
| isIphone()        | is.iphone()        |
| isIpod()          | is.ipod()          |
| isAndroid()       | is.android()       |
| isAndroidPhone()  | is.androidPhone()  |
| isAndroidTablet() | is.androidTablet() |
| isMobile()        | is.mobile()        |
| isTablet()        | is.tablet()        |
| isDesktop()       | is.desktop()       |
| isIos()           | is.ios()           |

### Browser checker

| APIs          | standalone is  |
| ------------- | -------------- |
| isChrome()    | is.chrome()    |
| isFirefox()   | is.firefox()   |
| isOpera()     | is.opera()     |
| isOperaMini() | is.operaMini() |
| isSafari()    | is.safari()    |
| isEdge()      | is.edge()      |
| isIe()        | is.ie()        |

### IP checker

| APIs        | standalone is |
| ----------- | ------------- |
| isIPv4(arg) | is.ipv4(arg)  |
| isIPv6(arg) | is.ipv6(arg)  |
| isIP(arg)   | is.ip(arg)    |
