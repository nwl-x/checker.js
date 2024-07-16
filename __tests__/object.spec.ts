import { is, isObject, isObjectOrNull, isObjectEmpty, isObjectNotEmpty } from '../src/index'

describe('is.object | isObject', () => {
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
    ${{}}                        | ${true}
    ${{ x: 1 }}                  | ${true}
    ${Object.create({})}         | ${true}
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
    expect(isObject(arg)).toBe(expected)
    expect(is.object(arg)).toBe(expected)
  })
})

describe('is.object.notEmpty | isObjectNotEmpty', () => {
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
    ${{ x: 1 }}                  | ${true}
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
    expect(isObjectNotEmpty(arg)).toBe(expected)
    expect(is.object.notEmpty(arg)).toBe(expected)
  })
})

describe('is.object.empty | isObjectEmpty', () => {
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
    ${{}}                        | ${true}
    ${{ x: 1 }}                  | ${false}
    ${Object.create({})}         | ${true}
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
    expect(isObjectEmpty(arg)).toBe(expected)
    expect(is.object.empty(arg)).toBe(expected)
  })
})

describe('is.object.orNull | isObjectOrNull', () => {
  test.each`
    arg                          | expected
    ${null}                      | ${true}
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
    ${{}}                        | ${true}
    ${{ x: 1 }}                  | ${true}
    ${Object.create({})}         | ${true}
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
    expect(isObjectOrNull(arg)).toBe(expected)
    expect(is.object.orNull(arg)).toBe(expected)
  })
})
