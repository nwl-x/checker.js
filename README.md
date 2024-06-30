# checker-js

A set of boilerplate utilities for checking any type of values ​​without headaches or common mistakes

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/nwl-x/checker-js/release.yml)
![GitHub top language](https://img.shields.io/github/languages/top/nwl-x/checker-js?logo=typescript)
![GitHub License](https://img.shields.io/github/license/nwl-x/checker-js)
![NPM Downloads](https://img.shields.io/npm/dw/%40nawael%2Fchecker-js?logo=npm)
![NPM Version](https://img.shields.io/npm/v/%40nawael%2Fchecker-js)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40nawael%2Fchecker-js)

![Banner](https://raw.githubusercontent.com/nwl-x/checker-js/main/checker-banner.png)

## Installation

#### With [npm](https://www.npmjs.com/)

```bash
npm install @nawael/checker-js --save
```

#### With [yarn](https://yarnpkg.com/)

```bash
yarn add @nawael/checker-js --save
```

## Integration

#### For [CommonJS](https://nodejs.org/docs/latest/api/modules.html#modules-commonjs-modules)

```js
const { isArray, isString, isNumber, ... } = require('@nawael/checker-js')
```

#### For [ESM](https://nodejs.org/api/esm.html#esm_ecmascript_modules)

```js
import { isArray, isString, isNumber, ... } from '@nawael/checker-js'
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
import { isObject } from '@nawael/checker-js'

isObject(arg)
// ✅  true if arg = {}
// ❌  false if arg = null cause typeof null === 'object'
// ❌ false if arg = [] cause typeof [] === 'object'
```

#### Works with Number

```js
// instead of using typeof
if (typeof arg === 'number') {
  // some stuff
}

// use isNumber
import { isNumber } from '@nawael/checker-js'

isNumber(arg)
// ✅   true if arg = 0 or arg = Infinity or -Infinity or
// ✅   true if arg = new Number() cause typeof new Number() === 'object'
// ❌  false if arg = NaN cause NaN is a number and we need to avoid NaN
// 😱 so we must check Object.prototype.toString.call(arg).slice(8, -1).toLowerCase() === 'number'
```

## Available API
