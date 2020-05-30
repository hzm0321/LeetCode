import { addBinary, addBinary2 } from "../../practice/easy/leetCode67";

test('二进制相加1', () => {
  const a = '11';
  const b = '1';
  expect(addBinary(a, b)).toEqual('100')
})

test('二进制相加2', () => {
  const a = '1010';
  const b = '1011';
  expect(addBinary(a, b)).toEqual('10101')
})

test('二进制相加3', () => {
  const a = '1010';
  const b = '1011';
  expect(addBinary2(a, b)).toEqual('10101')
})
