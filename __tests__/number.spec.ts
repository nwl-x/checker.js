import {
  is,
  isPositiveNumber,
  isNegativeNumber,
  isInfinite,
  isNumberOrNull,
  isDecimal,
  isGreaterThan,
  isGreaterEqualThan,
  isLessThan,
  isLessEqualThan,
  isBetween,
  isBetweenEqual,
  isOdd,
  isEven
} from '../src/index'

describe('is.number.positive | isPositiveNumber', () => {
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
    ${3}                         | ${true}
    ${-1}                        | ${false}
    ${Infinity}                  | ${true}
    ${-Infinity}                 | ${false}
    ${NaN}                       | ${false}
    ${Number(1)}                 | ${true}
    ${new Number(1)}             | ${true}
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
    expect(isPositiveNumber(arg)).toBe(expected)
    expect(is.number.positive(arg)).toBe(expected)
  })
})

describe('is.number.negative | isNegativeNumber', () => {
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
    ${-1}                        | ${true}
    ${Infinity}                  | ${false}
    ${-Infinity}                 | ${true}
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
    expect(isNegativeNumber(arg)).toBe(expected)
    expect(is.number.negative(arg)).toBe(expected)
  })
})

describe('is.number.infinite | isInfinite', () => {
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
    ${Infinity}                  | ${true}
    ${-Infinity}                 | ${true}
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
    expect(isInfinite(arg)).toBe(expected)
    expect(is.number.infinite(arg)).toBe(expected)
  })
})

describe('is.number.orNull | isNumberOrNull', () => {
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
    ${3}                         | ${true}
    ${-1}                        | ${true}
    ${Infinity}                  | ${true}
    ${-Infinity}                 | ${true}
    ${NaN}                       | ${false}
    ${Number(1)}                 | ${true}
    ${new Number(1)}             | ${true}
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
    expect(isNumberOrNull(arg)).toBe(expected)
    expect(is.number.orNull(arg)).toBe(expected)
  })
})

describe('is.number.decimal | isDecimal', () => {
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
    ${3.1}                       | ${true}
    ${0.1}                       | ${true}
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
    expect(isDecimal(arg)).toBe(expected)
    expect(is.number.decimal(arg)).toBe(expected)
  })
})

describe('is.number.greaterThan | isGreaterThan', () => {
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
    ${3}                         | ${true}
    ${-1}                        | ${false}
    ${Infinity}                  | ${true}
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
    expect(isGreaterThan(arg, 1)).toBe(expected)
    expect(is.number.greaterThan(arg, 1)).toBe(expected)
  })
})

describe('is.number.greaterEqualThan | isGreaterEqualThan', () => {
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
    ${3}                         | ${true}
    ${-1}                        | ${false}
    ${Infinity}                  | ${true}
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
    expect(isGreaterEqualThan(arg, 3)).toBe(expected)
    expect(is.number.greaterEqualThan(arg, 3)).toBe(expected)
  })
})

describe('is.number.lessThan | isLessThan', () => {
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
    ${-1}                        | ${true}
    ${Infinity}                  | ${false}
    ${-Infinity}                 | ${true}
    ${NaN}                       | ${false}
    ${Number(1)}                 | ${true}
    ${new Number(1)}             | ${true}
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
    expect(isLessThan(arg, 2)).toBe(expected)
    expect(is.number.lessThan(arg, 2)).toBe(expected)
  })
})

describe('is.number.lessEqualThan | isLessEqualThan', () => {
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
    ${3}                         | ${true}
    ${-1}                        | ${true}
    ${Infinity}                  | ${false}
    ${-Infinity}                 | ${true}
    ${NaN}                       | ${false}
    ${Number(1)}                 | ${true}
    ${new Number(1)}             | ${true}
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
    expect(isLessEqualThan(arg, 3)).toBe(expected)
    expect(is.number.lessEqualThan(arg, 3)).toBe(expected)
  })
})

describe('is.number.between | isBetween', () => {
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
    ${3}                         | ${true}
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
    expect(isBetween(arg, 1, 4)).toBe(expected)
    expect(is.number.between(arg, 1, 4)).toBe(expected)
  })
})

describe('is.number.betweenEqual | isBetweenEqual', () => {
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
    ${3}                         | ${true}
    ${-1}                        | ${false}
    ${Infinity}                  | ${false}
    ${-Infinity}                 | ${false}
    ${NaN}                       | ${false}
    ${Number(1)}                 | ${true}
    ${new Number(1)}             | ${true}
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
    expect(isBetweenEqual(arg, 1, 3)).toBe(expected)
    expect(is.number.betweenEqual(arg, 1, 3)).toBe(expected)
  })
})

describe('is.odd | isOdd', () => {
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
    ${2}                         | ${false}
    ${-1}                        | ${true}
    ${Infinity}                  | ${false}
    ${-Infinity}                 | ${false}
    ${NaN}                       | ${false}
    ${Number(1)}                 | ${true}
    ${new Number(1)}             | ${true}
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
    expect(isOdd(arg)).toBe(expected)
    expect(is.odd(arg)).toBe(expected)
  })
})

describe('is.even | isEven', () => {
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
    ${2}                         | ${true}
    ${-2}                        | ${true}
    ${Infinity}                  | ${false}
    ${-Infinity}                 | ${false}
    ${NaN}                       | ${false}
    ${Number(2)}                 | ${true}
    ${new Number(2)}             | ${true}
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
    expect(isEven(arg)).toBe(expected)
    expect(is.even(arg)).toBe(expected)
  })
})
