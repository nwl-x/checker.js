import { isFunction, isAsyncFunction, isGeneratorFunction } from '../src/index'

// ==== Function checker ====

describe('isFunction', () => {
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
    ${new Function()} | ${true}
    ${() => {}}       | ${true}
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
