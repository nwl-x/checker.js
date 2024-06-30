import { isBoolean, isBooleanOrNull, isBigInt, isNumber, isNull, isString, isUndefined, isSymbol, isPrimitive } from '../src/index'

// ==== Primitive checker ====

describe('isBoolean', () => {
  test.each`
    arg                  | expected
    ${null}              | ${false}
    ${undefined}         | ${false}
    ${'string'}          | ${false}
    ${''}                | ${false}
    ${12345}             | ${false}
    ${-12345}            | ${false}
    ${Infinity}          | ${false}
    ${-Infinity}         | ${false}
    ${NaN}               | ${false}
    ${[]}                | ${false}
    ${['x']}             | ${false}
    ${{}}                | ${false}
    ${{ x: 'x' }}        | ${false}
    ${new Boolean(true)} | ${true}
    ${true}              | ${true}
    ${false}             | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isBoolean(arg)).toBe(expected))
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
    ${BigInt(10)} | ${true}
    ${10n}        | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isBigInt(arg)).toBe(expected))
})

describe('isNumber', () => {
  test.each`
    arg              | expected
    ${null}          | ${false}
    ${false}         | ${false}
    ${undefined}     | ${false}
    ${'string'}      | ${false}
    ${''}            | ${false}
    ${[]}            | ${false}
    ${['x']}         | ${false}
    ${{}}            | ${false}
    ${{ x: 'x' }}    | ${false}
    ${NaN}           | ${false}
    ${new Number(1)} | ${true}
    ${12345}         | ${true}
    ${-12345}        | ${true}
    ${Infinity}      | ${true}
    ${-Infinity}     | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isNumber(arg)).toBe(expected))
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

describe('isString', () => {
  test.each`
    arg               | expected
    ${null}           | ${false}
    ${false}          | ${false}
    ${undefined}      | ${false}
    ${12345}          | ${false}
    ${-12345}         | ${false}
    ${Infinity}       | ${false}
    ${-Infinity}      | ${false}
    ${NaN}            | ${false}
    ${[]}             | ${false}
    ${['x']}          | ${false}
    ${{}}             | ${false}
    ${{ x: 'x' }}     | ${false}
    ${new String('')} | ${true}
    ${'string'}       | ${true}
    ${''}             | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isString(arg)).toBe(expected))
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

describe('isPrimitive', () => {
  test.each`
    arg           | expected
    ${[]}         | ${false}
    ${['x']}      | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${false}
    ${10n}        | ${false}
    ${NaN}        | ${false}
    ${null}       | ${true}
    ${false}      | ${true}
    ${undefined}  | ${true}
    ${'string'}   | ${true}
    ${''}         | ${true}
    ${12345}      | ${true}
    ${-12345}     | ${true}
    ${Infinity}   | ${true}
    ${-Infinity}  | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isPrimitive(arg)).toBe(expected))
})
