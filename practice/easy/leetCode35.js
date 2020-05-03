/*
 * leetCode35 - 搜索插入位置
 */

/**
 * 二分法
 * @param nums
 * @param target
 * @returns {*|number}
 */
export function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // 是否在最大值区域
  if (target > nums[right]) {
    return right + 1;
  }
  if (target < nums[left]) {
    return left
  }
  while (left < right) {
    let mid = (left + right) >>> 1;
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
