import { is, isIPv4, isIPv6, isIP } from '../src/index'

describe('is.ipv4 | isIPv4', () => {
  test.each`
    arg                                          | expected
    ${null}                                      | ${false}
    ${undefined}                                 | ${false}
    ${false}                                     | ${false}
    ${Boolean()}                                 | ${false}
    ${new Boolean()}                             | ${false}
    ${''}                                        | ${false}
    ${'string'}                                  | ${false}
    ${'a1'}                                      | ${false}
    ${'@plop'}                                   | ${false}
    ${'kikoo@plop'}                              | ${false}
    ${'john@doe.io'}                             | ${false}
    ${'plop.io'}                                 | ${false}
    ${'ftp://plop.io'}                           | ${false}
    ${'http://plop.io'}                          | ${false}
    ${'https://plop.io'}                         | ${false}
    ${'0'}                                       | ${false}
    ${'1'}                                       | ${false}
    ${'01'}                                      | ${false}
    ${String('')}                                | ${false}
    ${new String('')}                            | ${false}
    ${3}                                         | ${false}
    ${-1}                                        | ${false}
    ${Infinity}                                  | ${false}
    ${-Infinity}                                 | ${false}
    ${NaN}                                       | ${false}
    ${Number(1)}                                 | ${false}
    ${new Number(1)}                             | ${false}
    ${1n}                                        | ${false}
    ${{}}                                        | ${false}
    ${{ x: 1 }}                                  | ${false}
    ${Object.create({})}                         | ${false}
    ${[]}                                        | ${false}
    ${['x']}                                     | ${false}
    ${[String('')]}                              | ${false}
    ${[new String('')]}                          | ${false}
    ${[1, null]}                                 | ${false}
    ${[1, NaN]}                                  | ${false}
    ${[Infinity, NaN]}                           | ${false}
    ${[Infinity, Number(1)]}                     | ${false}
    ${[Infinity, new Number(1)]}                 | ${false}
    ${[1, 2, 3]}                                 | ${false}
    ${[{}]}                                      | ${false}
    ${[Object.create({})]}                       | ${false}
    ${[!'']}                                     | ${false}
    ${[true]}                                    | ${false}
    ${[Boolean()]}                               | ${false}
    ${[new Boolean()]}                           | ${false}
    ${[true]}                                    | ${false}
    ${new Set()}                                 | ${false}
    ${new Map()}                                 | ${false}
    ${Symbol()}                                  | ${false}
    ${'2001:0000:130F:0000:0000:09C0:876A:130B'} | ${false}
    ${'192.168.0.0'}                             | ${true}
    ${'0.0.0.0'}                                 | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isIPv4(arg)).toBe(expected)
    expect(is.ipv4(arg)).toBe(expected)
  })
})

describe('is.ipv6 | isIPv6', () => {
  test.each`
    arg                                          | expected
    ${null}                                      | ${false}
    ${undefined}                                 | ${false}
    ${false}                                     | ${false}
    ${Boolean()}                                 | ${false}
    ${new Boolean()}                             | ${false}
    ${''}                                        | ${false}
    ${'string'}                                  | ${false}
    ${'a1'}                                      | ${false}
    ${'@plop'}                                   | ${false}
    ${'kikoo@plop'}                              | ${false}
    ${'john@doe.io'}                             | ${false}
    ${'plop.io'}                                 | ${false}
    ${'ftp://plop.io'}                           | ${false}
    ${'http://plop.io'}                          | ${false}
    ${'https://plop.io'}                         | ${false}
    ${'0'}                                       | ${false}
    ${'1'}                                       | ${false}
    ${'01'}                                      | ${false}
    ${String('')}                                | ${false}
    ${new String('')}                            | ${false}
    ${3}                                         | ${false}
    ${-1}                                        | ${false}
    ${Infinity}                                  | ${false}
    ${-Infinity}                                 | ${false}
    ${NaN}                                       | ${false}
    ${Number(1)}                                 | ${false}
    ${new Number(1)}                             | ${false}
    ${1n}                                        | ${false}
    ${{}}                                        | ${false}
    ${{ x: 1 }}                                  | ${false}
    ${Object.create({})}                         | ${false}
    ${[]}                                        | ${false}
    ${['x']}                                     | ${false}
    ${[String('')]}                              | ${false}
    ${[new String('')]}                          | ${false}
    ${[1, null]}                                 | ${false}
    ${[1, NaN]}                                  | ${false}
    ${[Infinity, NaN]}                           | ${false}
    ${[Infinity, Number(1)]}                     | ${false}
    ${[Infinity, new Number(1)]}                 | ${false}
    ${[1, 2, 3]}                                 | ${false}
    ${[{}]}                                      | ${false}
    ${[Object.create({})]}                       | ${false}
    ${[!'']}                                     | ${false}
    ${[true]}                                    | ${false}
    ${[Boolean()]}                               | ${false}
    ${[new Boolean()]}                           | ${false}
    ${[true]}                                    | ${false}
    ${new Set()}                                 | ${false}
    ${new Map()}                                 | ${false}
    ${Symbol()}                                  | ${false}
    ${'192.168.0.0'}                             | ${false}
    ${'2001:0000:130F:0000:0000:09C0:876A:130B'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isIPv6(arg)).toBe(expected)
    expect(is.ipv6(arg)).toBe(expected)
  })
})

