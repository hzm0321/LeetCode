import { validPalindrome } from "../../practice/easy/leetCode680";

test('验证回文字符串2', () => {
  const s = 'aba';
  expect(validPalindrome(s)).toBeTruthy();
})


test('验证回文字符串3', () => {
  const s = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga";
  expect(validPalindrome(s)).toBeTruthy();
})
