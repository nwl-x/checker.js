import is from '../src/is'

describe('is', () => {
  test.each`
    arg      | expected
    ${true}  | ${true}
    ${false} | ${true}
  `(`With "$arg" -> $expected`, ({ arg, expected }) => {
    expect(is.boolean(arg)).toBe(expected)
    expect(is.array(arg)).toBe(expected)
    expect(is.array.number(arg)).toBe(expected)
  })
})
