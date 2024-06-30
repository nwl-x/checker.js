import { isIPv4, isIPv6, isIP } from '../src/index'

describe('isIPv4', () => {
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
    ${'2001:0000:130F:0000:0000:09C0:876A:130B'} | ${false}
    ${'192.168.0.0'}                             | ${true}
    ${'0.0.0.0'}                                 | ${true}
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

describe('isIP', () => {
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
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isIP(arg)).toBe(expected))
})
