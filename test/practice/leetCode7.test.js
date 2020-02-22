import {reverseInt, reverseInt2} from '../../practice/easy/leetCode7'

test('整数反转', () => {
  const num = 123
  expect(reverseInt(num)).toEqual(321)
});

test('整数反转', () => {
  const num = -123
  expect(reverseInt(num)).toEqual(-321)
});

test('整数反转', () => {
  const num = 1
  expect(reverseInt(num)).toEqual(1)
});

test('整数反转', () => {
  const num = -1000
  expect(reverseInt(num)).toEqual(-1)
});

test('整数反转', () => {
  const num = 1000
  expect(reverseInt(num)).toEqual(1)
});

test('整数反转', () => {
  const num = 1534236469
  expect(reverseInt(num)).toEqual(0)
});

test('整数反转', () => {
  const num = 1534236469
  expect(reverseInt2(num)).toEqual(0)
});

test('整数反转', () => {
  const num = 1000
  expect(reverseInt2(num)).toEqual(1)
});
