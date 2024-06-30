import { isPositiveNumber, isNegativeNumber, isInfinite, isOdd, isEven } from '../src/index'

// ==== Number checker ====

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

describe('isInfinite', () => {
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
    ${NaN}          | ${false}
    ${[]}           | ${false}
    ${['x']}        | ${false}
    ${{}}           | ${false}
    ${{ x: 'x' }}   | ${false}
    ${Infinity}     | ${true}
    ${-Infinity}    | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isInfinite(arg)).toBe(expected))
})

describe('isOdd', () => {
  test.each`
    arg             | expected
    ${null}         | ${false}
    ${false}        | ${false}
    ${undefined}    | ${false}
    ${'string'}     | ${false}
    ${''}           | ${false}
    ${'01/01/1900'} | ${false}
    ${12346}        | ${false}
    ${Infinity}     | ${false}
    ${-Infinity}    | ${false}
    ${NaN}          | ${false}
    ${[]}           | ${false}
    ${['x']}        | ${false}
    ${{}}           | ${false}
    ${{ x: 'x' }}   | ${false}
    ${12345}        | ${true}
    ${-12345}       | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isOdd(arg)).toBe(expected))
})

describe('isEven', () => {
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
    ${12346}        | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isEven(arg)).toBe(expected))
})
