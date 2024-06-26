# checker-js

A set of utilities to check any type of values

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/nwl-x/checker-js/release.yml)
![GitHub top language](https://img.shields.io/github/languages/top/nwl-x/checker-js?logo=typescript)
![GitHub License](https://img.shields.io/github/license/nwl-x/checker-js)
![NPM Downloads](https://img.shields.io/npm/dw/%40nawael%2Fchecker-js?logo=npm)
![NPM Version](https://img.shields.io/npm/v/%40nawael%2Fchecker-js)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40nawael%2Fchecker-js)

![npm bundle size](./checker-banner.png)

## Installation

```bash
npm install @nawael/checker-js
```

or

```bash
yarn add @nawael/checker-js
```

## Usage

```js
import { isArray, isString, isNumber } from '@nawael/checker-js'
```

or

```js
const { isArray, isString, isNumber } = require('@nawael/checker-js')
```

## Available API

- isArray
- isArrayOrNull
- isArrayOfNumbers
- isArrayOfStrings
- isArrayOfObjects
- isArrayOfBooleans
- isArrayNotEmpty
- isObject
- isObjectNotEmpty
- isObjectOrNull
- isNumber
- isString
- isBoolean
- isUndefined
- isNull
- isSymbol
- isBigInt
- isPrimitive
- isBooleanOrNull
- isStringOrNull
- isStringNotEmpty
- isNumberOrNull
- isPositiveNumber
- isNegativeNumber
- isPromise
- isFunction
- isAsyncFunction
- isGeneratorFunction
- isIPv4
- isIPv6
- isUUID
- isUUIDv3
- isUUIDv4
- isUUIDv5
- isAlpha
- isAlphanumeric
- isDate
- isRegExp
- isMap
- isSet
- isError
- isNaNValue
- isInfinite
- isOdd
- isEven
- isEmail
- isUrl
- isFalsy
