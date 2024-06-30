import { is } from '../src/index'
import { TypeCheck } from '../src/type'

describe('is', () => {
  test.each`
    type                    | arg                                          | expected
    ${'boolean'}            | ${true}                                      | ${true}
    ${'boolean'}            | ${false}                                     | ${true}
    ${'boolean'}            | ${'false'}                                   | ${false}
    ${'boolean-or-null'}    | ${true}                                      | ${true}
    ${'boolean-or-null'}    | ${null}                                      | ${true}
    ${'boolean-or-null'}    | ${'null'}                                    | ${false}
    ${'bigint'}             | ${BigInt(10)}                                | ${true}
    ${'bigint'}             | ${10n}                                       | ${true}
    ${'bigint'}             | ${10}                                        | ${false}
    ${'number'}             | ${10}                                        | ${true}
    ${'number'}             | ${'10'}                                      | ${false}
    ${'null'}               | ${null}                                      | ${true}
    ${'string'}             | ${''}                                        | ${true}
    ${'string'}             | ${10}                                        | ${false}
    ${'undefined'}          | ${undefined}                                 | ${true}
    ${'undefined'}          | ${'undefined'}                               | ${false}
    ${'symbol'}             | ${Symbol()}                                  | ${true}
    ${'primitive'}          | ${10}                                        | ${true}
    ${'string-or-null'}     | ${''}                                        | ${true}
    ${'string-or-null'}     | ${null}                                      | ${true}
    ${'string-not-empty'}   | ${'x'}                                       | ${true}
    ${'string-not-empty'}   | ${''}                                        | ${false}
    ${'string-not-empty'}   | ${1}                                         | ${false}
    ${'alpha'}              | ${'1'}                                       | ${false}
    ${'alpha'}              | ${'a'}                                       | ${true}
    ${'numeric'}            | ${'1'}                                       | ${true}
    ${'numeric'}            | ${'a'}                                       | ${false}
    ${'alphanumeric'}       | ${'1a'}                                      | ${true}
    ${'alphanumeric'}       | ${'a1'}                                      | ${true}
    ${'alphanumeric'}       | ${'&'}                                       | ${false}
    ${'number-or-null'}     | ${0}                                         | ${true}
    ${'email'}              | ${'@plop.io'}                                | ${false}
    ${'email'}              | ${'@plop.io'}                                | ${false}
    ${'email'}              | ${'x@plop.io'}                               | ${true}
    ${'url'}                | ${'plop.io'}                                 | ${false}
    ${'url'}                | ${''}                                        | ${false}
    ${'url'}                | ${'http://plop.io'}                          | ${true}
    ${'binary-string'}      | ${''}                                        | ${false}
    ${'binary-string'}      | ${'0'}                                       | ${true}
    ${'binary-string'}      | ${'1'}                                       | ${true}
    ${'binary-string'}      | ${'01'}                                      | ${true}
    ${'binary-string'}      | ${'00'}                                      | ${true}
    ${'binary-string'}      | ${'111'}                                     | ${true}
    ${'binary-string'}      | ${'101'}                                     | ${true}
    ${'binary-string'}      | ${'010'}                                     | ${true}
    ${'binary-string'}      | ${'000'}                                     | ${true}
    ${'positive-number'}    | ${0}                                         | ${true}
    ${'negative-number'}    | ${-1}                                        | ${true}
    ${'negative-number'}    | ${''}                                        | ${false}
    ${'negative-number'}    | ${0}                                         | ${false}
    ${'infinite'}           | ${Infinity}                                  | ${true}
    ${'infinite'}           | ${0}                                         | ${false}
    ${'odd'}                | ${1}                                         | ${true}
    ${'even'}               | ${0}                                         | ${true}
    ${'array'}              | ${[]}                                        | ${true}
    ${'map'}                | ${new Map()}                                 | ${true}
    ${'set'}                | ${new Set()}                                 | ${true}
    ${'array-or-null'}      | ${[]}                                        | ${true}
    ${'array-of-numbers'}   | ${[]}                                        | ${false}
    ${'array-of-numbers'}   | ${[1]}                                       | ${true}
    ${'array-of-numbers'}   | ${[1, 2]}                                    | ${true}
    ${'array-of-numbers'}   | ${[1, 2, '3']}                               | ${false}
    ${'array-of-strings'}   | ${['x']}                                     | ${true}
    ${'array-of-strings'}   | ${[1]}                                       | ${false}
    ${'array-of-strings'}   | ${[]}                                        | ${false}
    ${'array-of-objects'}   | ${[{}]}                                      | ${true}
    ${'array-of-objects'}   | ${[]}                                        | ${false}
    ${'array-of-booleans'}  | ${[true]}                                    | ${true}
    ${'array-of-booleans'}  | ${[false]}                                   | ${true}
    ${'array-of-booleans'}  | ${[]}                                        | ${false}
    ${'array-not-empty'}    | ${['']}                                      | ${true}
    ${'array-not-empty'}    | ${[]}                                        | ${false}
    ${'object'}             | ${{}}                                        | ${true}
    ${'object-or-null'}     | ${{}}                                        | ${true}
    ${'object-not-empty'}   | ${{}}                                        | ${false}
    ${'object-not-empty'}   | ${[]}                                        | ${false}
    ${'object-not-empty'}   | ${{ x: 1 }}                                  | ${true}
    ${'promise'}            | ${Promise.resolve()}                         | ${true}
    ${'function'}           | ${() => {}}                                  | ${true}
    ${'async-function'}     | ${async () => {}}                            | ${true}
    ${'generator-function'} | ${function* () {}}                           | ${true}
    ${'ipv4'}               | ${'192.168.0.0'}                             | ${true}
    ${'ipv6'}               | ${'2001:0000:130F:0000:0000:09C0:876A:130B'} | ${true}
    ${'ip'}                 | ${'192.168.0.0'}                             | ${true}
    ${'uuid'}               | ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'}    | ${true}
    ${'uuid-v3'}            | ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'}    | ${false}
    ${'uuid-v3'}            | ${'a3bb189e-8bf9-3888-9912-ace4e6543002'}    | ${true}
    ${'uuid-v4'}            | ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'}    | ${false}
    ${'uuid-v4'}            | ${'64971d44-1d1a-403f-9a55-7fc566596fb2'}    | ${true}
    ${'uuid-v5'}            | ${'0d65e2ae-2e37-11ef-bf4f-39fde292cc01'}    | ${false}
    ${'uuid-v5'}            | ${'a6edc906-2f9f-5fb2-a373-efac406f0ef2'}    | ${true}
    ${'date'}               | ${new Date()}                                | ${true}
    ${'regexp'}             | ${/$/}                                       | ${true}
    ${'error'}              | ${new Error()}                               | ${true}
    ${'falsy'}              | ${false}                                     | ${true}
    ${'truthy'}             | ${true}                                      | ${true}
    ${'plop'}               | ${true}                                      | ${false}
  `(`With "$type -> $arg" -> $expected`, ({ type, arg, expected }) => expect(is(type as TypeCheck, arg)).toBe(expected))
})
