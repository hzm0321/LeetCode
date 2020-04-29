import { longestCommonPrefix } from "../../practice/easy/leetCode14";
test('最长前缀测试', () => {
  const arr = ["aa", "ab"];
  expect(longestCommonPrefix(arr)).toEqual("a")
})

test('最长前缀测试', () => {
  const arr = ["aa", "ab","bbb"];
  expect(longestCommonPrefix(arr)).toEqual("")
})

test('最长前缀测试', () => {
  const arr = [];
  expect(longestCommonPrefix(arr)).toEqual("")
})

test('最长前缀测试', () => {
  const arr = ["aa","aa"];
  expect(longestCommonPrefix(arr)).toEqual("aa")
})
