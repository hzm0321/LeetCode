/*
 * leetCode53 - 最大子序和
 * @date: 2020/5/9
 */

export function maxSubArray(nums) {
  let pre = 0, ans = nums[0];
  nums.forEach((item) => {
    pre = Math.max(pre + item, item); // 加上这一项与重新从这一项开始的两个值比较
    ans = Math.max(pre, ans);
  })
  return ans;
}

