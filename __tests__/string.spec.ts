import { isStringOrNull, isStringNotEmpty, isAlpha, isNumeric, isAlphanumeric, isNumberOrNull, isEmail, isUrl, isBinaryString } from '../src/index'

// ==== String checker ====

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

describe('isNumeric', () => {
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
    ${new Number(1)} | ${false}
    ${12345}         | ${false}
    ${-12345}        | ${false}
    ${Infinity}      | ${false}
    ${-Infinity}     | ${false}
    ${'1a'}          | ${false}
    ${'1'}           | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isNumeric(arg)).toBe(expected))
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
    ${NaN}        | ${false}
    ${null}       | ${true}
    ${12345}      | ${true}
    ${-12345}     | ${true}
    ${Infinity}   | ${true}
    ${-Infinity}  | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isNumberOrNull(arg)).toBe(expected))
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
    arg                  | expected
    ${null}              | ${false}
    ${false}             | ${false}
    ${undefined}         | ${false}
    ${'string'}          | ${false}
    ${''}                | ${false}
    ${'plop.io'}         | ${false}
    ${'ftp://plop.io'}   | ${false}
    ${12345}             | ${false}
    ${-12345}            | ${false}
    ${Infinity}          | ${false}
    ${-Infinity}         | ${false}
    ${NaN}               | ${false}
    ${[]}                | ${false}
    ${['x']}             | ${false}
    ${{}}                | ${false}
    ${{ x: 'x' }}        | ${false}
    ${'http://plop.io'}  | ${true}
    ${'https://plop.io'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUrl(arg)).toBe(expected))
})

describe('isBinaryString', () => {
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
    ${'a0'}       | ${false}
    ${'0a'}       | ${false}
    ${'0'}        | ${true}
    ${'1'}        | ${true}
    ${'01'}       | ${true}
    ${'00'}       | ${true}
    ${'111'}      | ${true}
    ${'101'}      | ${true}
    ${'010'}      | ${true}
    ${'000'}      | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isBinaryString(arg)).toBe(expected))
})
