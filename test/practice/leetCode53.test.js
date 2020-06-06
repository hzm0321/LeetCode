import { maxSubArray } from "../../practice/easy/leetCode53";

test('最大子序和', () => {
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  expect(maxSubArray(arr)).toEqual(6)
})

