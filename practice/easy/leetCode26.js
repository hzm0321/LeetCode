/*
 * leetCode26 - 删除排序数组中的重复项
 */

export function removeDuplicates(nums) {
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    const pre = nums[i - 1];
    if (cur === pre) {
      nums.splice(i - 1,1);
      i--;
    }
  }
  return nums.length;
}

