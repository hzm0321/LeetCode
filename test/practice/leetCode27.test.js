import { removeElement } from "../../practice/easy/leetCode27";

test('移除元素', () => {LeetCode
  const nums = [3, 2, 2, 3];
  const val = 3;
  expect(removeElement(nums, val)).toEqual(2)
})

test('移除元素', () => {
  const nums = [0,1,2,2,3,0,4,2];
  const val = 2;
  expect(removeElement(nums, val)).toEqual(5)
})

