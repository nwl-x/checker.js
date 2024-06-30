import { isObject, isObjectOrNull, isObjectNotEmpty } from '../src/index'

// ==== Object checker ====

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
