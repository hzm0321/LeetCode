import { searchInsert } from "../../practice/easy/leetCode35";

test('二分法搜索', () => {
  const nums = [1, 3, 5, 6];
  const target = 5;
  expect(searchInsert(nums, target)).toEqual(2);
})

test('二分法搜索', () => {
  const nums = [1, 3, 5, 6];
  const target = 2;
  expect(searchInsert(nums, target)).toEqual(1);
})
