import { is, isUUID, isUUIDv3, isUUIDv4, isUUIDv5 } from '../src/index'

describe('is.uuid | isUUID', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${undefined}                              | ${false}
    ${false}                                  | ${false}
    ${Boolean()}                              | ${false}
    ${new Boolean()}                          | ${false}
    ${''}                                     | ${false}
    ${'string'}                               | ${false}
    ${'a1'}                                   | ${false}
    ${'@plop'}                                | ${false}
    ${'kikoo@plop'}                           | ${false}
    ${'john@doe.io'}                          | ${false}
    ${'plop.io'}                              | ${false}
    ${'ftp://plop.io'}                        | ${false}
    ${'http://plop.io'}                       | ${false}
    ${'https://plop.io'}                      | ${false}
    ${'0'}                                    | ${false}
    ${'1'}                                    | ${false}
    ${'01'}                                   | ${false}
    ${String('')}                             | ${false}
    ${new String('')}                         | ${false}
    ${3}                                      | ${false}
    ${-1}                                     | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${Number(1)}                              | ${false}
    ${new Number(1)}                          | ${false}
    ${1n}                                     | ${false}
    ${{}}                                     | ${false}
    ${{ x: 1 }}                               | ${false}
    ${Object.create({})}                      | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${[String('')]}                           | ${false}
    ${[new String('')]}                       | ${false}
    ${[1, null]}                              | ${false}
    ${[1, NaN]}                               | ${false}
    ${[Infinity, NaN]}                        | ${false}
    ${[Infinity, Number(1)]}                  | ${false}
    ${[Infinity, new Number(1)]}              | ${false}
    ${[1, 2, 3]}                              | ${false}
    ${[{}]}                                   | ${false}
    ${[Object.create({})]}                    | ${false}
    ${[!'']}                                  | ${false}
    ${[true]}                                 | ${false}
    ${[Boolean()]}                            | ${false}
    ${[new Boolean()]}                        | ${false}
    ${[true]}                                 | ${false}
    ${new Set()}                              | ${false}
    ${new Map()}                              | ${false}
    ${Symbol()}                               | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${true}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${true}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${true}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isUUID(arg)).toBe(expected)
    expect(is.uuid(arg)).toBe(expected)
  })
})

describe('is.uuidv3 | isUUIDv3', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${undefined}                              | ${false}
    ${false}                                  | ${false}
    ${Boolean()}                              | ${false}
    ${new Boolean()}                          | ${false}
    ${''}                                     | ${false}
    ${'string'}                               | ${false}
    ${'a1'}                                   | ${false}
    ${'@plop'}                                | ${false}
    ${'kikoo@plop'}                           | ${false}
    ${'john@doe.io'}                          | ${false}
    ${'plop.io'}                              | ${false}
    ${'ftp://plop.io'}                        | ${false}
    ${'http://plop.io'}                       | ${false}
    ${'https://plop.io'}                      | ${false}
    ${'0'}                                    | ${false}
    ${'1'}                                    | ${false}
    ${'01'}                                   | ${false}
    ${String('')}                             | ${false}
    ${new String('')}                         | ${false}
    ${3}                                      | ${false}
    ${-1}                                     | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${Number(1)}                              | ${false}
    ${new Number(1)}                          | ${false}
    ${1n}                                     | ${false}
    ${{}}                                     | ${false}
    ${{ x: 1 }}                               | ${false}
    ${Object.create({})}                      | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${[String('')]}                           | ${false}
    ${[new String('')]}                       | ${false}
    ${[1, null]}                              | ${false}
    ${[1, NaN]}                               | ${false}
    ${[Infinity, NaN]}                        | ${false}
    ${[Infinity, Number(1)]}                  | ${false}
    ${[Infinity, new Number(1)]}              | ${false}
    ${[1, 2, 3]}                              | ${false}
    ${[{}]}                                   | ${false}
    ${[Object.create({})]}                    | ${false}
    ${[!'']}                                  | ${false}
    ${[true]}                                 | ${false}
    ${[Boolean()]}                            | ${false}
    ${[new Boolean()]}                        | ${false}
    ${[true]}                                 | ${false}
    ${new Set()}                              | ${false}
    ${new Map()}                              | ${false}
    ${Symbol()}                               | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${false}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${false}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${false}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isUUIDv3(arg)).toBe(expected)
    expect(is.uuidv3(arg)).toBe(expected)
  })
})

