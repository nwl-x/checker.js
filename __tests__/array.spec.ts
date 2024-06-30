import { isArray, isMap, isSet, isArrayOrNull, isArrayOfNumbers, isArrayOfStrings, isArrayOfObjects, isArrayOfBooleans, isArrayNotEmpty } from '../src/index'

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

describe('isMap', () => {
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
    ${new Map()}  | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isMap(arg)).toBe(expected))
})

describe('isSet', () => {
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
    ${new Set()}  | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isSet(arg)).toBe(expected))
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

describe('isArrayOfNumbers', () => {
  test.each`
    arg                          | expected
    ${null}                      | ${false}
    ${false}                     | ${false}
    ${undefined}                 | ${false}
    ${'string'}                  | ${false}
    ${''}                        | ${false}
    ${12345}                     | ${false}
    ${-12345}                    | ${false}
    ${Infinity}                  | ${false}
    ${-Infinity}                 | ${false}
    ${NaN}                       | ${false}
    ${{}}                        | ${false}
    ${{ x: 'x' }}                | ${false}
    ${[]}                        | ${false}
    ${[1, null]}                 | ${false}
    ${['x']}                     | ${false}
    ${[1, NaN]}                  | ${false}
    ${[Infinity, NaN]}           | ${false}
    ${[Infinity, new Number(1)]} | ${true}
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
