import {
  isArray,
  isArrayOfNumbers,
  isArrayOfStrings,
  isArrayOfObjects,
  isArrayOfBooleans,
  isArrayNotEmpty,
  isArrayOrNull,
  isObject,
  isObjectNotEmpty,
  isObjectOrNull,
  isNumber,
  isString,
  isBoolean,
  isUndefined,
  isNull,
  isSymbol,
  isBigInt,
  isBooleanOrNull,
  isStringOrNull,
  isStringNotEmpty,
  isNumberOrNull,
  isPositiveNumber,
  isNegativeNumber,
  isPromise,
  isFulfilledPromise,
  isRejectedPromise,
  isPendingPromise,
  isFunction,
  isAsyncFunction,
  isGeneratorFunction,
  isIPv4,
  isIPv6,
  isUUID,
  isUUIDv3,
  isUUIDv4,
  isUUIDv5,
  isAlpha,
  isAlphanumeric,
  isDate,
  isEmail,
  isUrl
} from '../src/index'

describe('isArray', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${[]}         | ${true}
    ${['x']}      | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isArray(arg)).toBe(expected))
})

describe('isArrayOfNumbers', () => {
  test.each`
    arg                | expected
    ${null}            | ${false}
    ${false}           | ${false}
    ${undefined}       | ${false}
    ${'string'}        | ${false}
    ${''}              | ${false}
    ${12345}           | ${false}
    ${-12345}          | ${false}
    ${Infinity}        | ${false}
    ${-Infinity}       | ${false}
    ${NaN}             | ${false}
    ${{}}              | ${false}
    ${{ x: 'x' }}      | ${false}
    ${[]}              | ${false}
    ${[1, null]}       | ${false}
    ${['x']}           | ${false}
    ${[1, NaN]}        | ${true}
    ${[Infinity, NaN]} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isArrayOfNumbers(arg)).toBe(expected))
})

describe('isArrayOfStrings', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${[]}         | ${false}
    ${[1]}        | ${false}
    ${['x']}      | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isArrayOfStrings(arg)).toBe(expected))
})

describe('isArrayOfObjects', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${[{}, []]}   | ${false}
    ${[{}]}       | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isArrayOfObjects(arg)).toBe(expected))
})

describe('isArrayOfBooleans', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${[0]}        | ${false}
    ${[1]}        | ${false}
    ${[true]}     | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isArrayOfBooleans(arg)).toBe(expected))
})

describe('isArrayNotEmpty', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${{}}         | ${false}
    ${[]}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${['x']}      | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isArrayNotEmpty(arg)).toBe(expected))
})

describe('isArrayOrNull', () => {
  test.each`
    arg           | expected
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${[]}         | ${true}
    ${['x']}      | ${true}
    ${null}       | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isArrayOrNull(arg)).toBe(expected))
})

describe('isObject', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${true}
    ${{ x: 'x' }} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isObject(arg)).toBe(expected))
})

describe('isObjectNotEmpty', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isObjectNotEmpty(arg)).toBe(expected))
})

describe('isObjectOrNull', () => {
  test.each`
    arg           | expected
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${null}       | ${true}
    ${{}}         | ${true}
    ${{ x: 'x' }} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isObjectOrNull(arg)).toBe(expected))
})

describe('isNumber', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${12345}      | ${true}
    ${-12345}     | ${true}
    ${Infinity}   | ${true}
    ${-Infinity}  | ${true}
    ${NaN}        | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isNumber(arg)).toBe(expected))
})

describe('isString', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${'string'}   | ${true}
    ${''}         | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isString(arg)).toBe(expected))
})

describe('isBoolean', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${false}      | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isBoolean(arg)).toBe(expected))
})

describe('isUndefined', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${undefined}  | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUndefined(arg)).toBe(expected))
})

describe('isNull', () => {
  test.each`
    arg           | expected
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${null}       | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isNull(arg)).toBe(expected))
})

describe('isSymbol', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${Symbol()}   | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isSymbol(arg)).toBe(expected))
})

describe('isBigInt', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${10n}        | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isBigInt(arg)).toBe(expected))
})

describe('isBooleanOrNull', () => {
  test.each`
    arg           | expected
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${null}       | ${true}
    ${false}      | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isBooleanOrNull(arg)).toBe(expected))
})

describe('isStringOrNull', () => {
  test.each`
    arg           | expected
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${'string'}   | ${true}
    ${''}         | ${true}
    ${null}       | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isStringOrNull(arg)).toBe(expected))
})

