import { isUUID, isUUIDv3, isUUIDv4, isUUIDv5 } from '../src/index'

describe('isUUID', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${false}                                  | ${false}
    ${undefined}                              | ${false}
    ${'string'}                               | ${false}
    ${''}                                     | ${false}
    ${12345}                                  | ${false}
    ${-12345}                                 | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${{}}                                     | ${false}
    ${{ x: 'x' }}                             | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${true}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${true}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${true}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUUID(arg)).toBe(expected))
})

describe('isUUIDv3', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${false}                                  | ${false}
    ${undefined}                              | ${false}
    ${'string'}                               | ${false}
    ${''}                                     | ${false}
    ${12345}                                  | ${false}
    ${-12345}                                 | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${{}}                                     | ${false}
    ${{ x: 'x' }}                             | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${false}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${false}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${false}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUUIDv3(arg)).toBe(expected))
})

describe('isUUIDv4', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${false}                                  | ${false}
    ${undefined}                              | ${false}
    ${'string'}                               | ${false}
    ${''}                                     | ${false}
    ${12345}                                  | ${false}
    ${-12345}                                 | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${{}}                                     | ${false}
    ${{ x: 'x' }}                             | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${false}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${false}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${false}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUUIDv4(arg)).toBe(expected))
})

describe('isUUIDv5', () => {
  test.each`
    arg                                       | expected
    ${null}                                   | ${false}
    ${false}                                  | ${false}
    ${undefined}                              | ${false}
    ${'string'}                               | ${false}
    ${''}                                     | ${false}
    ${12345}                                  | ${false}
    ${-12345}                                 | ${false}
    ${Infinity}                               | ${false}
    ${-Infinity}                              | ${false}
    ${NaN}                                    | ${false}
    ${[]}                                     | ${false}
    ${['x']}                                  | ${false}
    ${{}}                                     | ${false}
    ${{ x: 'x' }}                             | ${false}
    ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'} | ${false}
    ${'a3bb189e-8bf9-3888-9912-ace4e6543002'} | ${false}
    ${'64971d44-1d1a-403f-9a55-7fc566596fb2'} | ${false}
    ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => expect(isUUIDv5(arg)).toBe(expected))
})
