import { is, isDate, isRegExp, isError, isFalsy, isTruthy } from '../src/index'

describe('is.date | isDate', () => {
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
    ${new Date()}                | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isDate(arg)).toBe(expected)
    expect(is.date(arg)).toBe(expected)
  })
})

describe('is.regExp | isRegExp', () => {
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
    ${/$/}                       | ${true}
    ${new RegExp(/^$/)}          | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isRegExp(arg)).toBe(expected)
    expect(is.regExp(arg)).toBe(expected)
  })
})

describe('is.error | isError', () => {
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
    ${new Error()}               | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isError(arg)).toBe(expected)
    expect(is.error(arg)).toBe(expected)
  })
})

describe('is.falsy | isFalsy', () => {
  test.each`
    arg                          | expected
    ${null}                      | ${true}
    ${undefined}                 | ${true}
    ${false}                     | ${true}
    ${Boolean()}                 | ${true}
    ${new Boolean()}             | ${false}
    ${''}                        | ${true}
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
    ${String('')}                | ${true}
    ${new String('')}            | ${false}
    ${3}                         | ${false}
    ${-1}                        | ${false}
    ${Infinity}                  | ${false}
    ${-Infinity}                 | ${false}
    ${NaN}                       | ${true}
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
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isFalsy(arg)).toBe(expected)
    expect(is.falsy(arg)).toBe(expected)
  })
})

describe('is.truthy | isTruthy', () => {
  test.each`
    arg                          | expected
    ${null}                      | ${false}
    ${undefined}                 | ${false}
    ${true}                      | ${true}
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
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isTruthy(arg)).toBe(expected)
    expect(is.truthy(arg)).toBe(expected)
  })
})