describe('is.ip | isIP', () => {
  test.each`
    arg                          | expected
    ${null}                      | ${false}
    ${undefined}                 | ${false}
    ${false}                     | ${false}
    ${Boolean()}                 | ${false}
    ${new Boolean()}             | ${false}
    ${''}                        | ${false}
    ${'string'}                  | ${false}
    ${'a1'}                      | ${false}
    ${'@plop'}                   | ${false}
    ${'kikoo@plop'}              | ${false}
    ${'john@doe.io'}             | ${false}
    ${'plop.io'}                 | ${false}
    ${'ftp://plop.io'}           | ${false}
    ${'http://plop.io'}          | ${false}
    ${'https://plop.io'}         | ${false}
    ${'0'}                       | ${false}
    ${'1'}                       | ${false}
    ${'01'}                      | ${false}
    ${String('')}                | ${false}
    ${new String('')}            | ${false}
    ${3}                         | ${false}
    ${-1}                        | ${false}
    ${Infinity}                  | ${false}
    ${-Infinity}                 | ${false}
    ${NaN}                       | ${false}
    ${Number(1)}                 | ${false}
    ${new Number(1)}             | ${false}
    ${1n}                        | ${false}
    ${{}}                        | ${false}
    ${{ x: 1 }}                  | ${false}
    ${Object.create({})}         | ${false}
    ${[]}                        | ${false}
    ${['x']}                     | ${false}
    ${[String('')]}              | ${false}
    ${[new String('')]}          | ${false}
    ${[1, null]}                 | ${false}
    ${[1, NaN]}                  | ${false}
    ${[Infinity, NaN]}           | ${false}
    ${[Infinity, Number(1)]}     | ${false}
    ${[Infinity, new Number(1)]} | ${false}
    ${[1, 2, 3]}                 | ${false}
    ${[{}]}                      | ${false}
    ${[Object.create({})]}       | ${false}
    ${[!'']}                     | ${false}
    ${[true]}                    | ${false}
    ${[Boolean()]}               | ${false}
    ${[new Boolean()]}           | ${false}
    ${[true]}                    | ${false}
    ${new Set()}                 | ${false}
    ${new Map()}                 | ${false}
    ${Symbol()}                  | ${false}
    ${'192.168.0.0'}             | ${true}
    ${'0.0.0.0'}                 | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isIP(arg)).toBe(expected)
    expect(is.ip(arg)).toBe(expected)
  })
})
