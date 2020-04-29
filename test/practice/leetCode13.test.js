import { romanToInt } from "../../practice/easy/leetCode13";

test('罗马数字转换', () => {
  const s = 'LVIII';
  expect(romanToInt(s)).toEqual(58);
})
