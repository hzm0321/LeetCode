import { removeDuplicates } from "../../practice/easy/leetCode26";

test('数组重复项删除', () => {
  const nums = [1, 1, 3];
  expect(removeDuplicates(nums)).toEqual(2)
})

test('数组重复项删除', () => {
  const nums = [0,0,1,1,1,2,2,3,3,4];
  expect(removeDuplicates(nums)).toEqual(5)
})