describe('is.uuidv4 | isUUIDv4', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${undefined}                              | ${false}
    ${false}                                  | ${false}
    ${Boolean()}                              | ${false}
    ${new Boolean()}                          | ${false}
    ${''}                                     | ${false}
    ${'string'}                               | ${false}
    ${'a1'}                                   | ${false}
    ${'@plop'}                                | ${false}
    ${'kikoo@plop'}                           | ${false}
    ${'john@doe.io'}                          | ${false}
    ${'plop.io'}                              | ${false}
    ${'ftp://plop.io'}                        | ${false}
    ${'http://plop.io'}                       | ${false}
    ${'https://plop.io'}                      | ${false}
    ${'0'}                                    | ${false}
    ${'1'}                                    | ${false}
    ${'01'}                                   | ${false}
    ${String('')}                             | ${false}
    ${new String('')}                         | ${false}
    ${3}                                      | ${false}
    ${-1}                                     | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${Number(1)}                              | ${false}
    ${new Number(1)}                          | ${false}
    ${1n}                                     | ${false}
    ${{}}                                     | ${false}
    ${{ x: 1 }}                               | ${false}
    ${Object.create({})}                      | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${[String('')]}                           | ${false}
    ${[new String('')]}                       | ${false}
    ${[1, null]}                              | ${false}
    ${[1, NaN]}                               | ${false}
    ${[Infinity, NaN]}                        | ${false}
    ${[Infinity, Number(1)]}                  | ${false}
    ${[Infinity, new Number(1)]}              | ${false}
    ${[1, 2, 3]}                              | ${false}
    ${[{}]}                                   | ${false}
    ${[Object.create({})]}                    | ${false}
    ${[!'']}                                  | ${false}
    ${[true]}                                 | ${false}
    ${[Boolean()]}                            | ${false}
    ${[new Boolean()]}                        | ${false}
    ${[true]}                                 | ${false}
    ${new Set()}                              | ${false}
    ${new Map()}                              | ${false}
    ${Symbol()}                               | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${false}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${false}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${false}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isUUIDv4(arg)).toBe(expected)
    expect(is.uuidv4(arg)).toBe(expected)
  })
})

describe('is.uuidv5 | isUUIDv5', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${undefined}                              | ${false}
    ${false}                                  | ${false}
    ${Boolean()}                              | ${false}
    ${new Boolean()}                          | ${false}
    ${''}                                     | ${false}
    ${'string'}                               | ${false}
    ${'a1'}                                   | ${false}
    ${'@plop'}                                | ${false}
    ${'kikoo@plop'}                           | ${false}
    ${'john@doe.io'}                          | ${false}
    ${'plop.io'}                              | ${false}
    ${'ftp://plop.io'}                        | ${false}
    ${'http://plop.io'}                       | ${false}
    ${'https://plop.io'}                      | ${false}
    ${'0'}                                    | ${false}
    ${'1'}                                    | ${false}
    ${'01'}                                   | ${false}
    ${String('')}                             | ${false}
    ${new String('')}                         | ${false}
    ${3}                                      | ${false}
    ${-1}                                     | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${Number(1)}                              | ${false}
    ${new Number(1)}                          | ${false}
    ${1n}                                     | ${false}
    ${{}}                                     | ${false}
    ${{ x: 1 }}                               | ${false}
    ${Object.create({})}                      | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${[String('')]}                           | ${false}
    ${[new String('')]}                       | ${false}
    ${[1, null]}                              | ${false}
    ${[1, NaN]}                               | ${false}
    ${[Infinity, NaN]}                        | ${false}
    ${[Infinity, Number(1)]}                  | ${false}
    ${[Infinity, new Number(1)]}              | ${false}
    ${[1, 2, 3]}                              | ${false}
    ${[{}]}                                   | ${false}
    ${[Object.create({})]}                    | ${false}
    ${[!'']}                                  | ${false}
    ${[true]}                                 | ${false}
    ${[Boolean()]}                            | ${false}
    ${[new Boolean()]}                        | ${false}
    ${[true]}                                 | ${false}
    ${new Set()}                              | ${false}
    ${new Map()}                              | ${false}
    ${Symbol()}                               | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${false}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${false}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${false}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isUUIDv5(arg)).toBe(expected)
    expect(is.uuidv5(arg)).toBe(expected)
  })
})
