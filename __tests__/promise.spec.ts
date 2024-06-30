import { isPromise } from '../src/index'

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
