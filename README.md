# checker.js

A set of boilerplate utilities for checking any type of values ​​without headaches or common mistakes

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/nwl-x/checker.js/release.yml)
![GitHub top language](https://img.shields.io/github/languages/top/nwl-x/checker.js?logo=typescript)
![GitHub License](https://img.shields.io/github/license/nwl-x/checker.js)
![NPM Downloads](https://img.shields.io/npm/dw/%40nawael%2Fchecker.js?logo=npm)
![NPM Version](https://img.shields.io/npm/v/%40nawael%2Fchecker.js)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40nawael%2Fchecker.js)

![Banner](https://raw.githubusercontent.com/nwl-x/checker.js/main/checker-banner.png)

## Installation

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

## Usage

#### Works with Object

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

#### Works with Number

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
// 😱 so we must check Object.prototype.toString.call(arg).slice(8, -1).toLowerCase() === 'number'
```

## "Lazy" API

```js
// instead of importing all API (not recommended)
import { isArray, isString, isNumber, ... } from '@nawael/checker.js'

// use "lazy" API and avoid boring imports
import { is } from '@nawael/checker.js'

is('array', arg) // isArray(arg)
is('string', arg) // isString(arg)
is('number', arg) // isNumber(arg)

// ...and so on
```

## Available APIs

### primitive checker

| APIs            | Description                             | Lazy                       |
| --------------- | --------------------------------------- | -------------------------- |
| isBoolean       | Check if the value is a boolean         | is('boolean', arg)         |
| isBooleanOrNull | Check if the value is a boolean or null | is('boolean-or-null', arg) |
| isBigInt        | Check if the value is a BigInt          | is('bigint', arg)          |
| isNumber        | Check if the value is a number          | is('number', arg)          |
| isNull          | Check if the value is null              | is('null', arg)            |
| isString        | Check if the value is a string          | is('string', arg)          |
| isUndefined     | Check if the value is undefined         | is('undefined', arg)       |
| isSymbol        | Check if the value is a symbol          | is('symbol', arg)          |
| isPrimitive     | Check if the value is a primitive       | is('primitive', arg)       |

### String checker

| APIs             | Description                                  | Lazy                        |
| ---------------- | -------------------------------------------- | --------------------------- |
| isStringOrNull   | Check if the value is a string or null       | is('string-or-null', arg)   |
| isStringNotEmpty | Check if the value is a string not empty     | is('string-not-empty', arg) |
| isAlpha          | Check if the value is an alpha string        | is('alpha', arg)            |
| isNumeric        | Check if the value is a numeric string       | is('numeric', arg)          |
| isAlphanumeric   | Check if the value is an alphanumeric string | is('alphanumeric', arg)     |
| isNumberOrNull   | Check if the value is a number or null       | is('number-or-null', arg)   |
| isEmail          | Check if the value is an email string        | is('email', arg)            |
| isUrl            | Check if the value is an url string          | is('url', arg)              |
| isBinaryString   | Check if the value is a binary string        | is('binary-string', arg)    |

### Number checker

| APIs             | Description                             | Lazy                       |
| ---------------- | --------------------------------------- | -------------------------- |
| isPositiveNumber | Check if the value is a positive number | is('positive-number', arg) |
| isNegativeNumber | Check if the value is a negative number | is('negative-number', arg) |
| isInfinite       | Check if the value is an infinite       | is('infinite', arg)        |
| isOdd            | Check if the value is an odd            | is('odd', arg)             |
| isEven           | Check if the value is an even           | is('even', arg)            |

### Array checker

| APIs              | Description                                | Lazy                         |
| ----------------- | ------------------------------------------ | ---------------------------- |
| isArray           | Check if the value is an array             | is('array', arg)             |
| isMap             | Check if the value is a map                | is('map', arg)               |
| isSet             | Check if the value is a set                | is('set', arg)               |
| isArrayOrNull     | Check if the value is an array or null     | is('array-or-null', arg)     |
| isArrayOfNumbers  | Check if the value is an array of numbers  | is('array-of-numbers', arg)  |
| isArrayOfStrings  | Check if the value is an array of strings  | is('array-of-strings', arg)  |
| isArrayOfObjects  | Check if the value is an array of objects  | is('array-of-objects', arg)  |
| isArrayOfBooleans | Check if the value is an array of booleans | is('array-of-booleans', arg) |
| isArrayNotEmpty   | Check if the value is an array not empty   | is('array-not-empty', arg)   |

### Object checker

| APIs             | Description                               | Lazy                        |
| ---------------- | ----------------------------------------- | --------------------------- |
| isObject         | Check if the value is an object           | is('object', arg)           |
| isObjectOrNull   | Check if the value is an object or null   | is('object-or-null', arg)   |
| isObjectNotEmpty | Check if the value is an object not empty | is('object-not-empty', arg) |

### Promise checker

| APIs                | Description                                | Lazy                          |
| ------------------- | ------------------------------------------ | ----------------------------- |
| isPromise           | Check if the value is a promise            | is('promise', arg)            |
| isFullfilledPromise | Check if the value is a fullfilled promise | is('fullfilled-promise', arg) |
| isRejectedPromise   | Check if the value is a rejected promise   | is('rejected-promise', arg)   |
| isPendingPromise    | Check if the value is a pending promise    | is('pending-promise', arg)    |

### Function checker

| APIs                | Description                                | Lazy                          |
| ------------------- | ------------------------------------------ | ----------------------------- |
| isFunction          | Check if the value is a function           | is('function', arg)           |
| isAsyncFunction     | Check if the value is an async function    | is('async-function', arg)     |
| isGeneratorFunction | Check if the value is a generator function | is('generator-function', arg) |

### IP checker

| APIs   | Description                   | Lazy            |
| ------ | ----------------------------- | --------------- |
| isIPv4 | Check if the value is an IPv4 | is('ipv4', arg) |
| isIPv6 | Check if the value is an IPv6 | is('ipv6', arg) |
| isIP   | Check if the value is an IP   | is('ip', arg)   |

### UUID checker

| APIs     | Description                    | Lazy               |
| -------- | ------------------------------ | ------------------ |
| isUUID   | Check if the value is a UUID   | is('uuid', arg)    |
| isUUIDv3 | Check if the value is a UUIDv3 | is('uuid-v3', arg) |
| isUUIDv4 | Check if the value is a UUIDv4 | is('uuid-v4', arg) |
| isUUIDv5 | Check if the value is a UUIDv5 | is('uuid-v5', arg) |

### Misc checker

| APIs     | Description                                | Lazy              |
| -------- | ------------------------------------------ | ----------------- |
| isDate   | Check if the value is a date               | is('date', arg)   |
| isRegExp | Check if the value is a regular expression | is('regexp', arg) |
| isError  | Check if the value is an error             | is('error', arg)  |
| isFalsy  | Check if the value is falsy                | is('falsy', arg)  |
| isTruthy | Check if the value is truthy               | is('truthy', arg) |
