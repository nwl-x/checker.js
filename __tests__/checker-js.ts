import {
  isArray,
  isArrayNotEmpty,
  isArrayOrNull,
  isBoolean,
  isBooleanOrNull,
  isNull,
  isNumber,
  isNumberOrNull,
  isPositiveNumber,
  isNegativeNumber,
  isObject,
  isObjectNotEmpty,
  isObjectOrNull,
  isString,
  isStringNotEmpty,
  isStringOrNull,
  isUndefined,
} from '../src/index';

describe('isArray', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${null}      | ${false}
    ${false}     | ${false}
    ${'string'}  | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isArray(arg)).toBe(expected));
});

describe('isArrayNotEmpty', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${null}      | ${false}
    ${false}     | ${false}
    ${'string'}  | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${['x']}     | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isArrayNotEmpty(arg)).toBe(expected));
});

describe('isArrayOrNull', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${false}     | ${false}
    ${'string'}  | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${{}}        | ${false}
    ${null}      | ${true}
    ${[]}        | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isArrayOrNull(arg)).toBe(expected));
});

describe('isBoolean', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${null}      | ${false}
    ${'string'}  | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${false}     | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isBoolean(arg)).toBe(expected));
});

describe('isBooleanOrNull', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${'string'}  | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${null}      | ${true}
    ${false}     | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isBooleanOrNull(arg)).toBe(expected));
});

describe('isNull', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${false}     | ${false}
    ${'string'}  | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${null}      | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isNull(arg)).toBe(expected));
});

describe('isNumber', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${null}      | ${false}
    ${false}     | ${false}
    ${'string'}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${NaN}       | ${true}
    ${Infinity}  | ${true}
    ${-12345}    | ${true}
    ${12345}     | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isNumber(arg)).toBe(expected));
});

describe('isNumberOrNull', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${false}     | ${false}
    ${'string'}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${null}      | ${true}
    ${NaN}       | ${true}
    ${Infinity}  | ${true}
    ${-12345}    | ${true}
    ${12345}     | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isNumberOrNull(arg)).toBe(expected));
});

describe('isPositiveNumber', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${null}      | ${false}
    ${false}     | ${false}
    ${'string'}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${-12345}    | ${false}
    ${NaN}       | ${false}
    ${Infinity}  | ${true}
    ${12345}     | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isPositiveNumber(arg)).toBe(expected));
});

describe('isNegativeNumber', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${null}      | ${false}
    ${false}     | ${false}
    ${'string'}  | ${false}
    ${12345}     | ${false}
    ${Infinity}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${-Infinity} | ${true}
    ${-12345}    | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isNegativeNumber(arg)).toBe(expected));
});

describe('isObject', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${false}     | ${false}
    ${null}      | ${false}
    ${'string'}  | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${[]}        | ${false}
    ${{}}        | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isObject(arg)).toBe(expected));
});

describe('isObjectNotEmpty', () => {
  test.each`
    arg           | expected
    ${undefined}  | ${false}
    ${null}       | ${false}
    ${false}      | ${false}
    ${'string'}   | ${false}
    ${12345}      | ${false}
    ${-12345}     | ${false}
    ${Infinity}   | ${false}
    ${[]}         | ${false}
    ${{}}         | ${false}
    ${{ x: 'x' }} | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isObjectNotEmpty(arg)).toBe(expected));
});

describe('isObjectOrNull', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${false}     | ${false}
    ${'string'}  | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${[]}        | ${false}
    ${null}      | ${true}
    ${{}}        | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isObjectOrNull(arg)).toBe(expected));
});

describe('isString', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${null}      | ${false}
    ${false}     | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${'string'}  | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isString(arg)).toBe(expected));
});

describe('isStringNotEmpty', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${null}      | ${false}
    ${false}     | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${''}        | ${false}
    ${'string'}  | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isStringNotEmpty(arg)).toBe(expected));
});

describe('isStringOrNull', () => {
  test.each`
    arg          | expected
    ${undefined} | ${false}
    ${false}     | ${false}
    ${12345}     | ${false}
    ${-12345}    | ${false}
    ${Infinity}  | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${null}      | ${true}
    ${''}        | ${true}
    ${'string'}  | ${true}
  `(`$arg -> $expected`, ({ arg, expected }) => expect(isStringOrNull(arg)).toBe(expected));
});
