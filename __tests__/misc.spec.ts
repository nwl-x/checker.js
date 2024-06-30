import { isDate, isRegExp, isError, isFalsy, isTruthy } from '../src/index'

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

describe('isRegExp', () => {
  test.each`
    arg                 | expected
    ${null}             | ${false}
    ${false}            | ${false}
    ${undefined}        | ${false}
    ${'string'}         | ${false}
    ${''}               | ${false}
    ${'01/01/1900'}     | ${false}
    ${12345}            | ${false}
    ${-12345}           | ${false}
    ${Infinity}         | ${false}
    ${-Infinity}        | ${false}
    ${NaN}              | ${false}
    ${[]}               | ${false}
    ${['x']}            | ${false}
    ${{}}               | ${false}
    ${{ x: 'x' }}       | ${false}
    ${/$/}              | ${true}
    ${new RegExp(/^$/)} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isRegExp(arg)).toBe(expected))
})

describe('isError', () => {
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
    ${new Error()}  | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isError(arg)).toBe(expected))
})

describe('isFalsy', () => {
  test.each`
    arg             | expected
    ${'string'}     | ${false}
    ${''}           | ${true}
    ${'01/01/1900'} | ${false}
    ${12346}        | ${false}
    ${12345}        | ${false}
    ${-12345}       | ${false}
    ${Infinity}     | ${false}
    ${-Infinity}    | ${false}
    ${[]}           | ${false}
    ${['x']}        | ${false}
    ${{}}           | ${false}
    ${{ x: 'x' }}   | ${false}
    ${NaN}          | ${true}
    ${null}         | ${true}
    ${false}        | ${true}
    ${undefined}    | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isFalsy(arg)).toBe(expected))
})

describe('isTruthy', () => {
  test.each`
    arg             | expected
    ${null}         | ${false}
    ${false}        | ${false}
    ${undefined}    | ${false}
    ${'string'}     | ${false}
    ${''}           | ${false}
    ${'01/01/1900'} | ${false}
    ${12346}        | ${false}
    ${12345}        | ${false}
    ${-12345}       | ${false}
    ${Infinity}     | ${false}
    ${-Infinity}    | ${false}
    ${NaN}          | ${false}
    ${[]}           | ${false}
    ${['x']}        | ${false}
    ${{}}           | ${false}
    ${{ x: 'x' }}   | ${false}
    ${NaN}          | ${false}
    ${null}         | ${false}
    ${false}        | ${false}
    ${undefined}    | ${false}
    ${true}         | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isTruthy(arg)).toBe(expected))
})
