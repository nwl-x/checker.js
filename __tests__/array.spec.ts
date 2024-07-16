import {
  is,
  isArray,
  isMap,
  isSet,
  isArrayOrNull,
  isArrayOfNumbers,
  isArrayOfStrings,
  isArrayOfObjects,
  isArrayOfBooleans,
  isArrayEmpty,
  isArrayNotEmpty
} from '../src/index'

describe('is.array | isArray', () => {
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
    ${[]}                        | ${true}
    ${['x']}                     | ${true}
    ${[String('')]}              | ${true}
    ${[new String('')]}          | ${true}
    ${[1, null]}                 | ${true}
    ${[1, NaN]}                  | ${true}
    ${[Infinity, NaN]}           | ${true}
    ${[Infinity, Number(1)]}     | ${true}
    ${[Infinity, new Number(1)]} | ${true}
    ${[1, 2, 3]}                 | ${true}
    ${[{}]}                      | ${true}
    ${[Object.create({})]}       | ${true}
    ${[!'']}                     | ${true}
    ${[true]}                    | ${true}
    ${[Boolean()]}               | ${true}
    ${[new Boolean()]}           | ${true}
    ${[true]}                    | ${true}
    ${new Set()}                 | ${false}
    ${new Map()}                 | ${false}
    ${Symbol()}                  | ${false}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isArray(arg)).toBe(expected)
    expect(is.array(arg)).toBe(expected)
  })
})

describe('is.array.number | isArrayOfNumbers', () => {
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
    ${[Infinity, Number(1)]}     | ${true}
    ${[Infinity, new Number(1)]} | ${true}
    ${[1, 2, 3]}                 | ${true}
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
    expect(isArrayOfNumbers(arg)).toBe(expected)
    expect(is.array.number(arg)).toBe(expected)
  })
})

describe('is.array.string | isArrayOfStrings', () => {
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
    ${['x']}                     | ${true}
    ${[String('')]}              | ${true}
    ${[new String('')]}          | ${true}
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
    expect(isArrayOfStrings(arg)).toBe(expected)
    expect(is.array.string(arg)).toBe(expected)
  })
})

describe('is.array.object | isArrayOfObjects', () => {
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
    ${[{}]}                      | ${true}
    ${[Object.create({})]}       | ${true}
    ${[!'']}                     | ${false}
    ${[true]}                    | ${false}
    ${[Boolean()]}               | ${false}
    ${[new Boolean()]}           | ${false}
    ${[true]}                    | ${false}
    ${new Set()}                 | ${false}
    ${new Map()}                 | ${false}
    ${Symbol()}                  | ${false}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isArrayOfObjects(arg)).toBe(expected)
    expect(is.array.object(arg)).toBe(expected)
  })
})

describe('is.array.boolean |isArrayOfBooleans', () => {
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
    ${[!'']}                     | ${true}
    ${[true]}                    | ${true}
    ${[Boolean()]}               | ${true}
    ${[new Boolean()]}           | ${true}
    ${[true]}                    | ${true}
    ${new Set()}                 | ${false}
    ${new Map()}                 | ${false}
    ${Symbol()}                  | ${false}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isArrayOfBooleans(arg)).toBe(expected)
    expect(is.array.boolean(arg)).toBe(expected)
  })
})

describe('is.array.empty | isArrayNotEmpty', () => {
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
    ${[]}                        | ${true}
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
    expect(isArrayEmpty(arg)).toBe(expected)
    expect(is.array.empty(arg)).toBe(expected)
  })
})

describe('is.array.notEmpty | isArrayNotEmpty', () => {
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
    ${['x']}                     | ${true}
    ${[String('')]}              | ${true}
    ${[new String('')]}          | ${true}
    ${[1, null]}                 | ${true}
    ${[1, NaN]}                  | ${true}
    ${[Infinity, NaN]}           | ${true}
    ${[Infinity, Number(1)]}     | ${true}
    ${[Infinity, new Number(1)]} | ${true}
    ${[1, 2, 3]}                 | ${true}
    ${[{}]}                      | ${true}
    ${[Object.create({})]}       | ${true}
    ${[!'']}                     | ${true}
    ${[true]}                    | ${true}
    ${[Boolean()]}               | ${true}
    ${[new Boolean()]}           | ${true}
    ${[true]}                    | ${true}
    ${new Set()}                 | ${false}
    ${new Map()}                 | ${false}
    ${Symbol()}                  | ${false}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isArrayNotEmpty(arg)).toBe(expected)
    expect(is.array.notEmpty(arg)).toBe(expected)
  })
})

describe('is.array.orNull |isArrayOrNull', () => {
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
    ${{}}                        | ${false}
    ${{ x: 1 }}                  | ${false}
    ${Object.create({})}         | ${false}
    ${[]}                        | ${true}
    ${['x']}                     | ${true}
    ${[String('')]}              | ${true}
    ${[new String('')]}          | ${true}
    ${[1, null]}                 | ${true}
    ${[1, NaN]}                  | ${true}
    ${[Infinity, NaN]}           | ${true}
    ${[Infinity, Number(1)]}     | ${true}
    ${[Infinity, new Number(1)]} | ${true}
    ${[1, 2, 3]}                 | ${true}
    ${[{}]}                      | ${true}
    ${[Object.create({})]}       | ${true}
    ${[!'']}                     | ${true}
    ${[true]}                    | ${true}
    ${[Boolean()]}               | ${true}
    ${[new Boolean()]}           | ${true}
    ${[true]}                    | ${true}
    ${new Set()}                 | ${false}
    ${new Map()}                 | ${false}
    ${Symbol()}                  | ${false}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isArrayOrNull(arg)).toBe(expected)
    expect(is.array.orNull(arg)).toBe(expected)
  })
})

describe('is.map |isMap', () => {
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
    ${new Map()}                 | ${true}
    ${Symbol()}                  | ${false}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isMap(arg)).toBe(expected)
    expect(is.map(arg)).toBe(expected)
  })
})

describe('is.set |isSet', () => {
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
    ${new Set()}                 | ${true}
    ${new Map()}                 | ${false}
    ${Symbol()}                  | ${false}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(isSet(arg)).toBe(expected)
    expect(is.set(arg)).toBe(expected)
  })
})