describe('isStringNotEmpty', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${'string'}   | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isStringNotEmpty(arg)).toBe(expected))
})

describe('isNumberOrNull', () => {
  test.each`
    arg           | expected
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${2n}         | ${false}
    ${null}       | ${true}
    ${12345}      | ${true}
    ${-12345}     | ${true}
    ${Infinity}   | ${true}
    ${-Infinity}  | ${true}
    ${NaN}        | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isNumberOrNull(arg)).toBe(expected))
})

describe('isPositiveNumber', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${-12345}     | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${12345}      | ${true}
    ${Infinity}   | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isPositiveNumber(arg)).toBe(expected))
})

describe('isNegativeNumber', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${Infinity}   | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${-12345}     | ${true}
    ${-Infinity}  | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isNegativeNumber(arg)).toBe(expected))
})

describe('isPromise', () => {
  test.each`
    arg                      | expected
    ${null}                  | ${false}
    ${false}                 | ${false}
    ${undefined}             | ${false}
    ${'string'}              | ${false}
    ${''}                    | ${false}
    ${12345}                 | ${false}
    ${-12345}                | ${false}
    ${Infinity}              | ${false}
    ${-Infinity}             | ${false}
    ${NaN}                   | ${false}
    ${[]}                    | ${false}
    ${['x']}                 | ${false}
    ${{}}                    | ${false}
    ${{ x: 'x' }}            | ${false}
    ${new Promise(() => {})} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isPromise(arg)).toBe(expected))
})

describe('isFunction', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${'string'}   | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${() => {}}   | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isFunction(arg)).toBe(expected))
})

describe('isAsyncFunction', () => {
  test.each`
    arg               | expected
    ${null}           | ${false}
    ${false}          | ${false}
    ${undefined}      | ${false}
    ${'string'}       | ${false}
    ${''}             | ${false}
    ${12345}          | ${false}
    ${-12345}         | ${false}
    ${Infinity}       | ${false}
    ${-Infinity}      | ${false}
    ${NaN}            | ${false}
    ${[]}             | ${false}
    ${['x']}          | ${false}
    ${{}}             | ${false}
    ${{ x: 'x' }}     | ${false}
    ${() => {}}       | ${false}
    ${async () => {}} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isAsyncFunction(arg)).toBe(expected))
})

describe('isGeneratorFunction', () => {
  test.each`
    arg                         | expected
    ${null}                     | ${false}
    ${false}                    | ${false}
    ${undefined}                | ${false}
    ${'string'}                 | ${false}
    ${''}                       | ${false}
    ${12345}                    | ${false}
    ${-12345}                   | ${false}
    ${Infinity}                 | ${false}
    ${-Infinity}                | ${false}
    ${NaN}                      | ${false}
    ${[]}                       | ${false}
    ${['x']}                    | ${false}
    ${{}}                       | ${false}
    ${{ x: 'x' }}               | ${false}
    ${function* generator() {}} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isGeneratorFunction(arg)).toBe(expected))
})

describe('isIPv4', () => {
  test.each`
    arg              | expected
    ${null}          | ${false}
    ${false}         | ${false}
    ${undefined}     | ${false}
    ${'string'}      | ${false}
    ${''}            | ${false}
    ${12345}         | ${false}
    ${-12345}        | ${false}
    ${Infinity}      | ${false}
    ${-Infinity}     | ${false}
    ${NaN}           | ${false}
    ${[]}            | ${false}
    ${['x']}         | ${false}
    ${{}}            | ${false}
    ${{ x: 'x' }}    | ${false}
    ${'192.168.0.0'} | ${true}
    ${'0.0.0.0'}     | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isIPv4(arg)).toBe(expected))
})

describe('isIPv6', () => {
  test.each`
    arg                                          | expected
    ${null}                                      | ${false}
    ${false}                                     | ${false}
    ${undefined}                                 | ${false}
    ${'string'}                                  | ${false}
    ${''}                                        | ${false}
    ${12345}                                     | ${false}
    ${-12345}                                    | ${false}
    ${Infinity}                                  | ${false}
    ${-Infinity}                                 | ${false}
    ${NaN}                                       | ${false}
    ${[]}                                        | ${false}
    ${['x']}                                     | ${false}
    ${{}}                                        | ${false}
    ${{ x: 'x' }}                                | ${false}
    ${'192.168.0.0'}                             | ${false}
    ${'2001:0000:130F:0000:0000:09C0:876A:130B'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isIPv6(arg)).toBe(expected))
})

