import {violence, array} from "../../practice/easy/leetCode1";

test('1.两数之和', () => {
  const nums = [2, 7, 11, 15];
  const target = 9
  expect(violence(nums,target)).toEqual([0,1])
});

test('1.两数之和', () => {
  const nums = [2, 7, 11, 15];
  const target = 9
  expect(array(nums,target)).toEqual([0,1])
});