describe('isUUID', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${false}                                  | ${false}
    ${undefined}                              | ${false}
    ${'string'}                               | ${false}
    ${''}                                     | ${false}
    ${12345}                                  | ${false}
    ${-12345}                                 | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${{}}                                     | ${false}
    ${{ x: 'x' }}                             | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${true}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${true}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${true}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUUID(arg)).toBe(expected))
})

describe('isUUIDv3', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${false}                                  | ${false}
    ${undefined}                              | ${false}
    ${'string'}                               | ${false}
    ${''}                                     | ${false}
    ${12345}                                  | ${false}
    ${-12345}                                 | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${{}}                                     | ${false}
    ${{ x: 'x' }}                             | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${false}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${false}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${false}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUUIDv3(arg)).toBe(expected))
})

describe('isUUIDv4', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${false}                                  | ${false}
    ${undefined}                              | ${false}
    ${'string'}                               | ${false}
    ${''}                                     | ${false}
    ${12345}                                  | ${false}
    ${-12345}                                 | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${{}}                                     | ${false}
    ${{ x: 'x' }}                             | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${false}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${false}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${false}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUUIDv4(arg)).toBe(expected))
})

describe('isUUIDv5', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${false}                                  | ${false}
    ${undefined}                              | ${false}
    ${'string'}                               | ${false}
    ${''}                                     | ${false}
    ${12345}                                  | ${false}
    ${-12345}                                 | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${{}}                                     | ${false}
    ${{ x: 'x' }}                             | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${false}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${false}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${false}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUUIDv5(arg)).toBe(expected))
})

describe('isAlpha', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${''}         | ${false}
    ${'1'}        | ${false}
    ${'a1'}       | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${'string'}   | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isAlpha(arg)).toBe(expected))
})

describe('isAlphanumeric', () => {
  test.each`
    arg           | expected
    ${null}       | ${false}
    ${false}      | ${false}
    ${undefined}  | ${false}
    ${''}         | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${-Infinity}  | ${false}
    ${NaN}        | ${false}
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${'string'}   | ${true}
    ${'1'}        | ${true}
    ${'a1'}       | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isAlphanumeric(arg)).toBe(expected))
})

describe('isDate', () => {
  test.each`
    arg             | expected
    ${null}         | ${false}
    ${false}        | ${false}
    ${undefined}    | ${false}
    ${'string'}     | ${false}
    ${''}           | ${false}
    ${'01/01/1900'} | ${false}
    ${12345}        | ${false}
    ${-12345}       | ${false}
    ${Infinity}     | ${false}
    ${-Infinity}    | ${false}
    ${NaN}          | ${false}
    ${[]}           | ${false}
    ${['x']}        | ${false}
    ${{}}           | ${false}
    ${{ x: 'x' }}   | ${false}
    ${new Date()}   | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isDate(arg)).toBe(expected))
})

describe('isEmail', () => {
  test.each`
    arg              | expected
    ${null}          | ${false}
    ${false}         | ${false}
    ${'string'}      | ${false}
    ${''}            | ${false}
    ${'@plop'}       | ${false}
    ${'kikoo@plop'}  | ${false}
    ${undefined}     | ${false}
    ${12345}         | ${false}
    ${-12345}        | ${false}
    ${Infinity}      | ${false}
    ${-Infinity}     | ${false}
    ${NaN}           | ${false}
    ${[]}            | ${false}
    ${['x']}         | ${false}
    ${{}}            | ${false}
    ${{ x: 'x' }}    | ${false}
    ${'john@doe.io'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isEmail(arg)).toBe(expected))
})

describe('isUrl', () => {
  test.each`
    arg                 | expected
    ${null}             | ${false}
    ${false}            | ${false}
    ${undefined}        | ${false}
    ${'string'}         | ${false}
    ${''}               | ${false}
    ${'plop.io'}        | ${false}
    ${'ftp://plop.io'}  | ${false}
    ${12345}            | ${false}
    ${-12345}           | ${false}
    ${Infinity}         | ${false}
    ${-Infinity}        | ${false}
    ${NaN}              | ${false}
    ${[]}               | ${false}
    ${['x']}            | ${false}
    ${{}}               | ${false}
    ${{ x: 'x' }}       | ${false}
    ${'http://plop.io'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUrl(arg)).toBe(expected))
})
